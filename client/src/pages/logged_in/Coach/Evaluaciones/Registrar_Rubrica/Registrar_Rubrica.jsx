// import react from "react";
import backgroundImage from '../../../../../assets/sub-u17.png';
import { obtenerCamposRubrica } from '../../../../../api/deporte';
import { useSession } from '../../../../../hooks/useSession';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import { crearCampoRubrica } from '../../../../../api/deporte';
export const Registrar_Rubrica = () => {
    const { usuario } = useSession()
    const [campos, setCampos] = useState("loading");
    const {register, handleSubmit,reset} = useForm()
    useEffect(() => {
        (async () => {
            const data = await obtenerCamposRubrica(usuario.id_sport);
            setCampos(data)
        })()
    },[])

    const agregarCampo = async (data) => {
        try{
            const result = await crearCampoRubrica(usuario.id_sport, data)
            setCampos([...campos, result])
            reset() 
        }catch(e){
            console.log(e)
        }
    }

    if (campos == "loading") return <p>Cargando...</p>

    return (
        <>


            {/* Fondo con efecto de desenfoque */}
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${backgroundImage})`, filter: 'blur(8px)' }}></div>

            <div className="relative flex justify-center items-center mb-24 md:mb-0">
                <div className="mt-6 flex flex-col md:flex-row justify-center items-center">
                    <div className="bg-white p-10 rounded-lg shadow-md max-w-5xl border-8 bflex-grow md:mr-4 transform-gpu ">
                        <h1 className="text-2xl mb-4 text-center">Registrar rúbrica</h1>

                        <form onSubmit={handleSubmit(agregarCampo)} className="flex flex-col -mx-2 w-full">
                            <div className="w-full px-2 mb-4 flex flex-row space-x-3">
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' {...register("name")} type="text" placeholder='Criterio' />
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' {...register("max_score", {valueAsNumber: true})} type="number" placeholder='Valor maximo' />
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" {...register("description")} type="text" placeholder="Descripcion" />
                            </div>
                            <div className="flex mb-4 items-center justify-center space-x-4">
                            <button type='submit' className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Agregar campo
                            </button>
                            {/* <button className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Registrar evaluación
                            </button> */}
                        </div>
                        </form>

                        <div>
                            <div class="grid font-bold p-2 border grid-cols-4">
                                <p>Nombre</p>
                                <p>Maximo Puntaje</p>
                                <p>Descripcion</p>
                            </div>
                            {
                                campos.map(campo => <Campo campo={campo} />)
                            }
                        </div>
                      

                    </div>
                </div>
            </div>

        </>
    )
}

const Campo = ({ campo }) => {
    return (
        <div class="grid p-2 border grid-cols-4">
            <p>{campo.name}</p>
            <p>{campo.max_score}</p>
            <p>{campo.description}</p>
            <div class="">
                <button className='bg-red-500 text-white rounded px-2'>Eliminar</button>
            </div>
        </div>
    )
}