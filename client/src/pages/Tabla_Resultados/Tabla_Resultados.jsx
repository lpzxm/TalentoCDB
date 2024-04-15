import React from 'react';

export const Tabla_Resultados = () => {
  return (
    <div className="container mx-auto">
        <br></br>
      <div className="border-4 border-amber-300 text-black text-center py-2 rounded-lg shadow-md">
  <h1 className="text-2xl font-bold">Tabla de resultados</h1>
</div>
      <div className="text-center my-5">
        <label htmlFor="students" className="text-gray-700 text-sm font-bold mb-2">
          Estudiante:
          <br></br>
        </label>
        <select name="students" id="students" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-1 px-2 appearance-none leading-normal">
          <option value="student1">Estudiante 1</option>
          <option value="student2">Estudiante 2</option>
          <option value="student3">Estudiante 3</option>
        </select>
      </div>
      <table className="w-full my-5 table-auto">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left">Numero de evaluaciones</th>
            <th className="px-4 py-2 text-left">nota</th>
            <th className="px-4 py-2 text-left">Porcentajes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">evaluacion 1</td>
            <td className="border px-4 py-2">
              <input type="text" defaultValue="0" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-1 px-2 block w-full appearance-none leading-normal" />
            </td>
            <td className="border px-4 py-2">
              <input type="text" defaultValue="10%" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-1 px-2 block w-full appearance-none leading-normal" />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">evaluacion 2</td>
            <td className="border px-4 py-2">
              <input type="text" defaultValue="0" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-1 px-2 block w-full appearance-none leading-normal" />
            </td>
            <td className="border px-4 py-2">
              <input type="text" defaultValue="10%" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-1 px-2 block w-full appearance-none leading-normal" />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">evaluacion 3</td>
            <td className="border px-4 py-2">
              <input type="text" defaultValue="0" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-1 px-2 block w-full appearance-none leading-normal" />
            </td>
            <td className="border px-4 py-2">
              <input type="text" defaultValue="10%" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-1 px-2 block w-full appearance-none leading-normal" />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">evaluacion 4</td>
            <td className="border px-4 py-2">
              <input type="text" defaultValue="0" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-1 px-2 block w-full appearance-none leading-normal" />
            </td>
            <td className="border px-4 py-2">
              <input type="text" defaultValue="10%" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-1 px-2 block w-full appearance-none leading-normal" />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Total</td>
            <td className="border px-4 py-2">
              <input type="text" defaultValue="0" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-1 px-2 block w-full appearance-none leading-normal" />
            </td>
            <td className="border px-4 py-2">
              <input type="text" defaultValue="10%" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-1 px-2 block w-full appearance-none leading-normal" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center">
  <button className="bg-blue-200 text-blue-900 px-4 py-1 mx-2 my-4 cursor-pointer rounded-lg focus:outline-none focus:shadow-outline hover:bg-blue-300 transition duration-500 ease-in-out hover:scale-105">
    Agregar nuevo campo
  </button>
</div>
    </div>
  );
};
