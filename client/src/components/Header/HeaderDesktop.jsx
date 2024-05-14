import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BtnProps } from "./buttons/BtnProps";
import donbo from "../../assets/donbosco.png";


const linkStyle = {
    nonactive: "hover:border-b-4 border-black transition-border ease-in-out duration-100",
    active: "border-b-4 border-black transition ease-in-out"
}

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState("");

    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname)
    }, [location])

    return (
        <>
            <header className='h-32 md:visible md:relative fixed flex flex-col z-50'>
                <div className='bg-yellow-400 h-full'></div>
                <div className='bg-blue-700 h-full'></div>
                <div className="absolute top-3 w-full px-3 ">
                    <div className="w-full h-fit px-6 py-3 backdrop-blur-sm bg-white/80 flex flex-col md:flex-row justify-between items-center">
                        <img className='w-12 h-fit' src={donbo} alt="DB" />
                        <ul className="flex flex-col md:flex-row p-4 space-x-10 font-bold">
                            <Link
                                to="/home"
                                className={
                                    activeLink === "/home"
                                        ? linkStyle.active
                                        : linkStyle.nonactive
                                }
                            >
                                <li>
                                    Home
                                </li>
                            </Link>
                            <Link
                                to="/registrarCategoria"
                                className={
                                    activeLink === "/registrarCategoria"
                                        ? linkStyle.active
                                        : linkStyle.nonactive
                                }
                            >
                                <li>
                                    Ver categorias
                                </li>
                            </Link>
                            <Link
                                to="/verCategorias"
                                className={
                                    activeLink === "/verCategorias"
                                        ? linkStyle.active
                                        : linkStyle.nonactive
                                }
                            >
                                <li>
                                    Registrar rúbrica
                                </li>
                            </Link>
                            <Link
                                to="/verCategorias"
                                className={
                                    activeLink === "/verCategorias"
                                        ? linkStyle.active
                                        : linkStyle.nonactive
                                }
                            >
                                <li>
                                    Perfil personal
                                </li>
                            </Link>
                        </ul>
                        <ul>
                            <BtnProps
                            className="py-2 px-6 rounded-md bg-white hover:bg-red-400 transition ease-in-out hover:-translate-y-1"
                            to="/"
                            text="Cerrar Sesion"
                            />
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}