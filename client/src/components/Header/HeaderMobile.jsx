import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RiHome5Fill } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { LuPenSquare } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";

import { NavButton, NavItem } from "./buttons/NavBtns";

export const MobileNavBar = () => {

    const icon = {
        size: "22px",
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
                <div className="w-full flex flex-row justify-center space-x-3 md:space-x-11  lg:space-x-4 px-16 py-3">
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

                    <div className="relative p-2 w-12 h-12 rounded-full bg-white flex justify-center items-center border-4 border-indigo-600">
                        <NavItem icon={<TbLogout size={icon.size} />} />
                    </div>

                </div>
            </header>
        </>
    )
}