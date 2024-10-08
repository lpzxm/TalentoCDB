//import React from "react"
import { Link } from "react-router-dom";
import img404 from "../../../assets/404.webp";
import img404_2 from "../../../assets/404_2.webp";

export const Error404 = () => {

    return (
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                Parece que te has perdido!
                            </h1>
                            <p className="my-2 text-gray-800">Nuestras disculpas por ello, regresa de nuevo a nuestra página principal para que puedas accesar con lo que contamos.</p>
                            <Link to="/redirect">
                                <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Vamos allá!!</button>
                            </Link>

                        </div>
                    </div>
                    <div>
                        <img src={img404} />
                    </div>
                </div>
            </div>
            <div>
                <img src={img404_2} />
            </div>
        </div>
    )

}