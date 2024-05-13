import img from "../../assets/usuario.png";


export const MiembrosCat = () => {

  return (
    <>
      <div className="container mx-auto p-4">
        <p className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded mb-4 text-center">
          Registrar categoría
        </p>
        <div className="mb-4">
          <h2 className="text-lg font-bold text-center">Categoría SUB-U17</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
          <div className="bg-white rounded shadow p-4">
            <img className="h-24 w-24 rounded-full mx-auto mb-4" src={img} alt="Avatar" />
            <h3 className="text-center font-bold">Sarita</h3>
            <div className="text-center mt-4">
              <button className="text-red-600 hover:text-red-700">Eliminar</button>
              <button className="text-blue-600 hover:text-blue-700 ml-2">Editar</button>
            </div>
          </div>
          <div className="bg-white rounded shadow p-4">
            <img className="h-24 w-24 rounded-full mx-auto mb-4" src={img} alt="Avatar" />
            <h3 className="text-center font-bold">Murguitas</h3>
            <div className="text-center mt-4">
              <button className="text-red-600 hover:text-red-700">Eliminar</button>
              <button className="text-blue-600 hover:text-blue-700 ml-2">Editar</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded shadow p-4">
            <img className="h-24 w-24 rounded-full mx-auto mb-4" src={img} alt="Avatar" />
            <h3 className="text-center font-bold">Tommyto</h3>
            <div className="text-center mt-4">
              <button className="text-red-600 hover:text-red-700">Eliminar</button>
              <button className="text-blue-600 hover:text-blue-700 ml-2">Editar</button>
            </div>
          </div>
          <div className="bg-white rounded shadow p-4">
            <img className="h-24 w-24 rounded-full mx-auto mb-4" src={img} alt="Avatar" />
            <h3 className="text-center font-bold">Adriansito</h3>
            <div className="text-center mt-4">
              <button className="text-red-600 hover:text-red-700">Eliminar</button>
              <button className="text-blue-600 hover:text-blue-700 ml-2">Editar</button>
            </div>
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Agregar nuevo miembro
        </button>
      </div>
    </>
  )
}