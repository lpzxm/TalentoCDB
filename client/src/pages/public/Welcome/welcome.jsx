import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import batu from "../../../assets/batu.webp";
import inicio3 from "../../../assets/inicio3.webp";
import opa1 from "../../../assets/Basket.png"
import opa2 from "../../../assets/sub-u13_u18.png"

const ImageSlider = ({ images, interval, className }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(sliderInterval);
    }, [images, interval]);

    return (
        <div className={className}>
            {images.map((img, index) => (
                <img
                    key={index}
                    className={`w-[800px] h-full ${index !== currentIndex && "hidden"}`}
                    src={img}
                    alt=""
                />
            ))}
        </div>
    );
}

export const Welcome = () => {

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const manageSize = () => {
            setIsDesktop(window.innerWidth >= 900);
        };

        manageSize();

        window.addEventListener("resize", manageSize);

        return () => {
            window.removeEventListener("resize", manageSize);

        };
    }, []);


    return <>{isDesktop ?
        <div className="flex flex-row w-full h-screen justify-between bg-welcomeImage bg-cover bg-right-top gap-x-10">
            <div className="flex w-full justify-center items-center">
                <div className="justify-center items-center flex flex-col">
                    <div className="font-bold text-wrap text-3xl w-full text-center ">
                        <p className="">&quot;El sueño que hace soñar&quot;</p>
                        <p className="pt-[40px]">Un corazón que transforma &quot;lobos&quot; en &quot;corderos&quot;</p>
                    </div>
                    <div>
                        <Link to='/login'>
                            <button className="rounded-xl bg-black radius w-64 m-24">
                                <p className="p-3 text-white text-base font-sans">Iniciar</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-full shrink-0 overflow-hidden">
                <ImageSlider images={[batu, inicio3]} interval={3000} />
                <ImageSlider className="h-full" images={[opa1, opa2]} interval={2000} />
            </div>
        </div>
        :
        <div className="flex flex-col w-full h-screen justify-center items-center bg-welcomeImage bg-cover bg-right-top gap-x-10">
            <div className="font-bold text-wrap text-2xl lg:text-3xl w-72 lg:w-full text-center font-playFair">
                <p className="">&quot;El sueño que hace soñar&quot;</p>
                <p className="pt-[40px]">Un corazón que transforma &quot;lobos&quot; en &quot;corderos&quot;</p>
            </div>
            <Link to='/login'>
                <button className="rounded-xl bg-black radius w-64 m-24">
                    <p className="p-3 text-white font-sans ">Iniciar</p>
                </button>
            </Link>
        </div>}</>
}