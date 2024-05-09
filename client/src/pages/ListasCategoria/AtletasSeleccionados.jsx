export const AtletasSelec = () => {
  return (
    <>
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-700">Volleyball</h2>
          <h3 className="text-md font-semibold text-gray-600">Atletas seleccionados</h3>
        </div>

        <div className="bg-white shadow-md rounded my-6 overflow-x-auto">
          <table className="text-left w-full border-collapse sm:table-fixed">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300">Nombre</th>
                <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300">Sección</th>
                <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300">Año que cursa</th>
                <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300">Edad</th>
                <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300">Estado académico</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="py-4 px-6 border-b border-gray-300">Nombre del atleta</td>
                <td className="py-4 px-6 border-b border-gray-300">Sección del atleta</td>
                <td className="py-4 px-6 border-b border-gray-300">Año que cursa el atleta</td>
                <td className="py-4 px-6 border-b border-gray-300">Edad del atleta</td>
                <td className="py-4 px-6 border-b border-gray-300">Estado académico del atleta</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="py-4 px-6 border-b border-gray-300">Info</td>
                <td className="py-4 px-6 border-b border-gray-300">Info</td>
                <td className="py-4 px-6 border-b border-gray-300">Info</td>
                <td className="py-4 px-6 border-b border-gray-300">Info</td>
                <td className="py-4 px-6 border-b border-gray-300">Info</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="py-4 px-6 border-b border-gray-300">MasInfo</td>
                <td className="py-4 px-6 border-b border-gray-300">MasInfo</td>
                <td className="py-4 px-6 border-b border-gray-300">MasInfo</td>
                <td className="py-4 px-6 border-b border-gray-300">MasInfo</td>
                <td className="py-4 px-6 border-b border-gray-300">MasInfo</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="py-4 px-6 border-b border-gray-300">AunMasInfo</td>
                <td className="py-4 px-6 border-b border-gray-300">AunMasInfo</td>
                <td className="py-4 px-6 border-b border-gray-300">AunMasInfo</td>
                <td className="py-4 px-6 border-b border-gray-300">AunMasInfo</td>
                <td className="py-4 px-6 border-b border-gray-300">AunMasInfo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
