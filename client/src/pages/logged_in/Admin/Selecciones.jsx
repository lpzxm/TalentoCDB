import img1 from "../../../assets/Balonmano.jpg";
import img2 from "../../../assets/Volley.png";
import img3 from "../../../assets/Fut.png";
import img4 from "../../../assets/Basket.png";
import { useDeportes } from "../../../hooks/useDeportes";
import { Link } from "react-router-dom";

export const Selecciones = () => {
  const { data, loading } = useDeportes();
  if (loading) return <p>Cargando...</p>
  return (
    <>
      <header className="bg-blue-600 text-white text-center p-4">
        <h1 className="text-xl">Selecciones</h1>
      </header>

      <div className="flex flex-wrap justify-around p-4">
        {data && data.map(deporte => (
          <div key={deporte.id} className="max-w-sm rounded overflow-hidden shadow-lg m-2">
            <img className="w-128" src={deporte.url} alt="Volleyball" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{deporte.name}</div>
              <ul>
                {deporte.categories.map(category => (
                  <Link to={"/admin/MiembrosCat/"+deporte.id+"/"+category.id}>
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
}