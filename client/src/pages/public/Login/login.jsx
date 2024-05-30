import { useState } from "react"
import { AiTwotoneMail } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form"
import { loginRequest } from "../../../api/auth"
import { useSession } from "../../../hooks/useSession";
export const Login = () => {

    const [seePsw, setSeePsw] = useState(false);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            password: "",
        }
    });
    const toggleSeePsw = () => {
        setSeePsw((prevShowPsw) => !prevShowPsw)
    }

    const { login } = useSession();

    const submitAuth = async (datos) => {

        // const user = document.getElementById("user").value;
        // const password = document.getElementById("password").value;

        // if (!user || !password) {
        //     toast.error("Por favor, llena todos los campos.", {
        //         position: "top-right",
        //         autoClose: 3000,
        //     });
        //     return;
        // }

        try {
            const result = await loginRequest(datos);
            await login(result)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen bg-backLogin bg-cover">
                <form onSubmit={handleSubmit(submitAuth)} className="flex flex-col space-y-6 filter-none">
                    <div className="w-[335px] 800:w-96 py-24 bg-white rounded-xl flex flex-col justify-first items-center space-y-10 box-border" id="prim">
                        <div className="space-y-10 w-full flex flex-col justify-around items-center">
                            <h1 className="text-2xl font-sans font-bold">Inicia sesión</h1>
                            <div className="relative flex w-full box-border px-5">
                                <input {...register("email", { required: { value: true } })} type="email" placeholder="Correo institucional" className="w-full placeholder:text-slate-400 bg-[#F9F9F9] border border-[#CCC9C9] rounded-[8px] px-4 py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" required />
                                <div className="absolute right-14 top-3">
                                    <AiTwotoneMail
                                        style={{ fontSize: '20px', color: 'gray' }} />
                                </div>
                            </div>
                            <div className="relative w-full box-border px-5">
                                <input  {...register("password", { required: { value: true } })} type={seePsw ? "text" : "password"} placeholder="Contraseña" className="w-full placeholder:text-slate-400 bg-[#F9F9F9] border border-[#CCC9C9] rounded-[8px] px-4 py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" required />
                                <div className="absolute right-[70px] top-3 space-x-7">
                                    <FiLock style={{ fontSize: '20px', color: 'gray' }} className="absolute" />
                                    <div onClick={toggleSeePsw}>
                                        {seePsw ? (
                                            <FaRegEyeSlash style={{ fontSize: '20px' }} className="absolute" />
                                        ) : (

                                            <FaRegEye style={{ fontSize: '20px' }} className="absolute" />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="relative right-12">
                                <label htmlFor="remember" className="font-semibold"><input type="checkbox" name="remember" id="remember" /> Recordar contraseña</label>
                            </div>
                        </div>
                    </div>
                    <div className="border-box w-full h-36 p-5 flex flex-col justify-end items-center border bg-white rounded-xl" id="sec">
                        <input type="submit" value="Iniciar sesion" className="text-white rounded-3xl px-10 py-2 bg-blue-600 hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-110 transition ease-in" />
                    </div>
                </form>
            </div>
        </>
    )
}