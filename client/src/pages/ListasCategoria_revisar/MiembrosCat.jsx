import { Link, useParams } from "react-router-dom";
import img from "../../assets/usuario.png";
import { useCategoriaDeporte } from "../../hooks/useCategoriasDeportes";


export const MiembrosCat = () => {
  const { id_deporte, id_categoria } = useParams()
  const { categoria, loading } = useCategoriaDeporte(id_deporte, id_categoria)
  if (loading) return <p>Loading...</p>
  return (
    <>
      <div className="container mx-auto p-4">
        <p className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded mb-4 text-center">
          Registrar categoría
        </p>
        <div className="mb-4">
          <h2 className="text-lg font-bold text-center">Categoría {categoria.name}</h2>
        </div>
        <div className="grid grid-cols-2">
          {categoria.players.map(({ player }) => (
            <div key={player.id} className="bg-white rounded shadow p-4">
              <img className="h-24 w-24 rounded-full mx-auto mb-4" src={img} alt="Avatar" />
              <h3 className="text-center font-bold">{player.nombres} {player.apellidos}</h3>
              <div className="text-center mt-4">
                <Link to={"/admin/perfilAtleta/" + player.id}>
                  <button className="text-blue-600 hover:text-blue-700 ml-2">Ir a perfil</button>

                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Agregar nuevo miembro
        </button> */}
      </div>
    </>
  )
}