import React from 'react';
import { Link } from 'react-router-dom';

export const AdminOptions = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6 overflow-hidden">
      <div className="max-w-7xl w-full">
        {/* Fila Superior */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Caja 1 */}
          <div className="rounded-lg bg-white text-center text-gray-800 shadow-lg dark:bg-gray-800 dark:text-white p-4 flex flex-col justify-between h-full">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7"></path>
              </svg>
            </div>
            <div>
              <h5 className="mb-2 text-lg font-medium leading-tight">
                Añadir Deportes
              </h5>
              <p className="mb-4 text-sm">
                Esta sección permite agregar nuevos deportes a la base de datos o sistema. Aquí, puedes ingresar información relevante sobre el deporte, como su nombre, tipo, reglas y otras características importantes. Ideal para mantener la oferta de deportes actualizada y organizada.
              </p>
            </div>
            <div className="mt-auto flex justify-center">
              <Link
                to="/admin/AddDeportes"
                className="inline-block rounded bg-blue-600 px-4 pb-1.5 pt-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg dark:shadow-black/30 dark:hover:shadow-xl dark:focus:shadow-xl dark:active:shadow-xl">
                Añadir Nuevo Deporte
              </Link>
            </div>
            <div className="border-t-2 border-neutral-100 px-4 py-2 text-gray-600 dark:border-white/10 dark:text-neutral-300">
              2 days ago
            </div>
          </div>

          {/* Caja 2 */}
          <div className="rounded-lg bg-white text-center text-gray-800 shadow-lg dark:bg-gray-800 dark:text-white p-4 flex flex-col justify-between h-full">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16m-8 4h8m-8-6h8m-8-6h8"></path>
              </svg>
            </div>
            <div>
              <h5 className="mb-2 text-lg font-medium leading-tight">
                Registrar entrenadores
              </h5>
              <p className="mb-4 text-sm">
                Esta sección facilita la inscripción de nuevos entrenadores. Incluye campos para ingresar información personal y profesional del entrenador, como nombre, experiencia, certificaciones y áreas de especialización. Es esencial para gestionar y asignar entrenadores a diferentes deportes o equipos.
              </p>
            </div>
            <div className="mt-auto flex justify-center">
              <Link
                to="/admin/RegisterCoach" // Ruta a la que se navega
                className="inline-block rounded bg-blue-600 px-4 pb-1.5 pt-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg dark:shadow-black/30 dark:hover:shadow-xl dark:focus:shadow-xl dark:active:shadow-xl">
                Registrar Nuevo Entrenador
              </Link>
            </div>
            <div className="border-t-2 border-neutral-100 px-4 py-2 text-gray-600 dark:border-white/10 dark:text-neutral-300">
              3 days ago
            </div>
          </div>

          {/* Caja 3 */}
          <div className="rounded-lg bg-white text-center text-gray-800 shadow-lg dark:bg-gray-800 dark:text-white p-4 flex flex-col justify-between h-full">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 10h16M4 13h16M4 16h16"></path>
              </svg>
            </div>
            <div>
              <h5 className="mb-2 text-lg font-medium leading-tight">
                Observación deportiva
              </h5>
              <p className="mb-4 text-sm">
                Aquí se registran observaciones y comentarios sobre el desempeño de los atletas en eventos deportivos o entrenamientos. Puedes documentar aspectos como el progreso, fortalezas y áreas de mejora.
              </p>
            </div>
            <div className="mt-auto flex justify-center">
              <Link
                to="/admin/RegisterObservation" // Ruta a la que se navega
                className="inline-block rounded bg-blue-600 px-4 pb-1.5 pt-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg dark:shadow-black/30 dark:hover:shadow-xl dark:focus:shadow-xl dark:active:shadow-xl">
                Ver Observaciones
              </Link>
            </div>
            <div className="border-t-2 border-neutral-100 px-4 py-2 text-gray-600 dark:border-white/10 dark:text-neutral-300">
              4 days ago
            </div>
          </div>
        </div>

        {/* Fila Inferior */}
        <div className="flex flex-col md:flex-row md:justify-center gap-6">
          {/* Caja 4 */}
          <div className="rounded-lg bg-white text-center text-gray-800 shadow-lg dark:bg-gray-800 dark:text-white p-4 flex flex-col justify-between h-full">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16m-8 6h8M4 12h16M4 18h16"></path>
              </svg>
            </div>
            <div className="p-4">
              <h5 className="mb-2 text-lg font-medium leading-tight">
                Observación de entrenadores
              </h5>
              <p className="mb-4 text-sm">
                En esta sección se registran observaciones sobre el desempeño y la metodología de los entrenadores. Se pueden incluir comentarios sobre su efectividad, habilidades de comunicación y su impacto en el desarrollo de los atletas.
              </p>
              <div className="flex justify-center mt-auto">
                <Link
                  to="/admin/coach-evaluations" // Ruta a la que se navega
                  className="inline-block rounded bg-blue-600 px-4 pb-1.5 pt-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg dark:shadow-black/30 dark:hover:shadow-xl dark:focus:shadow-xl dark:active:shadow-xl">
                  Consultar Evaluaciones de Entrenadores
                </Link>
              </div>
            </div>
            <div className="border-t-2 border-neutral-100 px-4 py-2 text-gray-600 dark:border-white/10 dark:text-neutral-300">
              5 days ago
            </div>
          </div>

          {/* Caja 5 */}
          <div className="rounded-lg bg-white text-center text-gray-800 shadow-lg dark:bg-gray-800 dark:text-white p-4 flex flex-col justify-between h-full">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h12M6 15h12m-6-9v18"></path>
              </svg>
            </div>
            <div className="p-4">
              <h5 className="mb-2 text-lg font-medium leading-tight">
                Categorías y Atletas
              </h5>
              <p className="mb-4 text-sm">
                Aquí puedes ver y gestionar las categorías de deportes y los atletas registrados. Permite asignar atletas a diferentes categorías y supervisar su progreso.
              </p>
              <div className="flex justify-center mt-auto">
                <Link
                  to="/admin/categories-and-athletes" // Ruta a la que se navega
                  className="inline-block rounded bg-blue-600 px-4 pb-1.5 pt-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg dark:shadow-black/30 dark:hover:shadow-xl dark:focus:shadow-xl dark:active:shadow-xl">
                  Ver Categorías y Atletas
                </Link>
              </div>
            </div>
            <div className="border-t-2 border-neutral-100 px-4 py-2 text-gray-600 dark:border-white/10 dark:text-neutral-300">
              6 days ago
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminOptions;
