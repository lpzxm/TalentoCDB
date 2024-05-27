import { clientAxios } from "../config/clientAxios"

export const loginRequest = async (datos) => {
    try {
        const { data } = await clientAxios.post("/auth/login", datos)
        return data
    } catch (error) {
        return error
    }
}