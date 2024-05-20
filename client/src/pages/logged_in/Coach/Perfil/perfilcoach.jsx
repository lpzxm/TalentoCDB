import profilebg from '../../../../../src/assets/roundedImage.jpg';
import profileIcon from '../../../../../src/assets/messi.jpeg';

import { CiUser } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";
import { TbShirtSport } from "react-icons/tb";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { LuCalendarDays } from "react-icons/lu";

const CoachDetail = ({ icon: Icon, text }) => (
    <div className='bg-slate-100 w-full flex flex-row justify-center items-center space-x-4 text-center p-3 rounded-full'>
        <Icon size="30px" />
        <p className='text-lg'>{text}</p>
    </div>
);

const CoachProfileImage = ({ background, profile }) => (
    <div className='w-full relative flex flex-col items-center'>
        <img src={background} alt="" className='w-full h-32 rounded-full object-cover' />
        <div className='absolute top-16 w-32 h-32 overflow-hidden rounded-full bg-black'>
            <img src={profile} className='w-full h-full object-cover object-center' alt="" />
        </div>
    </div>
);

export const PerfilCoach = () => {

    return(

        <>
                <article className="gap-6 p-6 mt-11">
            <section className="w-full mt-8 h-4/6 bg-slate-200 rounded-3xl p-6 flex flex-col items-center">
                <CoachProfileImage background={profilebg} profile={profileIcon} />
                <div className='w-full p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 mt-20 mb-20'>
                    <div className='flex flex-col items-center space-y-6'>
                        <CoachDetail icon={CiUser} text="Nombre del Coach" />
                        <CoachDetail icon={TbShirtSport} text="Volleyball" />
                        <CoachDetail icon={FaRegAddressCard} text="nombre.coach@cdb.edu.sv" />
                    </div>
                    <div className='flex flex-col items-center space-y-6'>
                        <CoachDetail icon={HiOutlineAcademicCap} text="En estudio" />
                        <CoachDetail icon={LuCalendarDays} text="08/03/1985" />
                        <CoachDetail icon={CiUser} text="Seleccionado" />
                    </div>
                </div>
                <p className='mb-6'>Descripción del Coach: </p>
                <CoachDetail icon={CiUser} text="" />
            </section>
        </article>
        </>
    )

}