
// import react from "react";
import user from '../../../assets/usericon.png'
import voley from '../../../assets/voley.png'

export const ReviewPlayer = () => {
    return (
        <>
            <main className="grid grid-cols-1 lg:grid-cols-2">
                <article className="flex flex-col items-center justify-center">
                    <div className='md:space-y-11 space-y-2 relative bottom-0 lg:bottom-14'>
                        <div className="flex md:ml-24 ml-10 mt-10 md:mt-20 space-x-4 items-center w-full">
                            <p className="text-blue-500 text-2xl">Evaluando a:</p>
                            <img className="w-5 h-5" src={user} alt="" />
                            <p className="text-lg"> Sara Yamileth Torres Henríquez</p>
                        </div>
                        <img src={voley} alt="volleyimg" className='relative ml-12 w-full hidden lg:block' />
                    </div>
                </article>
                <article className="flex items-center justify-center text-center lg:text-left border-box px-14">
                    <section className="flex flex-col justify-center items-center border-dashed border-2 border-orange-500 p-4 mt-12 mb-32 lg:mb-12">
                        <form action="">
                            <select className="text-black border-2 w-80 h-9 rounded-lg border-gray-500" name="evaluaciones" id="">
                                <option className="" value="">Seleccione una opción</option>
                                <option value="">X</option>
                                <option value="">X</option>
                                <option value="">X</option>
                                <option value="">X</option>
                                <option value="">X</option>
                            </select>
                            <p className="text-lg text-gray-900 mt-5">Asistencia</p>
                            <input className="border-2 w-80 border-gray-500 h-10 mt-1 rounded-xl" type="text" name="" value="" placeholder="  Escribe aquí" />
                            <p className="text-lg text-gray-900 mt-6">Puntualidad</p>
                            <input className="border-2 w-80 border-gray-500 h-10 mt-1 rounded-xl" type="text" name="" value="" placeholder="  Escribe aquí" />
                            <p className="text-lg text-gray-900 mt-6">Responsabilidad</p>
                            <input className="border-2 w-80 border-gray-500 h-10 mt-1 rounded-xl" type="text" name="" value="" placeholder="  Escribe aquí" />
                            <p className="text-lg text-gray-900 mt-6 rounded-none">Uniforme completo</p>
                            <input className="border-2 border-gray-500 w-80 h-10 mt-1 rounded-xl" type="text" name="" value="" placeholder="  Escribe aquí" />
                            <p className="text-lg text-gray-900 mt-6">Respeto a los compañeros</p>
                            <input className="border-2 w-80 border-gray-500 h-10 mt-1 rounded-xl" type="text" name="" value="" placeholder="  Escribe aquí" />
                            <br />
                            <button className="bg-blue-500 text-white rounded-full px-4 py-4 m-4">
                                Finalizar
                            </button>
                        </form>
                    </section>
                </article>
            </main>
        </>
    )
}