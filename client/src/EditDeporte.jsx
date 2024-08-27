import React, { useState, useEffect } from 'react';
import foto1 from "../src/assets/foto1.jpg";
import { useForm } from 'react-hook-form';
import { clientAxios } from './config/clientAxios';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeporteId } from './hooks/useDeporteId';

export const EditDeporte = () => {
    const { id } = useParams();
    const { data, loading: cargandoDeporte } = useDeporteId(id);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, watch, setValue, formState: { errors }, reset } = useForm();

    const file = watch("foto");
    const fotoPreview = file instanceof FileList && file.length > 0 ? URL.createObjectURL(file[0]) : "";

    const navigate = useNavigate();

    const enviarDatos = async (formData) => {
        setLoading(true);
        const payload = new FormData();
        payload.append("foto", formData.foto[0]);
        payload.append("nombre", formData.nombre);
        console.log(payload.get("foto"));
        console.log(payload.get("nombre"));
        await clientAxios.putForm("/deportes/" + id, payload);

        setLoading(false);
        navigate("/admin/home");
    };

    const nameValue = watch('nombre') || '';

    useEffect(() => {
        if (nameValue) {
            const capitalized = nameValue.charAt(0).toUpperCase() + nameValue.slice(1);
            const sanitized = capitalized.replace(/[^A-Za-z\s]/g, ''); // Elimina caracteres no permitidos
            setValue('nombre', sanitized, { shouldValidate: true });
        }
    }, [nameValue, setValue]);

    useEffect(() => {
        if (data) {
            reset({
                nombre: data.name
            })
        }
    }, [data, setValue]);

    if (cargandoDeporte) return <p>Cargando Deporte...</p>;

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-gray-100 p-6 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${foto1})`, filter: 'blur(8px)' }}
            ></div>

            <div className="relative max-w-lg w-full bg-black p-6 rounded-lg shadow-md dark:bg-white dark:text-black">
                <div className="mb-6 text-center">
                    <div className="w-48 h-48 border-2 border-dashed border-yellow-500 rounded-lg mx-auto mb-4 overflow-hidden">
                        {data.url ? <img
                            src={data.url}
                            alt="Foto del Deporte"
                            className="w-full h-full object-cover"
                        /> : ""}
                        <p className="text-gray-600">Cambia una foto</p>
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        {...register("foto", {
                            //   required: "Sube una imagen",
                            //   validate: (FileList) =>
                            //     FileList[0] && FileList[0].type.startsWith('image/') || "El archivo debe ser una imagen",
                        })}
                        className="block mx-auto text-blue-600 border border-blue-600 rounded-md py-1 px-3 hover:bg-blue-50 transition duration-150 ease-in-out"
                    />
                    {errors.foto && <p className="text-red-500 text-sm mt-2">{errors.foto.message}</p>}
                </div>

                <h2 className="text-xl font-semibold text-center mb-6">Editar Deporte</h2>
                <form onSubmit={handleSubmit(enviarDatos)}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="nombre">
                            Nombre del Deporte
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            {...register("nombre", {
                                required: true,
                                validate: value => /^[A-Za-z\s]*$/.test(value) || "Solo se permiten letras",
                            })}
                            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500`}
                            required
                        />
                    </div>

                    <div className="text-center">
                        <button
                            disabled={loading}
                            type="submit"
                            className="inline-block rounded bg-blue-600 px-6 py-2 disabled:opacity-50 disabled:select-none text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Guardar Deporte
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};