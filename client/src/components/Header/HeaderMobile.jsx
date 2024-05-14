import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RiHome5Fill } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { LuPenSquare } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

import { NavButton } from "./buttons/NavBtns";

export const MobileNavBar = () => {

    const icon = {
        size: "30px",
        color: "white",
    }

    const [activeLink, setActiveLink] = useState("");

    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname)
    }, [location])

    return (
        <>
            <header className="fixed z-10 bottom-0 flex w-full justify-center items-center bg-slate-800">


                <div className="absolute w-full bg-black bottom-20 flex flex-col justify-center items-center">
                    <div className="p-4 rounded-full bg-white">

                    </div>
                </div>
                <div className="w-full flex flex-row justify-between px-16 py-3">
                    <NavButton to="/home" activeLink={activeLink}>
                        <div className="w-full flex flex-col items-center justify-center">
                            <RiHome5Fill size={icon.size} color={icon.color} />
                            <p className="font-semibold text-white">Home</p>
                        </div>
                    </NavButton>

                    <NavButton to="/verCategorias" activeLink={activeLink}>
                        <div className="w-full flex flex-col items-center justify-center">
                            <BiCategory size={icon.size} color={icon.color} />
                            <p className="font-semibold text-white">Categorias</p>
                        </div>
                    </NavButton>

                    <NavButton to="/registrarRubrica" activeLink={activeLink}>
                        <div className="w-full flex flex-col items-center justify-center">
                            <LuPenSquare size={icon.size} color={icon.color} />
                            <p className="font-semibold text-white">Rubrica</p>
                        </div>
                    </NavButton>

                    <NavButton to="/verCoach" activeLink={activeLink}>
                        <div className="w-full flex flex-col items-center justify-center">
                            <CgProfile size={icon.size} color={icon.color} />
                            <p className="font-semibold text-white">Perfil</p>
                        </div>
                    </NavButton>
                </div>
            </header>
        </>
    )
}