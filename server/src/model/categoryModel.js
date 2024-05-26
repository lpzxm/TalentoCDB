import { prisma } from "../config/prisma.js"
import { categorySchema } from "../schemas/categorySchema.js";

export const createCategoryBySport = async (id_deporte, datos) => {
    try {
        const categoryValidado = categorySchema.parse(datos)
        categoryValidado.id_sport = +id_deporte


        const category = await prisma.category_sport.create({
            data: categoryValidado
        })

        return category
    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}


export const updateCategory = async (id_category, datos) => {
    try {
        const categoryValidado = categorySchema.partial().parse(datos)


        const categoryUpdated = await prisma.category_sport.update({
            where: {
                id: id_category
            },
            data: categoryValidado
        })

        return categoryUpdated
    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}
export const deleteCategory = async (id_categoria) => {
    try {

        const categoryFounded = await prisma.category_sport.delete({
            where: {
                id: id_categoria
            }
        })

        return "Eliminado con exito"
    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}

export const addPlayerToCategory = async (id_categoria, id_player) => {
    try {
        
        const category = await prisma.category_sport.findFirst({
            where: {
                id: id_categoria
            }
        })

        if(!category) return {error: "No existe esa categoria"}
        
        const player = await prisma.jugador.findFirst({
            where: {
                id: id_player
            }
        })

        if(!player) return {error: "No existe ese jugador"}

        const alreadyJoined = await prisma.category_players.findFirst({
            where:{
                id_category: id_categoria,
                id_player: id_player
            }
        })

        if(alreadyJoined) return {error: "Ya esta agregado a esta categoria"}

        const playeradd = await prisma.category_players.create({
            data: {
                id_category: id_categoria,
                id_player: id_player
            }
        })

        return playeradd

    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}
export const removePlayerToCategory = async (id_categoria, id_player) => {
    try {
        
        const alreadyJoined = await prisma.category_players.findFirst({
            where:{
                id_category: id_categoria,
                id_player: id_player
            }
        })

        if(!alreadyJoined) return {error: "No esta agregado a esta categoria"}

        const playeradd = await prisma.category_players.deleteMany({
            where: {
                id_category: id_categoria,
                id_player: id_player
            }
        })

        return "Ha sido eliminado este jugador de la categoria"

    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}
