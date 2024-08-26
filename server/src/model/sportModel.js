import { prisma } from "../config/prisma.js"
import { sportSchema } from "../schemas/sportSchema.js";
import { cloudinary } from "../config/cloudinary.js";
export const getAllSport = async () => {
    const sport = await prisma.sport.findMany({
        include: {
            categories: true
        }
    });
    return sport
}

export const getSportById = async (id_deporte) => {
    try {
        const sportFound = await prisma.sport.findFirst({
            where: {
                id: id_deporte
            },
            include: {
                categories: {
                    include: {
                        players: {
                            include: {
                                player: true
                            }
                        }
                    }
                }
            }
        })

        if (!sportFound) {
            return { error: "Deporte no encontrado" }
        }

        return sportFound
    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}

export const createSport = async (datos,file) => {
    try {
        const sportValidado = sportSchema.parse(datos)

        const b64 = Buffer.from(file.buffer).toString("base64");
        let dataURI = "data:" + file.mimetype + ";base64," + b64;

        const uploadedFile = await cloudinary.uploader.upload(dataURI)
        await prisma.sport.create({
            data: {
                name: sportValidado.nombre,
                url: uploadedFile.secure_url,
                cloudinary_id: uploadedFile.public_id
            }
        })

        return sportValidado
    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}
export const updateSport = async (id_deporte, datos) => {
    try {
        const sportValidado = sportSchema.parse(datos)


        const sportUpdated = await prisma.sport.update({
            where: {
                id: id_deporte
            },
            data: sportValidado
        })

        return sportUpdated
    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}
export const deleteSport = async (id_deporte) => {
    try {

        const sportFound = await prisma.sport.delete({
            where: {
                id: id_deporte
            }
        })

        return "Eliminado con exito"
    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}