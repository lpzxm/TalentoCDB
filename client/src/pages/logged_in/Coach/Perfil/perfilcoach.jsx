import { CoachDetail } from './components/coachDetail';
import { CoachProfileImage } from './components/coachProfileImage';
import profilebg from '../../../../../src/assets/roundedImage.jpg';
import profileIcon from '../../../../../src/assets/messi.jpeg';
import { CiUser } from "react-icons/ci";
import { TbShirtSport } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";

import { useSession } from '../../../../hooks/useSession';

export const PerfilCoach = () => {

  const { usuario } = useSession();

  return (
    <article className="gap-6 p-6 mt-11 pb-28 md:pb-12">
      <section className="w-full mt-2 mb-10 h-4/6 bg-slate-200 rounded-3xl p-6 flex flex-col items-center">
        <CoachProfileImage background={profilebg} profile={usuario.url} />
        <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 mt-20 mb-20">

          <CoachDetail iconName={<CiUser size="30px" color='' />} text={usuario.nombres} />
          <CoachDetail iconName={<TbShirtSport size="30px" color='' />} text={usuario.sport.name} />
          <CoachDetail iconName={<LuCalendarDays size="30px" />} text={new Date(usuario.birthDay).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })} />
          <CoachDetail iconName={<CiUser size="30px" color='' />} text={usuario.email} />

        </div>
        <p className="mb-6">Descripción del Coach:</p>
        <CoachDetail iconName={<CiUser size={"30px"} color='' />} text={usuario.descripcion} />
      </section>
    </article>
  );
};