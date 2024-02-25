// import React from "react"
import { AiTwotoneMail } from "react-icons/ai";
import { FiLock } from "react-icons/fi";

export function Login() {
    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen bg-backLogin bg-cover">
                <div className="flex flex-col space-y-6 filter-none">
                    <div className="w-96 px-10 py-24 bg-white rounded-xl flex flex-col justify-first items-center space-y-10 box-border" id="prim">
                        <h1 className="text-2xl font-sans font-bold">Inicia sesión</h1>
                        <div className="relative w-full box-border">
                            <input type="email" name="user" id="user" placeholder="Correo institucional" className="w-full placeholder:text-slate-400 bg-[#F9F9F9] border border-[#CCC9C9] rounded-[8px] px-4 py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" required />
                            <AiTwotoneMail
                                style={{ fontSize: '20px', color: 'gray' }} className="absolute right-12 top-3" />
                        </div>
                        <div className="relative w-full box-border">
                            <input type="text" name="password" id="password" placeholder="Contraseña" className="w-full placeholder:text-slate-400 bg-[#F9F9F9] border border-[#CCC9C9] rounded-[8px] px-4 py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" required />
                            <FiLock style={{ fontSize: '20px', color: 'gray' }} className="absolute right-12 top-3" />
                        </div>
                        <label htmlFor="remember" className="relative right-12 space-x-4"><input type="checkbox" name="remember" id="remember" /> Recordar contraseña</label>
                    </div>
                    <div className="w-64 h-28 border" id="sec">
                    </div>
                </div>
            </div>
        </>
    )
}