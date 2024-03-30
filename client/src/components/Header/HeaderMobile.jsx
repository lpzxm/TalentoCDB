import { useState } from "react";
import { Link } from "react-router-dom";
import { RiHome5Fill } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { LuPenSquare } from "react-icons/lu";
import { MdSportsKabaddi } from "react-icons/md";
export const MobileNavBar = () => {

    const [currentRoute, setCurrentRoute] = useState('/')

    const icon = {
        size: "30px",
        color: "white",
        hover: currentRoute === '/' ? "w-fit p-2 bg-orange-300 rounded-full" : 'transparent'
    }

    return (
        <>
            <header className="fixed  z-10 bottom-0 flex w-full justify-center items-center bg-slate-900">
                <div className="w-full flex flex-row justify-between px-16 py-5">
                    <Link to="/">
                        <div>
                            <RiHome5Fill size={icon.size} color={icon.color} />
                        </div>
                    </Link>
                    <Link to="/registrarRubrica">
                        <div>
                            <BiCategory size={icon.size} color={icon.color} />
                        </div>
                    </Link>
                    <Link to="/registrarCategoria">
                        <div>
                            <LuPenSquare size={icon.size} color={icon.color} />
                        </div>
                    </Link>
                    <Link to="/" >
                        <div>
                            <MdSportsKabaddi size={icon.size} color={icon.color} />
                        </div>
                    </Link>
                </div>
            </header>
        </>
    )
}