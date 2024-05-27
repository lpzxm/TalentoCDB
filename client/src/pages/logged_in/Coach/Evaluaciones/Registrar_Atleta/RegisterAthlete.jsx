import img_usuario from "../../../../../assets/usuario.png";
import bgimg from "../../../../../assets/batu.webp";

export const RegisterAthlete = () => {
    return (
        <>
            <div className="fixed inset-0 bg-cover bg-center -z-10" style={{ backgroundImage: `url(${bgimg})`, filter: 'blur(8px)' }}></div>
            <div className="flex flex-col items-center pt-6 ">
                <div className="flex gap-5 text-center border-solid border-2 border-amber-300 p-2 m-6 bg-white shadow-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                    </svg>
                    <p>Registrar Atleta en categoria SUB-U</p>
                </div>
                <section className="rounded-3xl bg-white mb-24 lg:mb-12 w-5/6 lg:w-3/6 shadow-2xl">
                    <form action="">
                        <div className="w-full flex flex-col items-center justify-center">
                            <img className="max-w-full h-auto rounded-full p-8 w-48" src={img_usuario} alt="" />
                            <a href="">
                                <button className="bg-amber-400 text-white rounded-full px-4 py-3 m-4 hover:bg-blue-500 ease-in duration-300 hover:scale-110">
                                    Agregar imagen
                                </button>
                            </a>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                            <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="  Nombres" />
                            <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="  Apellidos" />
                            <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="Correo estudiantil" />
                            <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="Contraseña" />
                            <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="date" name="#" id="#" placeholder="" />
                            <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="Codigo estudiantil" />
                            <select name="" id="">
                                <option value="">1er grado</option>
                                <option value="">2do grado</option>
                                <option value="">3er grado</option>
                                <option value="">4to grado</option>
                                <option value="">5to grado</option>
                                <option value="">6to grado</option>
                                <option value="">7to grado</option>
                                <option value="">8to grado</option>
                                <option value="">9no grado</option>
                                <option value="">1er año</option>
                                <option value="">2do año</option>
                                <option value="">3er año</option>
                            </select>
                            <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="Seccion" />
                        </div>
                        <button className="bg-blue-500 text-white rounded-full px-7 py-4 m-10 hover:scale-110 hover:bg-amber-400 ease-in duration-300">
                            Crear perfil de atleta
                        </button>
                    </form>
                </section>
            </div>

        </>
    )
}