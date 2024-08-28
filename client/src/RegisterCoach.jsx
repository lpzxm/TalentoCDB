import React from 'react';
import { useForm } from 'react-hook-form';
import { FiLock } from "react-icons/fi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import backgroundImage from "../src/assets/foto1.jpg"

import { useEffect, useState } from 'react';
import { clientAxios } from './config/clientAxios';
import { useNavigate } from 'react-router-dom';

export const RegisterCoach = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ id_sport: "" });
  const [seePsw, setSeePsw] = useState(false);

  const [deportes, setDeportes] = useState([]);
  const [cargando, setCargando] = useState(false);

  const toggleSeePsw = () => {
    setSeePsw((prevShowPsw) => !prevShowPsw);
  };

  const navigate = useNavigate()

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
      const payload = new FormData()
      const data = { ...formData, foto: formData.foto[0].name }
      payload.append("data", JSON.stringify(data))
      payload.append("foto", formData.foto[0])
      const response = await clientAxios.postForm("/entrenadores", payload);
      if (response.data.error) {
        return
      }
      navigate("/redirect")
    } catch (error) {
      console.error("Error al registrar el entrenador:", error);
    } finally {
      setCargando(false);
    }
  };



  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-100 p-6 overflow-hidden pb-32 md:pb-5">
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
              {...register("foto", {
                required: "Sube una imagen",
                validate: (FileList) =>
                  FileList[0] && FileList[0].type.startsWith('image/') || "El archivo debe ser una imagen",
              })}
              className="block w-full text-blue-600 border border-blue-600 rounded-md py-2 px-4 hover:bg-blue-50 transition duration-150 ease-in-out"
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
              {...register('nombres', {
                required: 'Este campo es obligatorio',
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: 'El nombre solo debe contener letras',
                }
              })}
              className={`w-full px-3 py-2 border ${errors.nombres ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.nombres && <p className="text-red-500 text-sm mt-2">{errors.nombres.message}</p>}
          </div>

          {/* Deporte Asignado */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="deporte">
              Deporte Asignado
            </label>
            <select
              {...register('id_sport', { required: 'Este campo es obligatorio' })}
              className={`w-full px-3 py-2 border ${errors.id_sport ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500`}
            >
              <option disabled selected value="">Selecciona un deporte</option>
              {deportes.map((item, index) => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
            {errors.id_sport && <p className="text-red-500 text-sm mt-2">{errors.id_sport.message}</p>}
          </div>

          {/* Fecha de Nacimiento */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="fechaNacimiento">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              id="fechaNacimiento"
              {...register('birthDay', {
                required: 'Este campo es obligatorio',
                validate: {
                  before2020: value => new Date(value) <= new Date('2020-12-31') || 'La fecha debe ser antes de 2021',
                }
              })}
              className={`w-full px-3 py-2 ${errors.birthDay ? 'border-red-500' : 'border-gray-300'} border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.birthDay && <p className="text-red-500 text-sm mt-2">{errors.birthDay.message}</p>}
          </div>

          {/* Correo Electrónico */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="correo">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="correo"
              {...register('email', {
                required: 'Este campo es obligatorio',
                pattern: {
                  value: /^[\w-]+@cdb\.edu\.sv$/,
                  message: 'El correo debe tener el dominio @cdb.edu.sv',
                },
                // validate: {
                //   uniqueEmail: async (email) => {

                //     const { data } = await clientAxios.get(`/entrenadores?email=${email}`);
                //     console.log (data)
                //     return data.length === 0 || 'Este correo ya está registrado';
                //   }
                // }
              })}
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
          </div>

          {/* Contraseña */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="contraseña">
              Contraseña
            </label>
            <input
              type={seePsw ? "text" : "password"}
              id="contraseña"
              {...register('password',
                {
                  required: 'Este campo es obligatorio',
                  minLength: {
                    value: 8,
                    message: 'La contraseña debe tener al menos 8 caracteres'
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])/,
                    message: 'La contraseña debe tener al menos una letra mayúscula',
                  },
                })}
              className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500`}
            />
            <div className="absolute right-[40px] top-[738px] space-x-7">
              <FiLock style={{ fontSize: '20px', color: 'gray' }} className="absolute" />
              <div onClick={toggleSeePsw}>
                {seePsw ? (
                  <FaRegEyeSlash style={{ fontSize: '20px' }} className="cursor-pointer" />
                ) : (
                  <FaRegEye style={{ fontSize: '20px' }} className="cursor-pointer" />
                )}
              </div>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}
          </div>

          {/* Descripción */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="descripcion">
              Descripción
            </label>
            <textarea
              id="descripcion"
              {...register('descripcion', { required: 'Este campo es obligatorio' })}
              className={`w-full px-3 py-2 border ${errors.descripcion ? 'border-red-500' : 'border-gray-300'} border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              rows="4`}
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
