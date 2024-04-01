
export const Tabla_Resultados = () => {
    return (
        <>
            <div className="border-4 border-amber-300 text-black text-center py-2">
                <h1 className="text-2xl">Tabla de resultados</h1>
            </div>
            <div className="text-center my-5">
                <select name="students" id="students">
                    <option value="student1">Estudiante 1</option>
                    <option value="student2">Estudiante 2</option>
                    <option value="student3">Estudiante 3</option>
                </select>
            </div>
            <table className="w-full my-5">
                <tr className="bg-white">
                    <th className="px-4 py-2 text-left">Numero de evaluaciones</th>
                    <th className="px-4 py-2 text-left">Porcentajes</th>
                </tr>
                <tr className="bg-white">
                    <td className="border px-4 py-2">evaluacion 1</td>
                    <td className="border px-4 py-2"><input type='text' defaultValue='10%' /></td>
                </tr>
                <tr className="bg-white">
                    <td className="border px-4 py-2">evaluacion 2</td>
                    <td className="border px-4 py-2"><input type='text' defaultValue='10%' /></td>
                </tr>
                <tr className="bg-white">
                    <td className="border px-4 py-2">evaluacion 3</td>
                    <td className="border px-4 py-2"><input type='text' defaultValue='10%' /></td>
                </tr>
                <tr className="bg-white">
                    <td className="border px-4 py-2">evaluacion 4</td>
                    <td className="border px-4 py-2"><input type='text' defaultValue='10%' /></td>
                </tr>
                <tr className="bg-white">
                    <td className="border px-4 py-2">Total</td>
                    <td className="border px-4 py-2"><input type='text' defaultValue='90%' /></td>
                </tr>
            </table>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button className="bg-purple-200 text-purple-900 px-8 py-2 mx-2 my-4 cursor-pointer">Agregar nuevo campo</button>
            </div>
        </>
    )
}