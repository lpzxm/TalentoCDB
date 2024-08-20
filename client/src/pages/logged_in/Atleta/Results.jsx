import React, { useState } from 'react';
import { TbShirtSport } from "react-icons/tb";
import { useSession } from "../../../hooks/useSession";
import Modal from './Componets/Modal'; 

export const PlayerResults = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    const { usuario } = useSession();

    const criterios = [
        {
            criterio: "Condición Física",
            descripcion: "Evalúa la resistencia, fuerza y flexibilidad del atleta.",
            ponderacion: "30%"
        },
        {
            criterio: "Técnica",
            descripcion: "Medición de la habilidad técnica en el deporte.",
            ponderacion: "40%"
        },
        {
            criterio: "Disciplina",
            descripcion: "Evalúa la asistencia y comportamiento en los entrenamientos.",
            ponderacion: "20%"
        },
        {
            criterio: "Trabajo en equipo",
            descripcion: "Capacidad de colaborar y trabajar en conjunto con otros.",
            ponderacion: "10%"
        }
    ];

    const ponderacionFinal = "100%";

    return (
        <>
            <div>
                <div className="mt-10 flex flex-row flex-wrap justify-around items-center space-x-4">
                    <div className="w-full flex flex-row justify-start ml-8 items-center">
                        <TbShirtSport size={"40px"} />
                        <p className="text-lg">Bienvenido, <span className="font-semibold">{usuario.nombres}</span></p>
                    </div>
                    <div className="w-full flex flex-row items-center pl-5 pt-4">
                        <span className="text-lg">
                            Atleta perteneciente al deporte: {usuario.sport.nombre}
                        </span>
                    </div>
                </div>

                <CriteriosTable criterios={criterios} ponderacionFinal={ponderacionFinal} />

                {/* Botón para abrir el modal */}
                <div className="mt-6 flex justify-center">
                    <button 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                        onClick={openModal}
                    >
                        Ver Detalles
                    </button>
                </div>

                {/* Modal */}
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <h2 className="text-xl font-semibold">¡Felicidades! Has sido seleccionado.</h2>
                    <p className="mt-4">Al parecer tu rendimiento es excelente, tu entrenador decidió agregarte a una selección, ¡eres genial!</p>
                    <button 
                        className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                        onClick={closeModal}
                    >
                        Cerrar
                    </button>
                </Modal>
            </div>
        </>
    );
};

const CriteriosTable = ({ criterios, ponderacionFinal }) => {
    return (
        <div className="container mx-auto mt-10">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm text-left">
                                Criterio
                            </th>
                            <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm text-left">
                                Descripción del criterio
                            </th>
                            <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm text-left">
                                Ponderación
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {criterios.map((item, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border-b border-gray-200 whitespace-nowrap">
                                    {item.criterio}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200 whitespace-nowrap">
                                    {item.descripcion}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200 whitespace-nowrap">
                                    {item.ponderacion}
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td className="py-2 px-4 border-t-2 border-gray-900 font-bold">
                                Ponderación Final
                            </td>
                            <td className="py-2 px-4 border-t-2 border-gray-900"></td>
                            <td className="py-2 px-4 border-t-2 border-gray-900 font-bold">
                                {ponderacionFinal}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PlayerResults;
