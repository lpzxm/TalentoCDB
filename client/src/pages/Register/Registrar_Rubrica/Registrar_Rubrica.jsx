// import react from "react";
import backgroundImage from '../../../assets/sub-u17.png';


export function Registrar_Rubrica() {

    return (
        <>
        
        
    {/* Fondo con efecto de desenfoque */}
    <div className=" absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${backgroundImage})`, filter: 'blur(8px)' }}></div>

    <div className="relative">
    <div className="mt-6 flex flex-col md:flex-row justify-center">
        <div className="bg-white p-10 rounded-lg shadow-md max-w-5xl border-8 bflex-grow md:mr-4 transform-gpu ">
            <h1 className="text-2xl mb-4 text-center">Registrar rúbrica</h1>

            <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dropdown">
                        Evaluación a realizar
                    </label>
                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dropdown">
                        <option>Asistencia</option>
                        <option>Puntualidad</option>
                    </select>
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input1">
                        Puntualidad
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="input1" type="text" placeholder="Typing" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input2">
                        Responsabilidad
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="input2" type="text" placeholder="Typing" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input3">
                        Uniforma completo
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="input3" type="text" placeholder="Typing" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input4">
                        Respeto al entrenador y compañeros
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="input4" type="text" placeholder="Typing" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input5">
                        Asistencia
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="input5" type="text" placeholder="Typing" />
                </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
    <button className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Agregar campo
    </button>
    <button className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Registrar evaluación
    </button>
</div>

        </div>
    </div>
</div>


            
           
        </>
    )
}