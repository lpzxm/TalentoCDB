
// import react from "react";
import donbo from '../../../assets/donbosco.png'
import user from '../../../assets/usericon.png'
import pelota from '../../../assets/bola de blly.png'


export function ReviewPlayer(){
    return(
        <>
        <header className='h-24 md:visible md:relative fixed invisible'>
                <div className='bg-yellow-400 h-12'></div>
                <img className='w-12 absolute top-3 left-12' src={donbo} alt="DB" />
                <div className='bg-blue-700 h-12'></div>
        </header>
            <main className="flex lg:flex-row flex-col">
                <article className="items-center">
                    <div className="flex md:ml-24 ml-10 mt-10 space-x-2 items-center">
                    <p className="text-blue-500 text-xl">Evaluando a:</p>
                    <img className="w-5 h-5" src={user} alt="" />
                    <p className=" text-md"> Sara Yamileth Torres Enríquez</p>
                    </div>
                    <img className="w-[500px] m-28 lg:visible lg:relative fixed invisible" src={pelota} alt="boladevolley1" />
                </article>
                <article className="items-center mt-11 text-center lg:text-left">
                        <section className="border-dashed border-2 border-orange-200 w-full lg:w-96 p-4">
                            <select className="text-black border-2 w-80 h-12 rounded-lg" name="evaluaciones" id="">
                            <option className="" value="">Seleccione una opción</option>
                            <option value="">X</option>
                            <option value="">X</option>
                            <option value="">X</option>
                            <option value="">X</option>
                            <option value="">X</option>
                            </select>
                            <p className="text-sm text-gray-600 m-4">Asistencia</p>
                            <input className="border-2 w-80 h-12 mt-1 rounded-xl" type="text" name="" value="" placeholder="  Escribe aquí |"/>
                            <p className="text-sm text-gray-600 mt-8 ">Puntualidad</p>
                            <input className="border-2 w-80 h-12 mt-1 rounded-xl" type="text" name="" value="" placeholder="  Escribe aquí |"/>
                            <p className="text-sm text-gray-600 mt-8">Responsabilidad</p>
                            <input className="border-2 w-80 h-12 mt-1 rounded-xl" type="text" name="" value="" placeholder="  Escribe aquí |"/>
                            <p className="text-sm text-gray-600 mt-8 rounded-none">Uniforme completo</p>
                            <input className="border-2 w-80 h-12 mt-1 rounded-xl" type="text" name="" value="" placeholder="  Escribe aquí |"/>
                            <p className="text-sm text-gray-600 mt-8">Respeto a los compañeros</p>
                            <input className="border-2 w-80 h-12 mt-1 rounded-xl" type="text" name="" value="" placeholder="  Escribe aquí |"/>



                        </section>
              </article>
            </main>
        </>
    )
}