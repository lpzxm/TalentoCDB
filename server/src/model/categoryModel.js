import { prisma } from "../config/prisma.js"
import { categorySchema } from "../schemas/categorySchema.js";

export const createCategoryBySport = async (datos) => {
    try {
        const categoryValidado = categorySchema.parse(datos)

        const category = await prisma.category_sport.create({
            data: sportValidado
        })

        return category
    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}


// export const updateSport = async (id_deporte,datos) => {
//     try {
//         const sportValidado = sportSchema.parse(datos)


//         const sportUpdated = await prisma.sport.update({
//             where: {
//                 id: id_deporte
//             },
//             data: sportValidado
//         })

//         return sportUpdated
//     } catch (error) {
//         console.log(error)
//         return "Hubo un error con el servidor"
//     }
// }
// export const deleteSport = async(id_deporte)=>{
//     try {
        
//         const sportFound = await prisma.sport.delete({
//             where: {
//                 id: id_deporte
//             }
//         })

//         return "Eliminado con exito"
//     } catch (error) {
//         console.log(error)
//         return "Hubo un error con el servidor"
//     }
// }