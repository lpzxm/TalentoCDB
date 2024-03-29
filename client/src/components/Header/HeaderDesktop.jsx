import React from "react";
import { Link } from "react-router-dom";
import donbo from "../../assets/donbosco.png";

export const NavBar = () => {

    return (
        <>
            <header className='h-32 md:visible md:relative fixed flex flex-col'>
                <div className='bg-yellow-400 h-full'></div>
                <div className='bg-blue-700 h-full'></div>
                <div className="absolute top-3 w-full px-3 ">
                    <div className="w-full h-fit px-6 py-3 backdrop-blur-sm bg-white/80 flex flex-col md:flex-row justify-between items-center">
                        <img className='w-12 h-fit' src={donbo} alt="DB" />
                        <ul className="flex flex-col md:flex-row p-4 space-x-10 font-bold">
                            <Link to="/home"><li className="hover:border-b-4 border-red-400 transition-border ease-in-out duration-100">
                                Home
                            </li></Link>
                            <li className="hover:border-b-4 border-red-400 transition-border ease-in-out duration-100">
                                Registrar Categoria
                            </li>
                            <li className="hover:border-b-4 border-red-400 transition-border ease-in-out duration-100">
                                Ver categorias
                            </li>
                        </ul>
                    </div>
                </div>

            </header>
        </>
    )
}