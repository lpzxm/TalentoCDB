import { prisma } from "../config/prisma.js"
import { categorySchema } from "../schemas/categorySchema.js";

export const createCategoryBySport = async (id_deporte,datos) => {
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


export const updateCategory = async (id_category,datos) => {
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
export const deleteCategory = async(id_categoria)=>{
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