import img_usuario from "../../../../../assets/usuario.png";
import bgimg from "../../../../../assets/batu.png";

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
                        <center>
                            <img className="max-w-full h-auto rounded-full p-8 w-48" src={img_usuario} alt="" />
                           
                           
                         <div class="flex items-center justify-center w-full">
                         <input id="file-input" type="file" class="hidden" accept="image/*" />
                         <label for="file-input" class="relative cursor-pointer flex items-center justify-center px-4 py-2 border border-yellow-300 rounded-lg bg-white text-black dark:text-blackdark:bg-white-700 dark:border-blue-600 hover:bg-gray-100 dark:hover:bg-blue-400">
                         <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/></svg>
                        <span class="text-xs">
                        <span class="font-semibold">Subir Foto</span><br />SVG, PNG, JPG o GIF (MAX. 800x400px) </span>
                        </label></div>
                        
                
                        </center>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                        <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="  Nombres" />
                        <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="  Apellidos" />
                        <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="  Dirección" />
                        <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="  Grado Académico" />
                        <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="  Sección" />
                        <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="  Código" />
                        <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="  Nombre del encargado" />
                        <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="  Télefono del encargado" />
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