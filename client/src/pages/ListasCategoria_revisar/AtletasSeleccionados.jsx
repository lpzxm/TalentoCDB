export const AtletasSelec = () => {
  const tableHeaders = [
    "Nombre",
    "Sección",
    "Año que cursa",
    "Edad",
    "Estado académico"
  ];

  const tableData = [
    ["Nombre del atleta", "Sección del atleta", "Año que cursa el atleta", "Edad del atleta", "Estado académico del atleta"],
    ["Info", "Info", "Info", "Info", "Info"],
    ["MasInfo", "MasInfo", "MasInfo", "MasInfo", "MasInfo"],
    ["AunMasInfo", "AunMasInfo", "AunMasInfo", "AunMasInfo", "AunMasInfo"],
  ];

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-700">Volleyball</h2>
        <h3 className="text-md font-semibold text-gray-600">Atletas seleccionados</h3>
      </div>

      <div className="bg-white shadow-md rounded my-6 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              {tableHeaders.map((header) => (
                <th
                  key={header}
                  className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="py-4 px-6 border-b border-gray-300"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
