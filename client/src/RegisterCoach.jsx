import React, { useState } from 'react';

const backgroundImage = 'https://scontent.fsal13-1.fna.fbcdn.net/v/t39.30808-6/453096382_902236175279672_1482644661368440795_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=2ZVMrC_g_1oQ7kNvgEzPP-8&_nc_ht=scontent.fsal13-1.fna&oh=00_AYCiNinmoPajpGVI-qUw8JYKBD3GWNCjsDp4QGFOuVBRdw&oe=66C9F06F';

export const RegisterCoach = () => {
  const [nombre, setNombre] = useState('');
  const [deporte, setDeporte] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [correo, setCorreo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [foto, setFoto] = useState(null);
  const [errors, setErrors] = useState({});

  const handleNombreChange = (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z\s]*$/;
    if (regex.test(value)) {
      setNombre(value);
      setErrors((prevErrors) => ({ ...prevErrors, nombre: '' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, nombre: 'El nombre solo puede contener letras y espacios.' }));
    }
  };

  const handleDeporteChange = (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z\s]*$/;
    if (regex.test(value)) {
      setDeporte(value);
      setErrors((prevErrors) => ({ ...prevErrors, deporte: '' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, deporte: 'El deporte solo puede contener letras y espacios.' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    const newErrors = {};
    if (nombre.trim() === '') newErrors.nombre = 'El nombre es obligatorio.';
    if (deporte.trim() === '') newErrors.deporte = 'El deporte es obligatorio.';
    if (correo.trim() === '') newErrors.correo = 'El correo electrónico es obligatorio.';
    if (descripcion.trim() === '') newErrors.descripcion = 'La descripción es obligatoria.';
    
   
    const correoRegex = /^[^\s@]+@cdb\.edu\.sv$/;
    if (correo && !correoRegex.test(correo)) {
      newErrors.correo = 'El correo electrónico debe ser @cdb.edu.sv';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    
    console.log('Nombre:', nombre);
    console.log('Deporte:', deporte);
    console.log('Fecha de Nacimiento:', fechaNacimiento);
    console.log('Correo:', correo);
    console.log('Descripción:', descripcion);
    console.log('Foto:', foto);
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFoto(URL.createObjectURL(e.target.files[0]));
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
        <form onSubmit={handleSubmit}>
          
          <div className="mb-6 text-center">
            <div className="w-48 h-48 border-2 border-dashed border-yellow-500 rounded-lg mx-auto mb-4 overflow-hidden">
              {foto ? (
                <img src={foto} alt="Foto del entrenador" className="w-full h-full object-cover" />
              ) : (
                <p className="text-gray-600">Sube una foto</p>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block mx-auto text-blue-600 border border-blue-600 rounded-md py-1 px-3 hover:bg-blue-50 transition duration-150 ease-in-out"
            />
          </div>

         
          <div className="mb-4">
            <label className="block text-sm font-medium text-black-700 dark:text-gray-300 mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={handleNombreChange}
              className={`w-full px-3 py-2 border ${errors.nombre ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.nombre && <p className="text-red-500 text-sm mt-2">{errors.nombre}</p>}
          </div>

          {/* Campo 2: Deporte Asignado */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="deporte">
              Deporte Asignado
            </label>
            <input
              type="text"
              id="deporte"
              value={deporte}
              onChange={handleDeporteChange}
              className={`w-full px-3 py-2 border ${errors.deporte ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.deporte && <p className="text-red-500 text-sm mt-2">{errors.deporte}</p>}
          </div>

          {/* Campo 3: Fecha de Nacimiento */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="fechaNacimiento">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              id="fechaNacimiento"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Campo 4: Correo Electrónico */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="correo">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className={`w-full px-3 py-2 border ${errors.correo ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.correo && <p className="text-red-500 text-sm mt-2">{errors.correo}</p>}
          </div>

          {/* Campo 5: Descripción */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="descripcion">
              Descripción
            </label>
            <textarea
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            />
            {errors.descripcion && <p className="text-red-500 text-sm mt-2">{errors.descripcion}</p>}
          </div>

          {/* Botón de Enviar */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-block rounded bg-blue-600 px-6 py-2 text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Registrar Entrenador
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
