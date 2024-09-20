import { FaPlus } from "react-icons/fa";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerCategoriaDeporte } from "../../../../api/deporte";
import { eliminarJugador } from "../../../../api/players"; // Asumiendo que agregas esta función en tu API
import { useSession } from "../../../../hooks/useSession";
import { IoMdClipboard } from "react-icons/io";
import { clientAxios } from "../../../../config/clientAxios";

export const AtletasSelec = () => {
  const [categoryData, setCategoryData] = useState("loading");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [playersData, setPlayersData] = useState("loading");

  const navigate = useNavigate();
  const { usuario } = useSession();
  const params = useParams();

  const handleCancelDelete = () => setIsModalOpen(false);

  const handleDeleteClick = (id) => {
    setSelectedPlayerId(id); // Guarda el ID del jugador a eliminar
    setIsModalOpen(true); // Abre el modal
  };

  const deletePlayer = async () => {
    setPlayersData(playersData.filter(item => item.id !== selectedPlayerId));
    await eliminarJugador(selectedPlayerId);
    setIsModalOpen(false);
  };

  const toggleSportStatus = async (playerId) => {
    const updatedPlayersData = playersData.map(player => {
      if (player.id === playerId) {
        player.status_main_sport = player.status_main_sport === "aceptado" ? "rechazado" : "aceptado";
      }
      return player;
    });
    setPlayersData(updatedPlayersData);
    console.log(updatedPlayersData)
    await clientAxios.post("/jugadores/estado/" + playerId, { status_main_sport: updatedPlayersData[0].status_main_sport })
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await obtenerCategoriaDeporte(usuario.id_sport, params.id);
        setCategoryData(data);
        setPlayersData(data.players.map(player => player.player));
      } catch (e) {
        console.log(e);
        navigate("/coach/categorias");
      }
    })();
  }, [usuario.id_sport, params.id, navigate]);

  if (categoryData === "loading") return <p>Cargando Jugadores...</p>;

  const renderTableHeader = () => (
    <thead>
      <tr>
        {["Nombre", "Sección", "Año que cursa", "Edad", "Estado académico", "Estado conductual", "Estado deportivo", ""].map((header, index) => (
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
      {playersData.map((player, rowIndex) => (
        <tr key={rowIndex} className="hover:bg-gray-100">
          <td className="py-4 px-6 border-b border-gray-300"><Link to={"/coach/evaluarJugador/" + player.id}>{player.nombres}</Link></td>
          <td className="py-4 px-6 border-b border-gray-300">{player.seccion}</td>
          <td className="py-4 px-6 border-b border-gray-300">{player.grado}</td>
          <td className="py-4 px-6 border-b border-gray-300">{new Date().getFullYear() - new Date(player.birthDay).getFullYear()}</td>
          <td className="py-4 px-6 border-b border-gray-300">
            {
              player.status_img_academic ? (
                <img width={50} src={player.status_img_academic} alt="Status Académico" />
              ) : (
                <span>Inexistente</span>
              )
            }
          </td>
          <td className="py-4 px-6 border-b border-gray-300">
            {
              player.status_img_behaviour ? (
                <img width={50} src={player.status_img_behaviour} alt="Status Conductual" />
              ) : (
                <span>Inexistente</span>
              )
            }
          </td>
          <td className="py-4 px-6 border-b border-gray-300">
            <button
              onClick={() => toggleSportStatus(player.id)}
              className={`p-2 rounded-md ${player.status_main_sport === "aceptado" ? "bg-green-300" : "bg-red-300"}`}
            >
              {player.status_main_sport == "aceptado" ? "Aceptado" : "Rechazado"}
            </button>
          </td>
          <td className="flex flex-row justify-center items-center space-x-2 mt-2">
            <Link to={`/coach/editarJugador/${player.id}`}>
              <button className="p-2 bg-yellow-300 rounded-md"><MdEdit size={"20px"} /></button>
            </Link>
            <Link to={`/coach/evaluarJugador/${player.id}`}>
              <button className="p-2 bg-green-300 rounded-md"><IoMdClipboard size={"20px"} /></button>
            </Link>
            <button onClick={() => handleDeleteClick(player.id)} className="p-2 bg-red-400 rounded-md">
              <MdDeleteForever size={"20px"} />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <>
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="flex justify-center items-center mb-6 mt-6">
          <h2 className="text-xl font-bold text-orange-500">{categoryData.sport.name} | {categoryData.name}</h2>
        </div>
        <div>
          <span className="font-bold">Reglamento del deporte:</span>
          <span className=""> {categoryData.rules}</span>
        </div>
        <div className="mt-10">
          <Link to={`/coach/categoria/${params.id}/jugadores/nuevoJugador`}>
            <button className="rounded-sm p-4 bg-red-300 flex items-center hover:bg-red-500 ease-in-out transition-all">
              Agregar Jugador <FaPlus className="ml-2" />
            </button>
          </Link>
        </div>
        <div className="bg-white shadow-md rounded p-2 overflow-x-auto">
          <table className="mt-3 w-full text-left border-collapse">
            {renderTableHeader()}
            {renderTableBody()}
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6">
            <p className="mb-4 text-center">¿Seguro que quieres eliminar?</p>
            <div className="flex justify-around">
              <button onClick={deletePlayer} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5">
                Aceptar
              </button>
              <button onClick={handleCancelDelete} className="text-gray-700 hover:text-gray-900 border border-gray-700 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">
                Regresar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
