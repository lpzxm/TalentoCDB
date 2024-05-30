import { useState } from "react";
import bgfondo from "../../../../../assets/bg-form.jpg";
import { TbLayoutGridAdd } from "react-icons/tb";
import { FileUpload } from "../../../../../components/ui/inputFile/fileComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSession } from "../../../../../hooks/useSession";
import { crearCategoriaDeporte } from "../../../../../api/deporte";
import { useNavigate } from "react-router-dom";



export const RegisterCategory = () => {
    const [file, setFile] = useState(null);
    const [categoryGenere, setCategoryGenere] = useState();
    const [categoryAge, setCategoryAge] = useState();
    const [categoryRule, setCategoryRule] = useState();
    const navigate = useNavigate();
    const { usuario } = useSession();
    const handleFileChange = (file) => {
        console.log(file)
        setFile(file);
    };

    const handleFileRemove = () => {
        setFile(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!file) {
            toast.error('Por favor, selecciona un archivo antes de subir.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        const categoryTitle = "SUB-U-" + categoryGenere + "-" + categoryAge;
        const formData = new FormData();
        formData.append('img', file);
        formData.append("name", categoryTitle)
        formData.append("rules", categoryRule)

        try {
            await crearCategoriaDeporte(usuario.id_sport, formData)
            navigate("/coach/categorias")
        } catch (error) {
            console.error('Error al subir los archivos:', error);
        }
    };

    return (
        <>
            <div className="fixed inset-0 h-full w-full bg-cover bg-center z-0 blur-sm" style={{ backgroundImage: `url(${bgfondo})` }}></div>
            <div className="flex flex-col justify-center items-center h-screen mb-14">
                <form onSubmit={handleSubmit} className="border-collapse border-8 p-4 relative bg-white max-w-lg">
                    <div className="flex flex-row items-center justify-center border-solid border-4 border-amber-300 w-full p-3 gap-12 mb-10">
                        <TbLayoutGridAdd size="25px" />
                        <p className="text-center lg:text-left">Registrar Categoria</p>
                    </div>
                    <div className="w-full flex justify-center items-center mb-10">
                        <FileUpload file={file} label="Agrega una foto de la categoria a añadir" onFileChange={handleFileChange} onFileRemove={handleFileRemove} />
                    </div>
                    <section className="border-dashed border-2 border-orange-500 w-full p-4">

                        <p className="mb-5 text-center lg:text-left">Registrar la categoría:</p>
                        <div className="flex flex-col gap-4">
                            <div className="outline outline-offset-2 outline-blue-400 rounded flex items-center justify-between gap-4 w-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                                </svg>
                                <div className="flex-grow">
                                    <p className="text-left">SUB-U</p>
                                </div>
                                <select onChange={e => setCategoryGenere(e.target.value)} name="sex" id="">
                                    <option selected value="Femenino">Femenino</option>
                                    <option value="Masculino">Masculino</option>
                                </select>
                                <input onChange={e => setCategoryAge(e.target.value)} className="border-2 rounded border-zinc-100 w-20 text-center" placeholder="18" type="text"></input>
                            </div>
                            <p className="p-2 text-center lg:text-left">Agrega el reglamento de la categoría relacionada:</p>
                            <textarea onChange={e => setCategoryRule(e.target.value)} placeholder="Typing" className="outline outline-offset-2 outline-purple-500 w-full rounded"></textarea>
                            <button type="submit" className="bg-gray-300 h-10 rounded-3xl">
                                Registrar
                            </button>
                        </div>
                    </section>
                </form>
            </div>
        </>
    )
}
