import { useState } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { loginRequest } from "../../../api/auth";
import { useSession } from "../../../hooks/useSession";

export const    Login = () => {
    const [seePsw, setSeePsw] = useState(false);
    const [authError, setAuthError] = useState("");  // Estado para manejar el error de autenticación

    const { register, handleSubmit, setError, formState: { errors }, clearErrors, watch } = useForm({
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const toggleSeePsw = () => {
        setSeePsw((prevShowPsw) => !prevShowPsw);
    };

    const { login } = useSession();

    const submitAuth = async (datos) => {
        setAuthError(""); // Resetear el error de autenticación antes de la nueva solicitud

        // Validación adicional del correo institucional
        if (!datos.email.endsWith("@cdb.edu.sv")) {
            setError("email", { type: "manual", message: "El correo debe ser del dominio @cdb.edu.sv" });
            return;
        }

        try {
            // Llamada a la API de login
            const result = await loginRequest(datos);

            // Mostrar la respuesta de la API para depuración
            console.log("Resultado de loginRequest:", result);

            // Verificar que el resultado contenga un token para determinar si el login fue exitoso
            if (result?.token) {
                // Limpiar el mensaje de error y autenticar al usuario
                setAuthError("");
                await login(result);  // Si las credenciales son correctas, el usuario se autentica
            } else {
                throw new Error("Credenciales incorrectas");
            }
        } catch (error) {
            // Mostrar mensaje de error si las credenciales son incorrectas
            setAuthError("Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.");
            console.error("Error de autenticación:", error);
        }
    };

    console.log(watch())

    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen bg-backLogin bg-cover">
                <form onSubmit={handleSubmit(submitAuth)} className="flex flex-col space-y-6 filter-none">
                    <div className="w-[335px] h-fit 800:w-96 py-24 bg-white rounded-xl flex flex-col justify-first items-center space-y-10 box-border" id="prim">
                        <div className="space-y-10 w-full flex flex-col justify-around items-center">
                            <h1 className="text-2xl font-sans font-bold">Inicia sesión</h1>

                            {/* Campo de Correo */}
                            <div className="relative flex w-full box-border px-2">
                                <input
                                    {...register("email", {
                                        required: "El campo de correo es obligatorio.",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Formato de correo no válido."
                                        }
                                    })}
                                    type="email"
                                    placeholder="Correo institucional"
                                    className={`w-full placeholder:text-slate-400 bg-[#F9F9F9] border ${errors.email ? 'border-red-500' : 'border-[#CCC9C9]'} rounded-[8px] px-4 py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1`}
                                />
                                <div className="absolute right-14 top-3">
                                    <AiTwotoneMail style={{ fontSize: '20px', color: 'gray' }} />
                                </div>
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-sm h-6">{errors.email.message}</p>
                            )}

                            {/* Campo de Contraseña */}
                            <div className="relative w-full box-border px-2">
                                <input
                                    {...register("password", {
                                        required: "El campo de contraseña es obligatorio."
                                    })}
                                    type={seePsw ? "text" : "password"}
                                    placeholder="Contraseña"
                                    className={`w-full placeholder:text-slate-400 bg-[#F9F9F9] border ${errors.password ? 'border-red-500' : 'border-[#CCC9C9]'} rounded-[8px] px-4 py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1`}
                                />
                                <div className="absolute right-[70px] top-3 space-x-7">
                                    <FiLock style={{ fontSize: '20px', color: 'gray' }} className="absolute" />
                                    <div onClick={toggleSeePsw}>
                                        {seePsw ? (
                                            <FaRegEyeSlash style={{ fontSize: '20px' }} className="absolute cursor-pointer" />
                                        ) : (
                                            <FaRegEye style={{ fontSize: '20px' }} className="absolute cursor-pointer" />
                                        )}
                                    </div>
                                </div>
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-sm">{errors.password.message}</p>
                            )}
                            {/* Error de autenticación */}
                            {authError && (
                                <div className="text-red-500 text-center">
                                    {authError}
                                </div>
                            )}

                            <div className="relative right-12">
                                
                            </div>
                        </div>
                    </div>

                    {/* Botón de Iniciar Sesión */}
                    <div className="border-box w-full h-36 p-5 flex flex-col justify-end items-center border bg-white rounded-xl" id="sec">
                        <input
                            type="submit"
                            value="Iniciar sesión"
                            className="text-white rounded-3xl px-10 py-2 bg-blue-600 hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-110 transition ease-in"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};
