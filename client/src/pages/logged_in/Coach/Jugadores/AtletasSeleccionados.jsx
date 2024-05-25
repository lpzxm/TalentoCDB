

export const AtletasSelec = () => {
  const tableHeaders = [
    "Nombre",
    "Sección",
    "Año que cursa",
    "Edad",
    "Asistencia",
    "Estado académico",
    "Estado deportivo"
  ];

  const tableData = [
    ["Nombre del atleta", "Sección del atleta", "Año que cursa el atleta", "Edad del atleta", false, "Estado académico del atleta", "Listo"],
    ["Info", "Info", "Info", "Info", false, "Info", "En preparacion"],
    ["MasInfo", "MasInfo", "MasInfo", "MasInfo", false, "MasInfo", "Inactivo"],
    ["AunMasInfo", "AunMasInfo", "AunMasInfo", "AunMasInfo", false, "AunMasInfo", "Seleccionado"],
    ["AunMasInfo", "AunMasInfo", "AunMasInfo", "AunMasInfo", false, "AunMasInfo", "En preparacion"]
  ];

  const sport = ["Volleyball", "Basketball"];

  const renderTableHeader = () => (
    <thead>
      <tr>
        {tableHeaders.map((header, index) => (
          <th
            key={index}
            className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );

  const renderTableBody = () => (
    <tbody>
      {tableData.map((row, rowIndex) => (
        <tr key={rowIndex} className="hover:bg-gray-100">
          {row.map((cell, cellIndex) => (
            <td
              key={cellIndex}
              className="py-4 px-6 border-b border-gray-300"
            >
              {cellIndex === 4 ? (
                <input type="checkbox" checked={cell} onChange={() => { }} />
              ) : (
                cell
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-700">{sport[0]}</h2>
        <p>SUB-U</p>
        <h3 className="text-md font-semibold text-gray-600">Atletas seleccionados</h3>
      </div>

      <div className="bg-white shadow-md rounded my-6 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {renderTableHeader()}
          {renderTableBody()}
        </table>
      </div>
    </div>
  );
};
