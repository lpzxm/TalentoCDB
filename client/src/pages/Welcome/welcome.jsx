// import React from "react";
import { Link } from "react-router-dom";
// import donbosco from "../../assets/bg-form.jpg";
import batu from "../../assets/batu.png";
import inicio3 from "../../assets/inicio3.jpg";

export function Welcome() {
    return (
        <>
            <div className="flex flex-row w-full h-screen justify-between bg-welcomeImage bg-cover bg-right-top gap-x-10">
                <div className="flex w-full justify-center items-center">
                    <div className="justify-center items-center flex flex-col">
                        <div className="font-bold text-wrap text-2xl md:text-3xl w-72 md:w-full text-center font-playFair">
                            <p className="">&quot;El sueño que hace soñar&quot;</p>
                            <p className="pt-[40px]">Un corazón que transforma &quot;lobos&quot; en &quot;corderos&quot;</p>
                        </div>

                        <div className="font-playFair">
                            <Link to='/login'>
                                <button className="rounded-xl bg-black radius w-64 m-24">
                                    <p className="p-3 text-white text-base font-sans">Iniciar</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="h-full invisible lg:visible shrink-0">
                    <img className="w-[800px] h-1/2 " src={batu} alt="" />
                    <img className="w-[800px] h-1/2 " src={inicio3} alt="" />
                </div>
            </div>
        </>
    )
}