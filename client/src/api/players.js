import { clientAxios } from "../config/clientAxios"

export const crearJugador = async (datos) => {
    const { data } = await clientAxios.post("/jugadores", datos)
    return data
}