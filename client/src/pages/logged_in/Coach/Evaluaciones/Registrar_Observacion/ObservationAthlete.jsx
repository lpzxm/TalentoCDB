import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { clientAxios } from '../../../../../config/clientAxios';
import { useSession } from '../../../../../hooks/useSession';
import { useNavigate } from 'react-router-dom';

export const ObservationAthlete = () => {
    const backgroundImage = 'https://scontent-gua1-1.xx.fbcdn.net/v/t39.30808-6/453387999_901552668681356_8860159141904411930_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=VttaKdEEyqoQ7kNvgE4RaF8&_nc_ht=scontent-gua1-1.xx&oh=00_AYBUJqFMkdMHS5dPnJOnUNxTRly7t9mPOUcDbQarXjOSWA&oe=66CBD3E0';

    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const [athletes, setAthletes] = useState([]);
    const navigate = useNavigate()
    // Fetch de atletas
    useEffect(() => {
        const fetchAthletes = async () => {
            try {
                const response = await clientAxios.get('/jugadores');
                setAthletes(response.data);
            } catch (error) {
                console.error("Error fetching athletes", error);
            }
        };
        fetchAthletes();
    }, []);

    const {userToken} = useSession();
    // Función para manejar el envío del formulario
    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await clientAxios.post('/observaciones', data, {
                headers: {
                    'Authorization': 'Bearer '+userToken
                }
            });
            navigate("/redirect")
        } catch (error) {
            console.error("Error al registrar la observación", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-gray-100 p-1 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${backgroundImage})`, filter: 'blur(8px)' }}>
            </div>

            <div className="relative max-w-lg w-full bg-white p-4 rounded-lg shadow-md dark:bg-white dark:text-black">
                <div className='border-2 border-dashed border-amber-400 p-6 rounded-xl'>
                    <h2 className="text-2xl font-semibold mb-4">Observación del Atleta</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label htmlFor="athleteName" className="block text-sm font-medium text-gray-700">Nombre del Atleta</label>
                            <select
                                id="athleteName"
                                name="id_atleta"
                                {...register("id_atleta", { required: true, valueAsNumber: true  })}
                                className="mt-1 block w-full rounded-md shadow-sm border-1 border solid border-gray-300"
                                required
                            >
                                <option value="" disabled selected>Seleccionar Atleta</option>
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
                                {...register("observacion", { required: true })}
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
