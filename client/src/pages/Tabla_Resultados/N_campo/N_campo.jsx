export const NewField = () => {
    return (
        <>
            <div className=" mt-6 flex justify-center ">
                <div className="bg-white p-10 rounded-lg shadow-md max-w-5xl border-8 ">
                    <h1 className="text-2xl mb-4">Registrar nuevo campo de evaluación</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="input1">
                            Nombre del nuevo campo:
                        </label>
                        <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="input1" type="text" placeholder="Typing" />
                    </div>

                    <div className="flex items-center justify-center">
                        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Agregar nuevo campo
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}