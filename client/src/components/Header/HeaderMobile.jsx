import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineSports, MdOutlineAdd } from "react-icons/md";
import { RiHome5Fill } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { LuPenSquare } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";

import { useSession } from "../../hooks/useSession";
import { NavButton, NavItem } from "./buttons/NavBtns";

export const MobileNavBar = () => {

    const { usuario, logout } = useSession();

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
                    {usuario.rol == "Coach" && (
                        <>
                            <NavButton to="/home" activeLink={activeLink}>
                                <NavItem icon={<RiHome5Fill size={icon.size} color={icon.color} />} text="Inicio" />
                            </NavButton>
                            <NavButton to="/coach/categorias" activeLink={activeLink}>
                                <NavItem icon={<BiCategory size={icon.size} color={icon.color} />} text="Categorías" />
                            </NavButton>
                            <NavButton to="/coach/registrarRubrica" activeLink={activeLink}>
                                <NavItem icon={<LuPenSquare size={icon.size} color={icon.color} />} text="Rubrica" />
                            </NavButton>
                            <NavButton to="/coach/perfil" activeLink={activeLink}>
                                <NavItem icon={<CgProfile size={icon.size} color={icon.color} />} text="Perfil" />
                            </NavButton>
                        </>

                    )}
                    {usuario.rol == "Jugador" && (
                        <>
                            <NavButton to="/atleta/resultados" activeLink={activeLink}>
                                <NavItem icon={<RiHome5Fill size={icon.size} color={icon.color} />} text="Resultados" />
                            </NavButton>
                            <NavButton to="/coach/perfil" activeLink={activeLink}>
                                <NavItem icon={<CgProfile size={icon.size} color={icon.color} />} text="Perfil" />
                            </NavButton>
                        </>

                    )}
                    {usuario.rol == "Admin" && (
                        <>
                            <NavButton to="/admin/home" activeLink={activeLink}>
                                <NavItem icon={<RiHome5Fill size={icon.size} color={icon.color} />} text="Inicio" />
                            </NavButton>
                            <NavButton to="/admin/nuevoDeporte" activeLink={activeLink}>
                                <NavItem icon={<MdOutlineAdd size={icon.size} color={icon.color} />} text="Deporte" />
                            </NavButton>
                            <NavButton to="/admin/registerCoach" activeLink={activeLink}>
                                <NavItem icon={<MdOutlineSports size={icon.size} color={icon.color} />} text="Coach" />
                            </NavButton>
                            <NavButton to="/admin/selecciones" activeLink={activeLink}>
                                <NavItem icon={<BiCategory size={icon.size} color={icon.color} />} text="Selecciones"/>
                            </NavButton>
                        </>

                    )}


                    <div className="relative p-2 w-12 h-12 rounded-full bg-white flex justify-center items-center border-4 border-indigo-600">
                        <div onClick={logout}>
                            <NavItem icon={<TbLogout size={icon.size} />} />
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}