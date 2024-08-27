import React, { useState } from 'react';
import { TbShirtSport } from "react-icons/tb";
import { useSession } from "../../../hooks/useSession";
import Modal from './Componets/Modal';
import { useAtletaResultados } from '../../../hooks/useAtletaResultados';
import { useResultados } from '../../../hooks/useResultados';
import PlayerScoreCard from './PlayerScoreCard';

export const PlayerResults = () => {
    const { usuario } = useSession();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data, loading } = useAtletaResultados()
    const { data: resultadosData, loading: cargando } = useResultados(usuario.id);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    if (loading || cargando) return <p>Cargando...</p>
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

                <CriteriosTable criterios={data.map(criterio => {
                    return ({
                        criterio: criterio.name,
                        descripcion: criterio.description,
                        ponderacion: criterio.max_score
                    })
                })} ponderacionFinal={data.map(criterio => criterio.max_score).reduce((a, b) => a + b, 0)} />

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
                    {usuario.status_main_sport == "aceptado" ? (
                        <>
                            <h2 className="text-xl font-semibold">¡Felicidades! Has sido seleccionado.</h2>
                            <p className="mt-4">Al parecer tu rendimiento es excelente, tu entrenador decidió agregarte a una selección, ¡eres genial!</p>
                            {
                              resultadosData && resultadosData.length &&  resultadosData.map(result => <PlayerScoreCard scoreData={result} />)
                            }
                            <button
                                className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                                onClick={closeModal}
                            >
                                Cerrar
                            </button>
                        </>
                    ) : <>
                        <h2 className="text-xl font-semibold">No has sido seleccionado</h2>
                        {
                            resultadosData.map(result => <PlayerScoreCard scoreData={result} />)
                        }
                        <button
                            className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                            onClick={closeModal}
                        >
                            Cerrar
                        </button>
                    </>}
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
