import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { obtenerCategoriaDeporte } from "../../../../api/deporte";
import { useNavigate } from "react-router-dom";
import { useSession } from "../../../../hooks/useSession";
import { useParams } from "react-router-dom";
import { eliminarJugador } from "../../../../api/players";

export const AtletasSelec = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleDeleteClick = () => setIsModalOpen(true);

  const [categoryData, setCategoryData] = useState("loading");

  const [playersData, setPlayersData] = useState("loading")

  const navigate = useNavigate();
  const calculateAge = (birthDate) => {
    const birthDateObj = new Date(birthDate);
    const today = new Date();

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    // Adjust age if the current month and day haven't passed the birth month and day
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }

    return age;
  };
  const { usuario } = useSession();

  const params = useParams();

  const tableHeaders = [
    "Nombre",
    "Sección",
    "Año que cursa",
    "Edad",
    "Estado académico",
    "Estado deportivo",
    ""
  ];


  useEffect(() => {
    (async () => {
      try {
        const data = await obtenerCategoriaDeporte(usuario.id_sport, params.id);
        setCategoryData(data)
        console.log(data)
        setPlayersData(data.players.map(player => player.player))
      }
      catch (e) {
        console.log(e)
        navigate("/coach/categorias")
      }
    })()
  }, [])

  if (categoryData == "loading") return <p>Cargando Jugadores...</p>

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

  const deletePlayer = async (id) => {
    setPlayersData(playersData.filter(item => item.id !== id))
    await eliminarJugador(id);
    setIsModalOpen(false)
  }

  const handleCancelDelete = () => setIsModalOpen(false);

  const renderTableBody = () => (
    <tbody>
      {playersData.map((player, rowIndex) => (
        <tr key={rowIndex} className="hover:bg-gray-100">
          {/* {row.map((cell, cellIndex) => (
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
          ))} */}

          <td className="py-4 px-6 border-b border-gray-300"
          >{player.nombres}</td>
          <td className="py-4 px-6 border-b border-gray-300"
          >{player.seccion}</td>
          <td className="py-4 px-6 border-b border-gray-300"
          >{player.grado}</td>
          <td className="py-4 px-6 border-b border-gray-300"
          >{calculateAge(player.birthDay)}</td>
          {/* <td className="py-4 px-6 border-b border-gray-300"
          ><input type="checkbox" onChange={() => { }} /></td> */}
          <td className="py-4 px-6 border-b border-gray-300"
          ><img width={50} src={player.status_img_academic} alt="" /></td>
          <td className="py-4 px-6 border-b border-gray-300"
          ><img width={50} src={player.status_main_sport} alt="" /></td>


          <td className="flex flex-col justify-center items-center space-y-2">
            <Link to={"/coach/editarJugador/" + player.id}>
              <button className="p-3 bg-yellow-300">Editar</button>
            </Link>

            <button onClick={async () => await deletePlayer(player.id)} className="p-2 bg-red-400">Eliminar</button>
          </td>


        </tr>
      ))
      }
    </tbody >
  );

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-700">{categoryData.sport.name}</h2>
        <p className="uppercase">{categoryData.name}</p>
        <h3 className="text-md font-semibold text-gray-600">Atletas seleccionados</h3>
      </div>
      <div>
        Reglamento del deporte:
      </div>
      <div>
        <Link to={"/coach/categoria/" + params.id + "/jugadores/nuevoJugador"}><button className="p-3 bg-red-300">Agregar Jugador</button>
        </Link>

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
