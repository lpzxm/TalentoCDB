import img1 from "../../assets/Balonmano.jpg";
import img2 from "../../assets/Volley.png";
import img3 from "../../assets/Fut.png";
import img4 from "../../assets/Basket.png";

export const Selecciones = () => {
  return (
    <>
      <header className="bg-blue-600 text-white text-center p-4">
        <h1 className="text-xl">Selecciones</h1>
      </header>

      <div className="flex flex-wrap justify-around p-4">

        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
          <img className="w-128" src={img2} alt="Volleyball" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Selección de Volleyball</div>
          </div>
        </div>


        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
          <img className="w-128" src={img3} alt="Fútbol" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Selección de Fútbol</div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-around p-4 pb-24 md:pb-4">

        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
          <img className="w-128" src={img4} alt="Volleyball" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ">Selección de baloncesto</div>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
          <img className="w-128" src={img1} alt="Fútbol" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Selección de balonmano</div>
          </div>
        </div>
      </div>
    </>
  )
}