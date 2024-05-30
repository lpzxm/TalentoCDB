import { TbShirtSport } from "react-icons/tb";
import { useSession } from "../../../hooks/useSession";


export const PlayerResults = () => {

    const { usuario } = useSession();

    const tableHeaders = [
        "Nombre",
        "Sección",
        "Año que cursa",
        "Edad",
        "Asistencia",
        "Estado académico",
        "Estado deportivo"
    ];

    const tableData = [
        ["Nombre del atleta", "Sección del atleta", "Año que cursa el atleta", "Edad del atleta", false, "Estado académico del atleta", "Listo"],
        ["Info", "Info", "Info", "Info", false, "Info", "En preparacion"],
        ["MasInfo", "MasInfo", "MasInfo", "MasInfo", false, "MasInfo", "Inactivo"],
        ["AunMasInfo", "AunMasInfo", "AunMasInfo", "AunMasInfo", false, "AunMasInfo", "Seleccionado"],
        ["AunMasInfo", "AunMasInfo", "AunMasInfo", "AunMasInfo", false, "AunMasInfo", "En preparacion"]
    ];

    return (
        <>


            <div className="w-full mt-10 flex flex-row justify-around items-center space-x-4">
                <div className="w-full flex flex-row justify-start ml-8 items-center space-x-4">
                    <TbShirtSport size={"40px"} />
                    <p className="text-lg">Bienvenido, <span className="font-semibold">{usuario.nombres}</span></p>
                </div>
                <div className="w-full flex flex-row justify-end items-center ">
                    <span className="text-lg">
                        Atleta perteneciente al deporte : {usuario.sport.nombre}
                    </span>
                </div>
            </div>
        </>
    )

}