import voley from '../../../assets/voley.png'
export const NewField = () => {
    return (
        <>
            <div className=" mt-6 flex justify-center ">
                <div className="bg-white p-10 rounded-lg shadow-md max-w-5xl border-8 w-full p-16 border-blue-500 border-solid border-2 border-opacity-50 hover:border-opacity-75 transition-opacity duration-300 ease-in-out">
                    <h1 className="text-2xl mb-4">Registrar nuevo campo de evaluación</h1>
                    <div className="mb-4 flex">
                        <div className="w-full mr-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="input1">
                                Nombre del nuevo campo:
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline hover:border-opacity-75" id="input1" type="text" placeholder="Typing" />
                        </div>
                        <div className="w-24 h-24 border border-gray-300 rounded-full overflow-hidden ml-4">
                            <img className="w-full h-full object-cover" src={voley} alt="Placeholder" />
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Agregar nuevo campo
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
