import { CoachDetail } from './components/coachDetail';
import { CoachProfileImage } from './components/coachProfileImage';
import { coachDetails } from './components/data/data';
import profilebg from '../../../../../src/assets/roundedImage.jpg';
import profileIcon from '../../../../../src/assets/messi.jpeg';


export const PerfilCoach = () => {
    return (
      <article className="gap-6 p-6 mt-11">
        <section className="w-full mt-2 mb-10 h-4/6 bg-slate-200 rounded-3xl p-6 flex flex-col items-center">
          <CoachProfileImage background={profilebg} profile={profileIcon} />
          <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 mt-20 mb-20">
            {coachDetails.slice(0, 3).map((detail, index) => (
              <CoachDetail key={index} iconName={detail.icon} text={detail.text} />
            ))}
            {coachDetails.slice(3).map((detail, index) => (
              <CoachDetail key={index} iconName={detail.icon} text={detail.text} />
            ))}
          </div>
          <p className="mb-6">Descripción del Coach:</p>
          <CoachDetail iconName="CiUser" text="" />
        </section>
      </article>
    );
  };