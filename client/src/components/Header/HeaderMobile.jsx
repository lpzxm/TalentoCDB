import { RiHome5Fill } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { LuPenSquare } from "react-icons/lu";
import { MdSportsKabaddi } from "react-icons/md";
export const MobileNavBar = () => {
    const icon = {
        size: "35px",
        color: "white"
    }
    return (
        <>
            <header className="fixed  z-10 bottom-0 flex w-full justify-center items-center bg-slate-300 rounded-full">
                <div className="w-full flex flex-row justify-between px-16 py-5">
                    <div>
                        <RiHome5Fill size={icon.size} color={icon.color} />
                    </div>
                    <div>
                        <BiCategory size={icon.size} color={icon.color} />
                    </div>
                    <div>
                        <LuPenSquare size={icon.size} color={icon.color} />
                    </div>
                    <div>
                        <MdSportsKabaddi size={icon.size} color={icon.color} />
                    </div>
                </div>
            </header>
        </>
    )
}