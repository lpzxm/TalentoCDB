import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { clientAxios } from '../../../../../config/clientAxios';
import { useSession } from '../../../../../hooks/useSession';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../../../../../assets/selección.jpg";

export const ObservationAthlete = ({ type = 'jugadores' }) => {
    const fetch_url = type == "coach" ? "entrenadores" : "jugadores"
    const object = type == "coach" ? "Entrenador" : "Jugador"
    const post_url = type == "coach" ? "/observaciones/entrenadores" : "/observaciones"
    const { register, handleSubmit, reset, setValue, watch } = useForm();

    const [loading, setLoading] = useState(false);
    const [athletes, setAthletes] = useState([]);

    const navigate = useNavigate()

    // Fetch de atletas
    useEffect(() => {
        const fetchAthletes = async () => {
            try {
                const response = await clientAxios.get('/' + fetch_url);
                setAthletes(response.data);
            } catch (error) {
                console.error("Error fetching athletes", error);
            }
        };
        fetchAthletes();
    }, []);

    const { userToken } = useSession();

    // Función para manejar el envío del formulario
    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await clientAxios.post(post_url, data, {
                headers: {
                    'Authorization': 'Bearer ' + userToken
                }
            });
            navigate("/redirect")
        } catch (error) {
            console.error("Error al registrar la observación", error);
        } finally {
            setLoading(false);
        }
    };


    // Observa el cambio de valor del textarea
    const observationValue = watch('observacion') || '';

    useEffect(() => {
        if (observationValue) {
            // Capitaliza la primera letra
            const capitalized = observationValue.charAt(0).toUpperCase() + observationValue.slice(1);
            const sanitized = capitalized.replace(/[^A-Za-z\s,\.]/g, ''); // Elimina caracteres no permitidos
            setValue('observacion', sanitized, { shouldValidate: true });
        }
    }, [observationValue, setValue]);


    return (
        <div className="relative flex justify-center items-center min-h-screen bg-gray-100 p-1 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${backgroundImage})`, filter: 'blur(8px)' }}>
            </div>

            <div className="relative max-w-lg w-full bg-white p-4 rounded-lg shadow-md dark:bg-white dark:text-black">
                <div className='border-2 border-dashed border-amber-400 p-6 rounded-xl'>
                    <h2 className="text-2xl font-semibold mb-4">Observación del {object}</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label htmlFor="athleteName" className="block text-sm font-medium text-gray-700">Nombre del {object}</label>
                            <select
                                id="athleteName"
                                name="id_atleta"
                                {...register(type != "coach" ? "id_atleta" : "id_entrenador", { required: true, valueAsNumber: true })}
                                className="mt-1 block w-full rounded-md shadow-sm border-1 border solid border-gray-300"
                                required
                            >
                                <option value="" disabled selected>Seleccionar {object}</option>
                                {athletes.map(athlete => (
                                    <option key={athlete.id} value={athlete.id}>
                                        {athlete.nombres}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="observation" className="block text-sm font-medium text-gray-700">Observación</label>
                            <textarea
                                id="observation"
                                name="observacion"
                                {...register("observacion", {
                                    required: true,
                                    // validate: value => /A-Za-zÀ-ÖØ-öø-ÿ\s,./.test(value) || "Solo se permiten letras"
                                })}
                                rows="4"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border solid"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            disabled={loading}
                        >
                            {loading ? 'Enviando...' : 'Enviar'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};