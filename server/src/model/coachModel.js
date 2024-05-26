import {prisma} from "../config/prisma.js"
import { coachSchema } from "../schemas/coachSchema.js";
export const getAllCoach = async () => {
    const coaches = await prisma.coach.findMany();
    return coaches
}

export const createCoach = async (datos)=>{
    try {
        const coachValidado = coachSchema.parse(datos)

        coachValidado.birthDay = new Date(coachValidado.birthDay);

        if(coachValidado.birthDay.toString() == "Invalid Date"){
            return {error: "Fecha invalida"}
        }


        await prisma.coach.create({
            data: coachValidado
        })

        return coachValidado
    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}
export const getCoachById = async (id_coach)=>{
    try {
        const coach =   await prisma.coach.findFirst({
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

export const updateCoach = async (id_coach, datos)=>{
    try {
        const coachValidado = coachSchema.parse(datos)

        if(coachValidado.birthDay){
            
            coachValidado.birthDay = new Date(coachValidado.birthDay);

            if(coachValidado.birthDay.toString() == "Invalid Date"){
                return {error: "Fecha invalida"}
            }

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

export const deleteCoach = async (id_coach)=>{
    try {
        const coach =   await prisma.coach.delete({
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
