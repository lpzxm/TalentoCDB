import { cloudinary } from "../config/cloudinary.js";
import { prisma } from "../config/prisma.js"
import { fileToBase64 } from "../helpers/fileToBase64.js";
import { coachSchema } from "../schemas/coachSchema.js";
import bcrypt from "bcrypt"
export const getAllCoach = async () => {
    const coaches = await prisma.coach.findMany();
    return coaches
}

export const createCoach = async (datos,file) => {
    try {

        //Obtener Datos
        const coachValidado = coachSchema.parse(datos)
        coachValidado.birthDay = new Date(coachValidado.birthDay);
        
        //Obtener datos de la imagen guardad de cloudinary
        const imagen = await cloudinary.uploader.upload(fileToBase64(file))
    
        //Guardarlo en la base de datos    
        if (coachValidado.birthDay.toString() == "Invalid Date") {
            return { error: "Fecha invalida" }
        }


        const sameEmail = await prisma.coach.findFirst({
            where: {
                email: datos.email
            }
        })

        if(sameEmail){
            return {error: "Email ya registrado"}
        }

        coachValidado.password = await bcrypt.hash(coachValidado.password, 5);

        await prisma.coach.create({
            data: {
                ...coachValidado,
                cloudinary_id: imagen.public_id,
                url: imagen.secure_url
            }
        })

        return coachValidado
    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}
export const getCoachById = async (id_coach) => {
    try {
        const coach = await prisma.coach.findFirst({
            where: {
                id: id_coach
            }
        })
        return coach
    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}

export const updateCoach = async (id_coach, datos) => {
    try {
        const coachValidado = coachSchema.partial().parse(datos)

        if (coachValidado.birthDay) {

            coachValidado.birthDay = new Date(coachValidado.birthDay);

            if (coachValidado.birthDay.toString() == "Invalid Date") {
                return { error: "Fecha invalida" }
            }

        }

        if (coachValidado.password) {
            coachValidado.password = await bcrypt.hash(coachValidado.password, 5);
        }

        const coach = await prisma.coach.update({
            where: {
                id: id_coach
            },
            data: coachValidado
        })
        return coach
    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}

export const deleteCoach = async (id_coach) => {
    try {
        const coach = await prisma.coach.delete({
            where: {
                id: id_coach
            }
        })
        return "Eliminado con exito"
    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}
