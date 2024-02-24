// import React from "react";
import { Link } from "react-router-dom";
// import donbosco from "../../assets/bg-form.jpg";
import batu from "../../assets/batu.png";
import inicio3 from "../../assets/inicio3.jpg";

export function Welcome() {
    return (
        <>
            <div className="font-playFair bg-welcomeImage bg-cover bg-right-top">
                <main className="grid grid-cols-2 row-auto">
                    <section className="h-screen">
                        <img className="w-[900px] h-1/2 " src={batu} alt="" />
                        <img className="w-[900px] h-1/2 " src={inicio3} alt="" />
                    </section>
                    <section className="font-bold text-3xl justify-center items-center flex flex-col">
                        <h1>&quot;El sueño que hace soñar&quot;</h1>
                        <h1 className="pt-[40px]">Un corazón que tranforma &quot;lobos&quot; en &quot;corderos&quot;</h1>
                        <div>
                            <Link to='/login'><button className="rounded-xl bg-black radius w-64 m-24">
                                <p className="p-3 text-white text-base font-sans">Iniciar</p>
                            </button></Link>
                        </div>

                    </section>
                </main>
            </div>
        </>
    )
}