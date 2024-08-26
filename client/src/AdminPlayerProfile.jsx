import { CiUser } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";
import { TbShirtSport } from "react-icons/tb";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { LuCalendarDays } from "react-icons/lu";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FileUpload } from "./components/ui/inputFile/fileComponent";
import { clientAxios } from "./config/clientAxios";

const PlayerDetail = ({ icon: Icon, text }) => (
    <div className='bg-slate-100 w-full flex flex-row justify-center items-center space-x-4 text-center p-3 rounded-full'>
        <Icon size="30px" />
        <p className='text-lg'>{text}</p>
    </div>
);

const PlayerProfileImage = ({ background, profile }) => (
    <div className='w-full relative flex flex-col items-center'>
        <img src={background} alt="" className='w-full h-32 rounded-full object-cover' />
        <div className='absolute top-16 w-32 h-32 overflow-hidden rounded-full bg-black'>
            <img src={profile} className='w-full h-full object-cover object-center' alt="" />
        </div>
    </div>
);

export const AdminPlayerProfile = () => {
    const { id } = useParams();
    const [usuario, setUsuario] = useState(null);
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);

    useEffect(() => {
        const fetchJugador = async () => {
            try {
                const { data } = await clientAxios.get(`/jugadores/${id}`);
                console.log(data)
                setUsuario(data);
            } catch (error) {
                console.error("Error fetching player data:", error);
            }
        };
        fetchJugador();
    }, [id]);

    const handleFileChange1 = (file) => {
        console.log(file)
        setFile1(file);
    };

    const handleFileChange2 = (file) => {
        console.log(file)
        setFile2(file);
    };

    const handleFileRemove1 = () => {
        setFile1(null);
    };

    const handleFileRemove2 = () => {
        setFile2(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file1 || !file2) {
            alert('Por favor, selecciona ambos archivos antes de subir.');
            return;
        }

        const formData1 = new FormData();
        const formData2 = new FormData();
        formData1.append('img', file1);
        formData2.append('img', file2);

        try {
            await clientAxios.postForm('/jugadores/academico', formData1);
            await clientAxios.postForm('/jugadores/conductual', formData2);
            alert("Archivos enviados");
        } catch (error) {
            console.error('Error al subir los archivos:', error);
        }
    };

    const calculateAge = (birthDate) => {
        const birthDateObj = new Date(birthDate);
        const today = new Date();

        let age = today.getFullYear() - birthDateObj.getFullYear();
        const monthDiff = today.getMonth() - birthDateObj.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
            age--;
        }

        return age;
    };
    //hazle un loading  de estado en ves de esto

    if (!usuario) return <p>Cargando...</p>;
    return (
        <article className="grid grid-cols-1 sm:grid-cols-1 gap-6 p-6">
            <section className="w-full mt-8 h-5/6 bg-slate-200 rounded-3xl p-6 flex flex-col items-center">
                <PlayerProfileImage background={"/assets/roundedImage.jpg"} profile={"/assets/messi.jpeg"} />
                <div className='w-full p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 mt-20 mb-20'>
                    <div className='flex flex-col items-center space-y-6'>
                        <PlayerDetail icon={CiUser} text={usuario.nombres + " " + usuario.apellidos} />
                        <PlayerDetail icon={TbShirtSport} text={usuario.categories_joined[0].category.sport.name} />
                        <PlayerDetail icon={FaRegAddressCard} text={usuario.codigo} />
                    </div>
                    <div className='flex flex-col items-center space-y-6'>
                        <PlayerDetail icon={HiOutlineAcademicCap} text={usuario.grado} />
                        <PlayerDetail icon={LuCalendarDays} text={calculateAge(usuario.birthDay)} />
                        <PlayerDetail icon={CiUser} text={usuario.status_main_sport || 'Inactivo'} />
                    </div>
                </div>
            </section>

        </article>
    );
};