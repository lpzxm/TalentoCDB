import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import userIcon from '../../../../../assets/usericon.png';
import { useRubricaEstudiante } from '../../../../../hooks/useRubricaEstudiante';
import { useForm, Controller } from 'react-hook-form';
import { clientAxios } from "../../../../../config/clientAxios";
import { useResultados } from "../../../../../hooks/useResultados";

export const ReviewPlayer = () => {
    const { id } = useParams();
    const { data, loading } = useRubricaEstudiante(id);
    const { control, handleSubmit } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false); // Estado para manejar la carga durante el envío
    const {data: rubricaScore} = useResultados(id)

    const onSubmit = async (formData) => {
        try {
            setIsSubmitting(true); // Inicia el estado de carga
            const rubricScores = playerCategory?.sport?.rubricFields?.map(field => ({
                score: +formData[`field_${field.id}`],
                id_player: player.id,
                id_rubric_field: field.id
            }));

            await clientAxios.post("/jugadores/rubrica", rubricScores);

        } catch (error) {
            console.error("Error al enviar los puntajes:", error);
        } finally {
            setIsSubmitting(false); // Finaliza el estado de carga
        }
    };

    if (loading) return <p>Loading...</p>;

    const player = data;
    const playerCategory = player.categories_joined[0]?.category;

    return (
        <>
            <main className="grid grid-cols-1 lg:grid-cols-2">
                <article className="flex flex-col items-center justify-center">
                    <div className='md:space-y-11 space-y-2 relative bottom-0 lg:bottom-14'>
                        <div className="flex md:ml-24 ml-10 mt-10 md:mt-20 space-x-4 items-center w-full">
                            <p className="text-blue-500 text-2xl">Evaluando a:</p>
                            <img className="w-5 h-5" src={userIcon} alt="User Icon" />
                            <p className="text-lg">{`${player.nombres} ${player.apellidos}`}</p>
                        </div>
                        {playerCategory?.sport?.url && (
                            <img src={playerCategory.sport.url} alt="Deporte" className='relative ml-12 w-full hidden lg:block' />
                        )}
                    </div>
                </article>
                <article className="flex items-center justify-center text-center lg:text-left border-box px-14">
                    <section className="flex flex-col justify-center items-center border-dashed border-2 border-orange-500 p-4 mt-12 mb-32 lg:mb-12">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {playerCategory?.sport?.rubricFields?.map((campo, index) => (
                                <div key={campo.id} className="mt-5">
                                    <p className="text-lg text-gray-900">{campo.name}</p>
                                    <p className="text-sm text-gray-900">{campo.description}</p>
                                    <Controller
                                        name={`field_${campo.id}`}
                                        rules={{ max: campo.max_score }}
                                        control={control}
                                        defaultValue={rubricaScore && rubricaScore.length && rubricaScore[index] ? rubricaScore[index].score : 0}
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                max={campo.max_score}
                                                className="border-2 w-80 border-gray-500 h-10 mt-1 rounded-xl"
                                                type="number"
                                                placeholder={`Puntaje máximo: ${campo.max_score}`}
                                            />
                                        )}
                                    />
                                </div>
                            ))}
                            <button
                                type="submit"
                                className={`bg-blue-500 text-white rounded-full px-4 py-4 m-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Enviando...' : 'Finalizar'}
                            </button>
                        </form>
                    </section>
                </article>
            </main>
        </>
    );
};
