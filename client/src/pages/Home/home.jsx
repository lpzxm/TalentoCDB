import { useEffect, useState } from "react";
import { PiVolleyball } from "react-icons/pi";
import { PiNotePencilFill } from "react-icons/pi";
import { BiCategoryAlt } from "react-icons/bi";
import { PiCourtBasketballBold } from "react-icons/pi";

import { Link } from "react-router-dom";
import img1 from '../../assets/ini1.png';
import img2 from '../../assets/ini2.png';
import img3 from '../../assets/ini3.png';
import img4 from '../../assets/ini4.png';

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
                    className={`${index !== currentIndex && "hidden"}`}
                    src={img}
                    alt=""
                />
            ))}
        </div>
    );
}

export const Home = () => {


    return (
        <>
            <main className='flex lg:flex-row flex-col items-center pb-24 lg:pb-0'>
                <section className="lg:m-5 m-1 md:block hidden">
                    <article className="flex">
                        <div className="lg:h-60 sm:h-30 w-1/2">
                            <ImageSlider className="w-fit" images={[img1, img2]} interval={3000} />
                        </div>
                        <img className='m-3 sm:h- lg:h-52' src={img2} alt="" />
                    </article>
                    <article className='flex lg:mt-5'>
                        <img className='lg:w-52 relative ' src={img3} alt="" />
                        <img className='m-3 lg:h-60' src={img4} alt="" />
                    </article>
                </section>
                <section className="lg:m-5 m-1 md:hidden block w-14-">
                    <article>
                        <img className='ml-8' src={img2} alt="" />
                        <br />
                        <img className='mr-8' src={img3} alt="" />
                    </article>
                </section>
                <section className='flex flex-col justify-center items-center text-center sm:w-full w-1/2 lg:ml-32 ml-0'>
                    <div className='text-2xl font-bold my-5'>
                        <h1 className="font-sans">Bienvenido</h1>
                        <h1 className=''>Leonel Najarro</h1>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center space-y-6'>
                        <div className='border-2 w-full flex flex-row flex-wrap justify-around items-center'>
                            <p className='py-4'>
                                Entrenador de: <span className='underline'>Volleyball</span>
                            </p>
                            <PiVolleyball size="25px" />
                        </div>
                        <Link to="/registrarRubrica" className='border-2 w-full flex flex-row flex-wrap justify-around items-center'>
                            <p className='py-4'>
                                Registrar rúbrica
                            </p>
                            <PiNotePencilFill size="25px" />
                        </Link>
                        <Link to="/verCategorias" className='border-2 w-full flex flex-row flex-wrap justify-around items-center'>
                            <p className='py-4'>
                                Registrar categoria
                            </p>
                            <BiCategoryAlt size="25px" />
                        </Link>
                        <Link to="/verCategorias" className='border-2 w-full flex flex-row flex-wrap justify-around items-center'>
                            <p className='py-4 px-1'>
                                Atletas
                            </p>
                            <PiCourtBasketballBold size="25px" />
                        </Link>
                    </div>


                </section>
            </main>
        </>
    )
}