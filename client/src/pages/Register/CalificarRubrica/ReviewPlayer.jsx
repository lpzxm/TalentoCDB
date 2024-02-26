
// import react from "react";
import user from '../../../assets/usericon.png'
import { PiVolleyball } from "react-icons/pi";

export function ReviewPlayer() {
    return (
        <>
            <main className="grid grid-cols-1 lg:grid-cols-2">
                <article className="flex flex-col items-center justify-center">
                    <div className="flex md:ml-24 ml-10 mt-10 space-x-4 items-center ">
                        <p className="text-blue-500 text-2xl">Evaluando a:</p>
                        <img className="w-5 h-5" src={user} alt="" />
                        <p className="text-lg"> Sara Yamileth Torres Henríquez</p>
                    </div>
                    {/* <img className="w-[500px] m-28 lg:visible lg:relative fixed invisible" src={pelota} alt="boladevolley1" /> */}
                    <div>
                        <PiVolleyball size={"40rem"} />
                    </div>

                </article>
                <article className="flex items-center justify-center text-center lg:text-left border-box px-14">
                    <section className="flex flex-col justify-center items-center border-dashed border-2 border-orange-200 w-full lg:w-full p-4">
                        <select className="text-black border-2 w-80 h-12 rounded-lg" name="evaluaciones" id="">
                            <option className="" value="">Seleccione una opción</option>
                            <option value="">X</option>
                            <option value="">X</option>
                            <option value="">X</option>
                            <option value="">X</option>
                            <option value="">X</option>
                        </select>
                        <p className="text-sm text-gray-600 m-4">Asistencia</p>
                        <input className="border-2 w-80 h-12 mt-1 rounded-xl" type="text" name="" value="" placeholder="  Escribe aquí |" />
                        <p className="text-sm text-gray-600 mt-8 ">Puntualidad</p>
                        <input className="border-2 w-80 h-12 mt-1 rounded-xl" type="text" name="" value="" placeholder="  Escribe aquí |" />
                        <p className="text-sm text-gray-600 mt-8">Responsabilidad</p>
                        <input className="border-2 w-80 h-12 mt-1 rounded-xl" type="text" name="" value="" placeholder="  Escribe aquí |" />
                        <p className="text-sm text-gray-600 mt-8 rounded-none">Uniforme completo</p>
                        <input className="border-2 w-80 h-12 mt-1 rounded-xl" type="text" name="" value="" placeholder="  Escribe aquí |" />
                        <p className="text-sm text-gray-600 mt-8">Respeto a los compañeros</p>
                        <input className="border-2 w-80 h-12 mt-1 rounded-xl" type="text" name="" value="" placeholder="  Escribe aquí |" />
                    </section>
                </article>
            </main>
        </>
    )
}