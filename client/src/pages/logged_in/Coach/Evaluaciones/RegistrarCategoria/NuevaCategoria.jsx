// import React from "react";
import bgfondo from "../../../../../assets/bg-form.jpg";


export const RegisterCategory = () => {
    
    return (
        <>

 {/* Fondo con efecto de desenfoque */}
 <div className="fixed inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${bgfondo})`, filter: 'blur(8px)' }}></div>
                <center>
                <div id="divprincipal" className="w-fit my-28">
                    <main className="grid justify-items-center border-collapse border-8 p-2 relative md:mr-10 bg-white">
                        <div className="flex bg gap-24 border-solid border-4 border-amber-300 w-full lg:w-96 p-2 m-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                            </svg>
                            <p>Registrar Categoria</p>
                        </div>
                        <section className="border-dashed border-2 border-orange-500 w-full lg:w-96 p-4 mb-9">
                            <p className="mb-5">Registrar la categoría: </p>
                            <div className=" flex flex-col gap-4">
                                <button className="outline outline-offset-2 outline-blue-400 rounded  flex gap-4 w-full p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                                    </svg>
                                    <div className="flex space-x-12">
                                    <p className="">SUB-U</p>
                                    <input className="border-2 rounded border-zinc-100" placeholder="18" type="text"></input>
                                    </div>
                                </button>
                                <p className="p-2">Agrega el reglamento de la categoría relacionada:</p>
                                <textarea name="#" placeholder="Typing" id="#" className="outline outline-offset-2 outline-purple-500 w-full rounded"></textarea>
                                <button className="bg-gray-300 h-10 rounded-3xl">
                                    Registrar
                                </button>
                            </div>
                        </section>
                    </main>

                </div>
                </center>
        </>
    )
}