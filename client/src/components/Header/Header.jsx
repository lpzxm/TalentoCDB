// import React from "react";
// import { Link } from "react-router-dom";
import donbo from "../../assets/donbosco.png";

export function Header() {

    return (
        <>
            <header className='h-32 md:visible md:relative fixed flex flex-col'>
                <div className='bg-yellow-400 h-full'></div>
                <div className='bg-blue-700 h-full'></div>
                <div className="bg-white px-2 py-1 absolute top-2 w-full h-fit">
                    <img className='w-12 h-fit' src={donbo} alt="DB" />
                    <p>hola</p>
                </div>
            </header>
        </>
    )
}