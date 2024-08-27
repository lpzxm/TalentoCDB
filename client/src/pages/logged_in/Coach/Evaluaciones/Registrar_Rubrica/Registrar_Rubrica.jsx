import React from 'react';
import backgroundImage from '../../../../../assets/sub-u17.png';
import { obtenerCamposRubrica } from '../../../../../api/deporte';
import { useSession } from '../../../../../hooks/useSession';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { crearCampoRubrica, deleteCampoRubrica } from '../../../../../api/deporte';

export const Registrar_Rubrica = () => {
    const { usuario } = useSession();
    const [campos, setCampos] = useState("loading");

    const { register, handleSubmit, reset } = useForm();

    const validString = (e) => {
        const value = e.target.value;
        if (/[^a-zA-Z\s]/.test(value)) {
            e.target.value = value.slice(0, -1);
        }
    };

    useEffect(() => {
        (async () => {
            const data = await obtenerCamposRubrica(usuario.id_sport);
            setCampos(data);
            console.log(data);
        })();
    }, [usuario.id_sport]);

    const agregarCampo = async (data) => {
        try {
            const result = await crearCampoRubrica(usuario.id_sport, data);
            setCampos([...campos, result]);
            reset();
        } catch (e) {
            console.log(e);
        }
    };

    const eliminarCampo = async (id_field) => {
        setCampos(campos.filter(item => item.id !== id_field));
        await deleteCampoRubrica(usuario.id_sport, id_field);
    };

    if (campos === "loading") return <p>Cargando...</p>;

    return (
        <>
            {/* Fondo con efecto de desenfoque */}
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${backgroundImage})`, filter: 'blur(8px)' }}></div>

            <div className="relative flex flex-col items-center pt-8 pb-28">
                {/* Formulario de entrada */}
                <div className="bg-white p-10 rounded-lg shadow-md max-w-5xl border-8 bflex-grow mb-10">
                    <h1 className="text-2xl mb-4 text-center">Registrar rúbrica</h1>

                    <form onSubmit={handleSubmit(agregarCampo)} className="flex flex-col w-full">
                        <div className="flex flex-col md:flex-row w-full mb-4 gap-4">
                            <input 
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                                {...register("name")} 
                                type="text" 
                                placeholder='Criterio' 
                                onInput={validString} 
                            />
                            <input 
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                                {...register("max_score", { valueAsNumber: true })} 
                                type="number" 
                                placeholder='Valor máximo' 
                            />
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                {...register("description")} 
                                type="text" 
                                placeholder="Descripción" 
                                onInput={validString} 
                            />
                        </div>
                        <div className="flex mb-4 items-center justify-center space-x-4">
                            <button type='submit' className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Agregar campo
                            </button>
                        </div>
                    </form>
                </div>

                {/* Tabla de campos */}
                <div className="bg-white p-5 rounded-lg shadow-md max-w-5xl border-8 bflex-grow w-full overflow-x-auto">
                    <h2 className="text-xl mb-4 text-center">Campos Registrados</h2>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Máximo Puntaje</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {campos.length ? campos.map(campo => <Campo key={campo.id} eliminarCampo={eliminarCampo} campo={campo} />) : 'No hay campos'}
                            </tbody>
                        </table>
                </div>
            </div>
        </>
    );
};

const Campo = ({ campo, eliminarCampo }) => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{campo.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campo.max_score}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campo.description}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button type='button' onClick={async () => await eliminarCampo(campo.id)} className='bg-red-500 text-white rounded px-2'>Eliminar</button>
            </td>
        </tr>
    );
};
