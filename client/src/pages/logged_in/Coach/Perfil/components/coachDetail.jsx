import { CiUser } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";
import { TbShirtSport } from "react-icons/tb";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { LuCalendarDays } from "react-icons/lu";

const iconMap = {
    CiUser,
    FaRegAddressCard,
    TbShirtSport,
    HiOutlineAcademicCap,
    LuCalendarDays,
}



export const CoachDetail = ({ iconName, text }) => {

    const Icon = iconMap[iconName]

    return (
        <div className="bg-slate-100 w-full flex flex-row justify-center items-center space-x-4 text-center p-3 rounded-full">
            <Icon size="30px" />
            <p className="text-lg">{text}</p>
        </div>
    )
}