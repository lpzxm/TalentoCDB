// import react from "react";


export function Registrar_Rubrica() {

    return (
        <>
            <div class=" mt-6 flex justify-center ">
                <div class="bg-white p-10 rounded-lg shadow-md max-w-5xl border-8 ">
                    <h1 class="text-2xl mb-4">Registrar rúbrica</h1>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="dropdown">
                            Evaluación a realizar
                        </label>
                        <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dropdown">
                            <option>Asistencia</option>
                            <option>Puntualidad</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="input1">
                            Puntualidad
                        </label>
                        <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="input1" type="text" placeholder="Typing" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="input1">
                            Responsabilidad
                        </label>
                        <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="input1" type="text" placeholder="Typing" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="input1">
                            Uniforma completo
                        </label>
                        <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="input1" type="text" placeholder="Typing" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="input1">
                            Respeto al entrenador y compañeros
                        </label>
                        <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="input1" type="text" placeholder="Typing" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="input1">
                            Asistencia
                        </label>
                        <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="input1" type="text" placeholder="Typing" />
                    </div>
                    <div class="flex items-center justify-center">
                        <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Agregar nuevo campo de Evaluación
                        </button>
                    </div>
                    <div class="flex items-center justify-center">
                        <button class="mt-6 bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Registrar evaluación
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}