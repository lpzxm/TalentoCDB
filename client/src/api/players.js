import { clientAxios } from "../config/clientAxios"

export const crearJugador = async (datos) => {
    const { data } = await clientAxios.post("/jugadores", datos)
    return data
}

export const obtenerJugador = async (id) => {
    const { data } = await clientAxios.get("/jugadores/" + id)
    return data
}

export const editarJugador = async(id,datos) =>{
    const { data } = await clientAxios.put("/jugadores/"+id, datos)
    return data
}

export const eliminarJugador = async (id) => {
    const { data } = await clientAxios.delete("/jugadores/" + id)
    return data
}