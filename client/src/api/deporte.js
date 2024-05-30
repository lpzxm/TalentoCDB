import { clientAxios } from "../config/clientAxios"

export const obtenerDeporte = async (id_deporte) => {
    try {
        const { data } = await clientAxios.get("/deportes/" + id_deporte)
        return data
    } catch (error) {
        return error
    }
}

export const crearCategoriaDeporte = async (id_deporte, datos) => {
    try {

        const { data } = await clientAxios.postForm("/deportes/" + id_deporte + "/categorias", datos, {
            headers: {
                'Content-Type': 'multipart/form-data',

            }
        })
        return data
    } catch (error) {
        return error
    }
}
export const editarCategoriaDeporte = async (id_deporte, id_categoria, datos) => {
    try {

        const { data } = await clientAxios.putForm("/deportes/" + id_deporte + "/categorias/" + id_categoria, datos, {
            headers: {
                'Content-Type': 'multipart/form-data',

            }
        })
        return data
    } catch (error) {
        return error
    }
}

export const eliminarCategoriaDeporte = async (id_deporte, id_categoria) => {
    try {
        const { data } = await clientAxios.delete("/deportes/" + id_deporte + "/categorias/" + id_categoria)
        return data
    } catch (error) {
        return error
    }
}

export const obtenerCategoriaDeporte = async (id_deporte, id_categoria) => {
    const { data } = await clientAxios.get("/deportes/" + id_deporte + "/categorias/" + id_categoria)
    return data
}

export const agregarJugadorCat = async (id_deporte, id_categoria, id_jugador) => {
    const data = await clientAxios.post("/deportes/" + id_deporte + "/categorias/" + id_categoria + "/jugadores/" + id_jugador)
    return data;
}

export const obtenerCamposRubrica = async (id_deporte) => {
    const { data } = await clientAxios.get("/deportes/" + id_deporte + "/rubrica/campos")
    return data;
}

export const crearCampoRubrica = async (id_deporte, datos) => {
    const { data } = await clientAxios.post("/deportes/" + id_deporte + "/rubrica/campos", datos)
    return data;
}
export const deleteCampoRubrica = async (id_deporte, id_categoria) => {
    const { data } = await clientAxios.delete("/deportes/" + id_deporte + "/rubrica/campos/" + id_categoria)
    return data;
}
// router.route("/:id/rubrica")
//     .get(getRubricHandler)
//     .post(createRubricHandler)
//     .put(updateRubricHandler)
//     .delete(deleteRubricHandler);

// router.route("/:id/rubrica/campos")
//     .get(getAllRubricFieldsHandler)
//     .post(createRubricFieldHandler);