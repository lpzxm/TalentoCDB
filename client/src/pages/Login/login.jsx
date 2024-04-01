import React, { useState } from "react"
import { Link } from "react-router-dom";
import { AiTwotoneMail } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

export const Login = () => {

    const [seePsw, setSeePsw] = useState(false);

    const toggleSeePsw = () => {
        setSeePsw((prevShowPsw) => !prevShowPsw)
    }

    const handleFormSubmit = () => {
        const user = document.getElementById("user").value;
        const password = document.getElementById("password").value;

        if (!user || !password) {
            toast.error("Por favor, llena todos los campos.", {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }

        
        
    }

    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen bg-backLogin bg-cover">
                <div className="flex flex-col space-y-6 filter-none">
                    <div className="w-96 px-10 py-24 bg-white rounded-xl flex flex-col justify-first items-center space-y-10 box-border" id="prim">
                        <h1 className="text-2xl font-sans font-bold">Inicia sesión</h1>
                        <div className="relative w-full box-border">
                            <input type="email" name="user" id="user" placeholder="Correo institucional" className="w-full placeholder:text-slate-400 bg-[#F9F9F9] border border-[#CCC9C9] rounded-[8px] px-4 py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" required />
                            <AiTwotoneMail
                                style={{ fontSize: '20px', color: 'gray' }} className="absolute right-14 top-3" />
                        </div>
                        <div className="relative w-full box-border">
                            <input type={seePsw ? "text" : "password"} name="password" id="password" placeholder="Contraseña" className="w-full placeholder:text-slate-400 bg-[#F9F9F9] border border-[#CCC9C9] rounded-[8px] px-4 py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" required />
                            <FiLock style={{ fontSize: '20px', color: 'gray' }} className="absolute right-14 top-3" />
                            <div onClick={toggleSeePsw}>
                                {seePsw ? (
                                    <FaRegEyeSlash style={{ fontSize: '20px' }} className="absolute right-6 top-3" />
                                ) : (

                                    <FaRegEye style={{ fontSize: '20px' }} className="absolute right-6 top-3" />
                                )}
                            </div>

                        </div>
                        <label htmlFor="remember" className="relative right-12 space-x-4"><input type="checkbox" name="remember" id="remember" /> Recordar contraseña</label>
                    </div>
                    <div className="border-box w-full h-36 p-5 flex flex-col justify-end items-center border bg-white rounded-xl" id="sec">
                        <Link to="/home">
                        <input type="submit" value="Login" className="text-white rounded-3xl px-10 py-2 bg-blue-600 hover:bg-blue-400 " /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}