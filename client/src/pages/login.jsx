import React from "react";
import donbosco from "../assets/donbosco.png";
import batu from "../assets/batu.png";
import inicio3 from "../assets/inicio3.jpg";

export function Login() {
    return (
        <>
            <body>
                <main className="grid grid-cols-2 row-auto
">
                    <section className="h-screen">
                        <img className="w-[900px] h-1/2 " src={batu} alt="" />
                        <img className="w-[900px] h-1/2 " src={inicio3} alt="" />


                    </section>
                    <section className="font-bold text-2xl justify-center items-center flex flex-col">
                        <h1>"El sueño que hace soñar"</h1>
                        <h1 className="pt-[40px]">Un corazón que tranforma "lobos" en "corderos"</h1>
                        <a href=""><button className=" rounded-xl bg-black radius w-56 m-24">
                            <p className="p-3 text-white text-sm">Iniciar</p>
                        </button></a>
                    </section>
                </main>
            </body>
        </>
    )
}