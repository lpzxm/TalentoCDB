import { useEffect, useState } from "react";
import { PiVolleyball } from "react-icons/pi";
import { PiNotePencilFill } from "react-icons/pi";
import { BiCategoryAlt } from "react-icons/bi";
import { PiCourtBasketballBold } from "react-icons/pi";

import { Link } from "react-router-dom";

import img1 from '../../../assets/ini1.webp';
import img2 from '../../../assets/ini2.webp';
// import img3 from '../../../assets/ini3.png';
import img4 from '../../../assets/ini4.webp';

import { useSession } from "../../../hooks/useSession";

const ImageSlider = ({ images, interval, className }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(sliderInterval);
    }, [images, interval]);

    return (
        <div className={className} >
            {images.map((img, index) => (
                <img
                    key={index}
                    className={`w-full h-full object-cover rounded-2xl ${index !== currentIndex && "hidden"}`}
                    src={img}
                    alt=""
                />
            ))}
        </div>
    );
}

export const Home = () => {
    
    const { usuario } = useSession();
    console.log(usuario)
    return (
        <>
            <main className='flex lg:flex-row flex-col items-center mt-6 mb-5 pb-24 lg:pb-0'>
                <div className="grid grid-cols-1 gap-5 p-3">
                    <ImageSlider className="880:col-span-1  w-[350px]" images={[img1]} />
                    <ImageSlider className="col-span-1 w-[350px]" images={[img2]} />
                    <ImageSlider className="col-span-2 w-full h-72" images={[img4]} />
                </div>

                <section className='flex flex-col justify-center items-center text-center sm:w-full w-1/2 lg:ml-32 ml-0'>
                    <div className='text-2xl font-bold my-5'>
                        <h1 className="font-sans">Bienvenido</h1>
                        <h1 className=''>{usuario.nombres} {usuario.apellidos}</h1>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center space-y-6'>
                        <div className='border-2 w-full flex flex-row flex-wrap justify-around items-center'>
                            <p className='py-4'>
                                Entrenador de: <span className='underline'>{usuario.sport.name}</span>
                            </p>
                            {/* <PiVolleyball size="25px" /> */}
                        </div>
                        <Link to="/coach/registrarRubrica" className='border-2 w-full flex flex-row flex-wrap justify-around items-center 880:space-x-14'>
                            <p className='py-4'>
                                Registrar rúbrica
                            </p>
                            <PiNotePencilFill className="" size="25px" />
                        </Link>
                        <Link to="/coach/categorias/nuevaCategoria" className='border-2 w-full flex flex-row flex-wrap justify-around items-center 880:space-x-10'>
                            <p className='py-4'>
                                Registrar categoria
                            </p>
                            <BiCategoryAlt size="25px" />
                        </Link>
                        <Link to="/coach/categorias" className='border-2 w-full flex flex-row flex-wrap justify-around items-center 880:space-x-28'>
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