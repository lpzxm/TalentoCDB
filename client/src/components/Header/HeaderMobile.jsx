import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RiHome5Fill } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { LuPenSquare } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";

import { NavButton, NavItem } from "./buttons/NavBtns";

export const MobileNavBar = () => {

    const icon = {
        size: "25px",
        color: "white",
    }

    const [activeLink, setActiveLink] = useState("");

    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname)
    }, [location]);

    return (
        <>
            <header className="fixed z-10 bottom-0 flex w-full justify-center items-center bg-slate-800">
                <div className="absolute w-full bottom-16 flex flex-col justify-center items-center">
                    <button className="w-12 h-12 rounded-full bg-white flex justify-center items-center border-4 border-indigo-600">
                        <FaSignOutAlt size={icon.size} />
                    </button>
                </div>
                <div className="w-full flex flex-row justify-center space-x-3 px-16 py-3">
                    <NavButton to="/home" activeLink={activeLink}>
                        <NavItem icon={<RiHome5Fill size={icon.size} color={icon.color} />} text="Home" />
                    </NavButton>

                    <NavButton to="/verCategorias" activeLink={activeLink}>
                        <NavItem icon={<BiCategory size={icon.size} color={icon.color} />} text="Categorias" />
                    </NavButton>

                    <NavButton to="/registrarRubrica" activeLink={activeLink}>
                        <NavItem icon={<LuPenSquare size={icon.size} color={icon.color} />} text="Rubrica" />
                    </NavButton>

                    <NavButton to="/verCoach" activeLink={activeLink}>
                        <NavItem icon={<CgProfile size={icon.size} color={icon.color} />} text="Perfil" />
                    </NavButton>
                </div>
            </header>
        </>
    )
}