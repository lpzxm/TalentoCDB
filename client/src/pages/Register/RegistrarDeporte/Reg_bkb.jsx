import img1 from "../../../assets/sub-u13_u18.png";
import img2 from "../../../assets/sub-u15.png";
import img3 from "../../../assets/sub-u17.png";


export function ViewCategories() {
    return (
        <>
            <div>
  <div className="flex flex-col items-center justify-center">
    <div className="flex justify-center gap-6 border-solid border-2 border-amber-300 w-full md:w-64 m-6 p-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
      <p>Registrar Categoria</p>
    </div>
    <div className="outline rounded outline-offset-2 outline-gray-200 md:w-80 flex justify-center gap-16 p-4 mb-8">
      <p>Categorias de Baloncesto</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </div>
  </div>

                
    <div className="flex flex-wrap justify-center">
  {/* Tarjeta 1 */}
  <div className="m-3 md:m-6 md:w-96 lg:w-96 transform transition-transform hover:scale-105 hover:rotate-3">
    <div className="border rounded-md overflow-hidden">
      <div className="p-2">
        <p className="text-center mb-2">SUB-U13</p>
        <img className="h-full w-full rounded p-4 md:w-auto" src={img1} alt="" />
      </div>
      <div className="bg-gray-300 h-2 w-full"></div>
    </div>
    <div className="shadow-xl" style={{ marginTop: "-2px" }}></div>
  </div>
  {/* Tarjeta 2 */}
  <div className="m-3 md:m-6 md:w-96 lg:w-96 transform transition-transform hover:scale-105 hover:rotate-3">
    <div className="border rounded-md overflow-hidden">
      <div className="p-2">
        <p className="text-center mb-2">SUB-U15</p>
        <img className="h-full w-full rounded p-4 md:w-auto" src={img2} alt="" />
      </div>
      <div className="bg-gray-300 h-2 w-full"></div>
    </div>
    <div className="shadow-xl" style={{ marginTop: "-2px" }}></div>
  </div>
  {/* Tarjeta 3 */}
  <div className="m-3 md:m-6 md:w-96 lg:w-96 transform transition-transform hover:scale-105 hover:rotate-3">
    <div className="border rounded-md overflow-hidden">
      <div className="p-2">
        <p className="text-center mb-2">SUB-U17</p>
        <img className="h-full w-full rounded p-4 md:w-auto" src={img3} alt="" />
      </div>
      <div className="bg-gray-300 h-2 w-full"></div>
    </div>
    <div className="shadow-xl" style={{ marginTop: "-2px" }}></div>
  </div>
  {/* Tarjeta 4 */}
  <div className="m-3 md:m-6 md:w-96 lg:w-96 transform transition-transform hover:scale-105 hover:rotate-3">
    <div className="border rounded-md overflow-hidden">
      <div className="p-2">
        <p className="text-center mb-2">SUB-U18</p>
        <img className="h-full w-full rounded p-4 md:w-auto" src={img1} alt="" />
      </div>
      <div className="bg-gray-300 h-2 w-full"></div>
    </div>
    <div className="shadow-xl" style={{ marginTop: "-2px" }}></div>
  </div>
</div>
            </div>
        </>
    )
} 