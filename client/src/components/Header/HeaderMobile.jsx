import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiHome5Fill } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { LuPenSquare } from "react-icons/lu";
import { MdSportsKabaddi } from "react-icons/md";

const linkStyle = {
    nonactive: "",
    active: "w-fit p-2 bg-orange-600 rounded-full ease-in-out duration-100"
}

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
                <div className="w-full flex flex-row justify-between px-16 py-5">
                    <Link
                        to="/home"
                        className={
                            activeLink === "/home"
                                ? linkStyle.active
                                : linkStyle.nonactive
                        }
                    >
                        <div>
                            <RiHome5Fill size={icon.size} color={icon.color} />
                        </div>
                    </Link>
                    <Link to="/registrarRubrica" className={
                        activeLink === "/registrarRubrica"
                            ? linkStyle.active
                            : linkStyle.nonactive
                    }>
                        <div >
                            <BiCategory size={icon.size} color={icon.color} />
                        </div>
                    </Link>
                    <Link to="/registrarCategoria" className={
                        activeLink === "/registrarCategoria"
                            ? linkStyle.active
                            : linkStyle.nonactive
                    }>
                        <div>
                            <LuPenSquare size={icon.size} color={icon.color} />
                        </div>
                    </Link>
                    <Link to="/jugadores" className={
                        activeLink === "/jugadores"
                            ? linkStyle.active
                            : linkStyle.nonactive
                    }>
                        <div>
                            <MdSportsKabaddi size={icon.size} color={icon.color} />
                        </div>
                    </Link>
                </div>
            </header>
        </>
    )
}