import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiCategoryAlt } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';

import { useSession } from '../../../../hooks/useSession';
import { obtenerDeporte, eliminarCategoriaDeporte } from '../../../../api/deporte';


const CategoryCard = ({ title, image, id, id_sport, deleteCategoria }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleDeleteClick = () => setIsModalOpen(true);


  const handleConfirmDelete = async () => {
    console.log(id_sport);
    await eliminarCategoriaDeporte(id_sport, id);
    deleteCategoria(id);
    setIsModalOpen(false);
  };

  const handleCancelDelete = () => setIsModalOpen(false);


  return (
    <div className="m-4 md:m-6 md:w-96 lg:w-96 transform transition-transform hover:scale-105 hover:rotate-3">
      <div className="border rounded-lg overflow-hidden shadow-slate-400 shadow-xl">
        <div className="p-2">
          <p className="text-center font-medium mb-2">{title}</p>
          <img className="h-80 w-80 object-cover object-center rounded p-4 md:w-auto" src={image} alt={title} />
          <div className="w-full flex flex-row flex-wrap justify-around items-center">
            <Link to={"/coach/categorias/jugadores/" + id}>
              <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
                Ver
              </button>
            </Link>
            <Link to={"/coach/categorias/editar/" + id}>
              <button className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
                Editar
              </button>
            </Link>

            <button className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2" onClick={handleDeleteClick}>
              Eliminar
            </button>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6">
              <p className="mb-4 text-center">¿Seguro que quieres eliminar?</p>
              <div className="flex justify-around">
                <button onClick={async () => {
                  await handleConfirmDelete()
                }} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5">
                  Aceptar
                </button>
                <button onClick={handleCancelDelete} className="text-gray-700 hover:text-gray-900 border border-gray-700 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">
                  Regresar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export const ViewCategories = () => {
  const [categorias, setCategorias] = useState([]);
  const { usuario } = useSession();

  const deleteCategoria = (id_categoria) => {
    setCategorias(categorias.filter(categoria => categoria.id !== id_categoria))
  }

  useEffect(() => {
    (async () => {
      const data = await obtenerDeporte(usuario.id_sport);
      setCategorias(data.categories)
    })()
  }, [])

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center items-center gap-6 border-solid border-2 border-amber-300 w-fit my-6 p-4">
          <BiCategoryAlt size="25px" />
          <p className="font-semibold text-2xl text-center">Listado de categorias</p>
        </div>
        <div className="md:w-80 flex justify-center gap-16 p-2 mb-8">
          <h1 className="font-bold text-lg underline underline-offset-2">Categorias de {usuario.sport.name}</h1>
        </div>
      </div>
      <Link className="w-full flex flex-row ml-10" to="/coach/categorias/nuevaCategoria">
        <button className="flex flex-row justify-center items-center bg-yellow-300 hover:bg-yellow-500 active:bg-orange-600 transition ease-in-out rounded-md p-3 space-x-3">
          <span>Agregar categoria nueva</span>
          <IoMdAdd />
        </button>
      </Link>

      <div className="flex flex-wrap justify-center mb-24">

        {categorias.length === 0 ? (
          <p className="text-center text-red-500 text-2xl mt-16">No existe ninguna categoría, agrega una nueva.</p>
        ) : (
          categorias.map((category, index) => (
            <CategoryCard
              key={index}
              deleteCategoria={deleteCategoria}
              id={category.id}
              id_sport={usuario.id_sport}
              title={category.name}
              image={category.img}
            />
          ))
        )}
      </div>
    </>
  );
};
