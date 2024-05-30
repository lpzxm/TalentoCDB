import { CoachDetail } from './components/coachDetail';
import { CoachProfileImage } from './components/coachProfileImage';
import profilebg from '../../../../../src/assets/roundedImage.jpg';
import profileIcon from '../../../../../src/assets/messi.jpeg';
import { CiUser } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";
import { TbShirtSport } from "react-icons/tb";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { LuCalendarDays } from "react-icons/lu";

import { useSession } from '../../../../hooks/useSession';

export const PerfilCoach = () => {

  const { usuario } = useSession();

    return (
      <article className="gap-6 p-6 mt-11">
        <section className="w-full mt-2 mb-10 h-4/6 bg-slate-200 rounded-3xl p-6 flex flex-col items-center">
          <CoachProfileImage background={profilebg} profile={profileIcon} />
          <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 mt-20 mb-20">

              <CoachDetail iconName={CiUser} text={usuario.nombres + " "+ usuario.apellidos} />
              <CoachDetail text={usuario.sport.name} />
              <CoachDetail  text={usuario.birthDay} />
              <CoachDetail  text={usuario.email} />

          </div>
          <p className="mb-6">Descripción del Coach:</p>
          <CoachDetail iconName="CiUser" text="" />
        </section>
      </article>
    );
  };