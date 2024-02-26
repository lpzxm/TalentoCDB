// import React from "react";
// import { Link } from "react-router-dom";
import donbo from "../../assets/donbosco.png";

export function Header() {

    return (
        <>
            <header className='h-32 md:visible md:relative fixed flex flex-col'>
                <div className='bg-yellow-400 h-full'></div>
                <div className='bg-blue-700 h-full'></div>
                <div className="absolute top-3 w-full px-3 ">
                    <div className="w-full h-fit px-6 py-3 backdrop-blur-sm bg-white/80 flex-col md:flex-row">
                        <img className='w-12 h-fit' src={donbo} alt="DB" />
                        <ul className="flex flex-col md:flex-row p-4">
                            <li>
                                Home
                            </li>
                            <li>
                                Registrar Categoria
                            </li>
                            <li>
                                Ver categorias
                            </li>
                        </ul>
                    </div>
                </div>

            </header>
        </>
    )
}