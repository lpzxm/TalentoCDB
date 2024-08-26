import img1 from "../../../assets/Balonmano.jpg";
import img2 from "../../../assets/Volley.png";
import img3 from "../../../assets/Fut.png";
import img4 from "../../../assets/Basket.png";
import { useDeportes } from "../../../hooks/useDeportes";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { clientAxios } from '../../../config/clientAxios';

export const Selecciones = () => {
  const { data, loading } = useDeportes();
  const [deportes, setDeportes] = useState([]);
  const [loadingDelete, setLoadingDelete] = useState(false);

  useEffect(() => {
    if (data) {
      setDeportes(data);
    }
  }, [data]);

  const eliminarDeporte = async (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este deporte?")) {
      setLoadingDelete(true);
      try {
        await clientAxios.delete(`/deportes/${id}`);
        // Actualiza el estado de deportes eliminando el deporte con el id especificado
        setDeportes(deportes.filter(deporte => deporte.id !== id));
      } catch (error) {
        console.error("Error al eliminar el deporte", error);
        alert("Hubo un error al eliminar el deporte");
      } finally {
        setLoadingDelete(false);
      }
    }
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <>
      <header className="bg-blue-600 text-white text-center p-4">
        <h1 className="text-xl">Selecciones</h1>
      </header>

      <div className="flex flex-wrap justify-around p-4">
        {deportes && deportes.map(deporte => (
          <div key={deporte.id} className="max-w-sm rounded overflow-hidden shadow-lg m-2">
            <img className="w-128" src={deporte.url} alt="Volleyball" />
            <div className="px-6 py-4">
              <div className="flex justify-between">
                <p className="font-bold text-xl mb-2">{deporte.name}</p>
                <div className="flex gap-2">
                  <Link to={"/admin/editarDeporte/" + deporte.id}>
                    <p>Editar</p>
                  </Link>

                  <button
                    onClick={() => eliminarDeporte(deporte.id)}
                    disabled={loadingDelete}
                    className={`px-4 py-2 rounded text-white ${loadingDelete ? "bg-gray-500" : "bg-red-600 hover:bg-red-700"} transition duration-150 ease-in-out`}>
                    {loadingDelete ? "Eliminando..." : "Eliminar"}
                  </button>
                </div>
              </div>
              <ul>
                {deporte.categories.map(category => (
                  <Link key={category.id} to={"/admin/MiembrosCat/" + deporte.id + "/" + category.id}>
                    <p className="underline cursor-pointer">{category.name}</p>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  )
};