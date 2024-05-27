import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BtnProps } from "./buttons/BtnProps";
import donbo from "../../assets/donbosco.png";

import { useSession } from "../../hooks/useSession";

import { NavButton } from "./buttons/NavBtns";


export const NavBar = () => {

    const { logout } = useSession();

    const [activeDeskLink, setActiveDeskLink] = useState("");

    const location = useLocation();

    useEffect(() => {
        setActiveDeskLink(location.pathname)
    }, [location])



    return (
        <>
            <header className='h-32 md:visible md:relative fixed flex flex-col z-50'>
                <div className='bg-yellow-400 h-full'></div>
                <div className='bg-blue-700 h-full'></div>
                <div className="absolute top-3 w-full px-3 ">
                    <div className="w-full h-fit px-6 py-3 backdrop-blur-sm bg-white/80 flex flex-col md:flex-row justify-between items-center">
                        <img className='w-12 h-fit' src={donbo} alt="DB" />
                        <nav className="flex flex-col md:flex-row p-4 space-x-10 font-bold">
                            <NavButton to="/home" activeDeskLink={activeDeskLink}>
                                Home
                            </NavButton>
                            <NavButton to="/coach/categorias" activeDeskLink={activeDeskLink}>
                                Ver categorias
                            </NavButton>
                            <NavButton to="/coach/registrarRubrica" activeDeskLink={activeDeskLink}>
                                Registrar rúbrica
                            </NavButton>
                            <NavButton to="/coach/perfil" activeDeskLink={activeDeskLink}>
                                Perfil Personal
                            </NavButton>
                        </nav>
                        <ul>
                            <div onClick={logout}>
                                <BtnProps
                                    className="py-2 px-6 rounded-md bg-white hover:bg-red-400 transition ease-in-out hover:-translate-y-1"
                                    to="/"
                                    text="Cerrar Sesion"
                                />
                            </div>

                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}