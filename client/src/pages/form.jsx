import React from "react";
import bgfondo from "../assets/bg-form.jpg"
import candado from "../assets/lock.png"
import mail from "../assets/mail.png"

export function Form(){
    return(
    <>
    <body>
        <div className="flex justify-center items-center h-screen w-screen ">
            <img className="opacity-65 w-fit h-fit" src={bgfondo} alt="" />
                <form className="md:w-96 w-72 absolute h-full top-10 text-center" action="">
                <div id="prim" className="bg-white rounded-xl h-[450px] ">
                    <br/>
            <h1 className="text-center font-sans m-10 text-xl">Inicio de sesión</h1>
                    <div className="flex">
                    <img className="w-7 h-7 relative top-[25px] left-72" src={mail} alt="mail" />
                    <input className=" md:m-5 mr-2 rounded-md h-10 w-72 border " type="gmial" name="correoinst" id="correo" placeholder="   Correo Institucional" /><br/>
                    </div>
                    <div className="flex">
                    <img className="w-7 h-7 relative top-[25px] left-72" src={candado} alt="lock" />
                    <input className="md:m-5 mt-5 mb-5 mr-2 rounded-md h-10 w-72 border " type="password" name="pass" id="password" placeholder="   Contraseña"/><br/>
                    </div>
                    <div className="flex"><input className="ml-12 w-5 border-gray-400 bg-cyan-300" type="checkbox"/> <p className="ml-2 font-sas">Recordar contraseña</p></div>
                    </div>
                    <div id="sec" className="bg-white relative rounded-xl md:w-96 w-72 h-[250px] bottom-24">
                    </div>
                    <input className="bg-blue-500 p-4 rounded-3xl cursor-pointer w-32 relative bottom-48" type="submit" value=" Login " />
                </form>
        </div>
        </body>
    </>
    )
}