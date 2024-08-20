import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FileUpload } from '../../../../../components/ui/inputFile/fileComponent';
import bgimg from "../../../../../assets/batu.webp";

import { useNavigate } from 'react-router-dom';

import { crearJugador } from '../../../../../api/players';
import { useParams } from 'react-router-dom';
import { useSession } from '../../../../../hooks/useSession';


import { agregarJugadorCat } from '../../../../../api/deporte';


export const RegisterAthlete = () => {
    const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { usuario } = useSession();
    const params = useParams();

    const [file, setFile] = useState(null);
    const handleFileChange = (file) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!allowedTypes.includes(file.type)) {
            toast.error('Por favor, selecciona una imagen válida (JPEG, PNG, GIF).', {
                position: "bottom-right",
                autoClose: 5000,
            });
            setFile(null);
            return;
        }
        setFile(file);
        console.log(file)
    };

    const handleFileRemove = () => {
        setFile(null);
    };

    const validateName = (e) => {
        const value = e.target.value;
        if (/[^a-zA-Z\s]/.test(value)) {
            e.target.value = value.slice(0, -1);
        }
    };

    const validateEmail = (e) => {
        const value = String(e.target.value) ;
        if (!value.endsWith('@cdb.edu.sv')) {
            e.target
            setError('email', { type: 'manual', message: 'El correo debe terminar en @cdb.edu.sv' });
        } else {
            clearErrors('email');
        }
    };

    const validateBirthDay = (e) => {
        const value = e.target.value;
        const year = new Date(value).getFullYear();
        if (year < 1900 || year > 2020) {
            setError('birthDay', { type: 'manual', message: 'El año debe estar entre 1900 y 2020' });
        } else {
            clearErrors('birthDay');
        }
    };

    const validateCodigo = (e) => {
        const value = e.target.value;
        if (/[^0-9]/.test(value) || value.length > 8) {
            setError('codigo', { type: 'manual', message: 'El código debe contener solo números y hasta 8 dígitos.' });
            e.target.value = value.slice(0, -1); // Remueve el último caracter si no es letra

        } else {
            clearErrors('codigo');
        }
    };


    const validateSeccion = (e) => {
        const value = e.target.value.toUpperCase();
        if (value.length > 1 || /[^A-Z]/.test(value)) {
            setError('seccion', { type: 'manual', message: 'Solo una letra es permitida.' });
        } else {
            clearErrors('seccion');
            e.target.value = value;
        }
    };

    const onSubmit = async (data) => {

        try {
            const player = await crearJugador(data);
            await agregarJugadorCat(usuario.id_sport, params.id, player.id);
            navigate("/coach/categorias/jugadores/" + params.id)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <div className="fixed inset-0 bg-cover bg-center -z-10" style={{ backgroundImage: `url(${bgimg})`, filter: 'blur(8px)' }}></div>
            <div className="flex flex-col items-center pt-6 ">
                <div className="flex gap-5 text-center border-solid border-2 border-amber-300 p-3 m-6 bg-white shadow-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                    </svg>
                    <p>Registrar Atleta en categoria SUB-U</p>
                </div>
                <section className="rounded-3xl p-3 bg-white mb-24 lg:mb-12 w-5/6 lg:w-3/6 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-full flex flex-col items-center justify-center">
                            <FileUpload file={file} label="Agrega una foto del jugador a añadir en la categoria" onFileChange={handleFileChange} onFileRemove={handleFileRemove} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                            <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" placeholder="Nombres" {...register('nombres')} onInput={validateName} />
                            <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" placeholder="Apellidos" {...register('apellidos')} onInput={validateName} />
                            <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="email" placeholder="Correo estudiantil" {...register('email')} onBlur={validateEmail} />
                            <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="password" placeholder="Contraseña" {...register('password')} />
                            <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="date" {...register('birthDay')} onBlur={validateBirthDay} />
                            <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" placeholder="Codigo estudiantil" {...register('codigo')} onInput={validateCodigo} />
                            <select className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" {...register('grado')}>
                                <option value="1er grado">1er grado</option>
                                <option value="2do grado">2do grado</option>
                                <option value="3er grado">3er grado</option>
                                <option value="4to grado">4to grado</option>
                                <option value="5to grado">5to grado</option>
                                <option value="6to grado">6to grado</option>
                                <option value="7to grado">7to grado</option>
                                <option value="8to grado">8to grado</option>
                                <option value="9no grado">9no grado</option>
                                <option value="1er año">1er año</option>
                                <option value="2do año">2do año</option>
                                <option value="3er año">3er año</option>
                            </select>
                            <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" placeholder="Seccion" {...register('seccion')} onInput={validateSeccion} />
                        </div>
                        <button className="bg-blue-500 text-white rounded-full px-7 py-4 m-10 hover:scale-110 hover:bg-amber-400 ease-in duration-300" type="submit">
                            Crear perfil de atleta
                        </button>
                    </form>
                </section>
            </div>
        </>
    );
};