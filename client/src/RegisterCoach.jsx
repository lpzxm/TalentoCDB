import React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { clientAxios } from './config/clientAxios';

const backgroundImage = 'https://scontent.fsal13-1.fna.fbcdn.net/v/t39.30808-6/453096382_902236175279672_1482644661368440795_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=2ZVMrC_g_1oQ7kNvgEzPP-8&_nc_ht=scontent.fsal13-1.fna&oh=00_AYCiNinmoPajpGVI-qUw8JYKBD3GWNCjsDp4QGFOuVBRdw&oe=66C9F06F';

export const RegisterCoach = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [deportes, setDeportes] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await clientAxios("/deportes");
        setDeportes(data);
      } catch (error) {
        console.error("Error al cargar los deportes:", error);
      }
    })();
  }, []);

  const onSubmit = async (formData) => {
    setCargando(true);
    try {
      const response = await clientAxios.post("/deportes", formData);
      console.log("Entrenador registrado exitosamente:", response.data);
      // Aquí puedes manejar lo que ocurre después del registro exitoso,
      // como redirigir al usuario o mostrar un mensaje de éxito.
    } catch (error) {
      console.error("Error al registrar el entrenador:", error);
      // Aquí puedes manejar los errores, como mostrar un mensaje de error al usuario.
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-100 p-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})`, filter: 'blur(8px)' }}
      ></div>

      <div className="relative max-w-lg w-full bg-white p-6 rounded-lg shadow-md dark:bg-white dark:text-black">
        <h2 className="text-xl font-semibold text-center mb-6">Registrar Nuevo Entrenador</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Foto */}
          <div className="mb-6 text-center">
            <div className="w-48 h-48 border-2 border-dashed border-yellow-500 rounded-lg mx-auto mb-4 overflow-hidden">
              <p className="text-gray-600">Sube una foto</p>
            </div>
            <input
              type="file"
              accept="image/*"
              {...register('foto', { required: 'Subir una foto es obligatorio' })}
              className="block mx-auto text-blue-600 border border-blue-600 rounded-md py-1 px-3 hover:bg-blue-50 transition duration-150 ease-in-out"
            />
            {errors.foto && <p className="text-red-500 text-sm mt-2">{errors.foto.message}</p>}
          </div>

          {/* Nombre */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-black-700 dark:text-gray-300 mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              {...register('nombre', { required: 'Este campo es obligatorio' })}
              className={`w-full px-3 py-2 border ${errors.nombre ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.nombre && <p className="text-red-500 text-sm mt-2">{errors.nombre.message}</p>}
          </div>

          {/* Deporte Asignado */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="deporte">
              Deporte Asignado
            </label>
            <select
              {...register('id_sport', { required: 'Este campo es obligatorio' })}
              className={`w-full px-3 py-2 border ${errors.deporte ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500`}
            >
              {deportes.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
            {errors.deporte && <p className="text-red-500 text-sm mt-2">{errors.deporte.message}</p>}
          </div>

          {/* Fecha de Nacimiento */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="fechaNacimiento">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              id="fechaNacimiento"
              {...register('birthDay', { required: 'Este campo es obligatorio' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.fechaNacimiento && <p className="text-red-500 text-sm mt-2">{errors.fechaNacimiento.message}</p>}
          </div>

          {/* Correo Electrónico */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="correo">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="correo"
              {...register('correo', {
                required: 'Este campo es obligatorio',
                pattern: { value: /^\S+@\S+$/i, message: 'Correo no válido' },
              })}
              className={`w-full px-3 py-2 border ${errors.correo ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.correo && <p className="text-red-500 text-sm mt-2">{errors.correo.message}</p>}
          </div>

          {/* Contraseña */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="contraseña">
              Contraseña
            </label>
            <input
              type="password"
              id="contraseña"
              {...register('password', { required: 'Este campo es obligatorio' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.contraseña && <p className="text-red-500 text-sm mt-2">{errors.contraseña.message}</p>}
          </div>

          {/* Descripción */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="descripcion">
              Descripción
            </label>
            <textarea
              id="descripcion"
              {...register('descripcion', { required: 'Este campo es obligatorio' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            />
            {errors.descripcion && <p className="text-red-500 text-sm mt-2">{errors.descripcion.message}</p>}
          </div>

          {/* Botón de Enviar */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-block rounded bg-blue-600 px-6 py-2 text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              {cargando ? "Registrando..." : "Registrar Entrenador"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
