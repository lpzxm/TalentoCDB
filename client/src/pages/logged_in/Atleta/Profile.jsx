import profilebg from '../../../../src/assets/roundedImage.jpg';
import { CiUser } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";
import { MdSportsVolleyball } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { LuCalendarDays } from "react-icons/lu";

export const Profile = () => {


    return (
        <>
            <article className="grid grid-cols-2 p-20 sm:p-5 sm:grid-cols-1">
                <section className="bg-slate-200 rounded-3xl p-6">
                    <img src={profilebg} alt="bgprofile" />
                    <div className='grid grid-cols-2 gap-24'>
                        <div className='text-center space-y-20 pt-28'>
                            <p className='p-3 bg-slate-300 rounded-full flex gap-8'>
                                <CiUser className='w-10 h-7' />
                                Sara Yamileth Torres Henriquez
                            </p>
                            <p className='p-3 bg-slate-300 rounded-full flex gap-8'>
                                <MdSportsVolleyball className='w-10 h-7' />
                                Volleyball
                            </p>
                            <p className='p-3 bg-slate-300 rounded-full flex gap-8'>
                                <FaRegAddressCard className='w-10 h-7' />
                                20220311
                            </p>
                        </div>
                        <div className='text-center space-y-20 pt-28'>
                            <p className='p-3 bg-slate-300 rounded-full flex gap-8'>
                                <HiOutlineAcademicCap className='w-10 h-7' />
                                3 C
                            </p>
                            <p className='p-3 bg-slate-300 rounded-full flex gap-8'>
                                <LuCalendarDays className='w-10 h-7' />
                                27/02/2006
                            </p>
                            <p className='p-3 bg-slate-300 rounded-full '>
                                Seleccionado
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <p>hola</p>
                </section>
            </article>

        </>
    )
}