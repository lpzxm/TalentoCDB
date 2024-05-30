import { useState } from "react";
import bgfondo from "../../../../../assets/bg-form.jpg";
import { TbLayoutGridAdd } from "react-icons/tb";
import { FileUpload } from "../../../../../components/ui/inputFile/fileComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "../../../../../hooks/useSession";
import { editarCategoriaDeporte } from "../../../../../api/deporte";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerCategoriaDeporte } from "../../../../../api/deporte";
export const EditCategory = () => {
    const [file, setFile] = useState(null);
    const [categoryData, setCategoryData] = useState("loading");
    const [categoryGenere, setCategoryGenere] = useState("Femenino");
    const [categoryAge, setCategoryAge] = useState();
    const [categoryRule, setCategoryRule] = useState();
    const navigate = useNavigate();
    const { usuario } = useSession();

    const params = useParams();


    const handleFileChange = (file) => {
        console.log(file)
        setFile(file);
    };

    const handleFileRemove = () => {
        setFile(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        // if (!file) {
        //     toast.error('Por favor, selecciona un archivo antes de subir.', {
        //         position: "bottom-right",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //     });
        //     return;
        // }
        if (file) {
            formData.append('img', file);
        }
        const categoryTitle = "SUB-U-" + categoryGenere + "-" + categoryAge;
        formData.append("name", categoryTitle)
        formData.append("rules", categoryRule)

        try {
            await editarCategoriaDeporte(usuario.id_sport, categoryData.id, formData)
            navigate("/coach/categorias")
        } catch (error) {
            console.error('Error al subir los archivos:', error);
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const data = await obtenerCategoriaDeporte(usuario.id_sport, params.id);
                setCategoryData(data)
                const name = data.name.split("-");
                console.log(name)
                setCategoryGenere(name[2] || "Femenino")
                setCategoryAge(name[3] || "")

            }
            catch {
                navigate("/coach/categorias")
            }
        })()
    }, [])

    if (categoryData == "loading") return <p>Cargando Categoria...</p>

    return (
        <>
            <div className="fixed inset-0 h-full w-full bg-cover bg-center z-0 blur-sm" style={{ backgroundImage: `url(${bgfondo})` }}></div>
            <div className="flex flex-col justify-center items-center h-screen mb-20">
                <form onSubmit={handleSubmit} className="border-collapse border-8 p-4 relative bg-white max-w-lg">
                    <div className="flex flex-row items-center justify-center border-solid border-4 border-amber-300 w-full p-3 gap-12 mb-10">
                        <TbLayoutGridAdd size="25px" />
                        <p className="text-center lg:text-left">Editar Categoria</p>
                    </div>
                    <div className="w-full flex justify-center items-center mb-10">
                        <FileUpload file={file} label="Cambiar foto de la categoria a editar" onFileChange={handleFileChange} onFileRemove={handleFileRemove} />
                    </div>
                    <div className="flex my-4 flex-col items-center justify-center">
                        <img src={categoryData.img} width={120} alt="" />
                        <p>Imagen original</p>
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
                                <select defaultValue={categoryGenere} onChange={e => setCategoryGenere(e.target.value)} name="sex" id="">
                                    <option selected value="Femenino">Femenino</option>
                                    <option value="Masculino">Masculino</option>
                                </select>
                                <input defaultValue={categoryAge} onChange={e => setCategoryAge(e.target.value)} className="border-2 rounded border-zinc-100 w-20 text-center" placeholder="18" type="text"></input>
                            </div>
                            <p className="p-2 text-center lg:text-left">Agrega el reglamento de la categoría relacionada:</p>
                            <textarea defaultValue={categoryData.rules} onChange={e => setCategoryRule(e.target.value)} placeholder="Typing" className="outline outline-offset-2 outline-purple-500 w-full rounded"></textarea>
                            <button type="submit" className="bg-yellow-300 h-10 rounded-3xl">
                                Editar
                            </button>
                        </div>
                    </section>
                </form>
            </div>
        </>
    )
}
