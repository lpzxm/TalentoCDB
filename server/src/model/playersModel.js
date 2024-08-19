import { prisma } from "../config/prisma.js"
import { playerSchema } from "../schemas/playersSchema.js";
import bcrypt from "bcrypt"
export const getAllPlayers = async () => {
    const players = await prisma.jugador.findMany();
    return players
}

export const createjugador = async (datos) => {
    try {
        const playerValido = playerSchema.parse(datos)

        playerValido.birthDay = new Date(playerValido.birthDay);

        if (playerValido.birthDay.toString() == "Invalid Date") {
            return { error: "Fecha invalida" }
        }

        playerValido.password = await bcrypt.hash(playerValido.password, 5);

        const jugador = await prisma.jugador.create({
            data: playerValido
        })

        return jugador
    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}

export const getPlayerById = async (id_player) => {
    try {
        const player = await prisma.jugador.findFirst({
            where: {
                id: id_player
            }
        })
        return player
    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}

export const updatePlayer = async (id_player, datos) => {
    try {
        const playerValidado = playerSchema.partial().parse(datos)

        if (playerValidado.birthDay) {

            playerValidado.birthDay = new Date(playerValidado.birthDay);

            if (playerValidado.birthDay.toString() == "Invalid Date") {
                return { error: "Fecha invalida" }
            }

        }

        const player = await prisma.jugador.update({
            where: {
                id: id_player
            },
            data: playerValidado
        })
        return player
    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}

export const deletejugador = async (id_player) => {
    try {
        const player = await prisma.jugador.delete({
            where: {
                id: id_player
            }
        })
        return "Eliminado con exito"
    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}

export const uploadReporteAcademico = async (id_jugador, url) => {
    try {
        const jugador = await prisma.jugador.update({
            where: {
                id: id_jugador
            },
            data: {
                status_img_academic: url
            }
        })
        return "Se ha subido con exito"
    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}
export const uploadReporteConductual = async (id_jugador, url) => {
    try {
        await prisma.jugador.update({
            where: {
                id: id_jugador
            },
            data: {
                status_img_behaviour: url
            }
        })

        return "Se ha subido con exito"
    } catch (error) {
        console.log(error)
        return "Hubo un error con el servidor"
    }
}