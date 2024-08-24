import { prisma } from "../config/prisma.js";

export const createObservation = async (data) => {
    return await prisma.observaciones_Jugador.create({
        data,
    });
};

export const getAllObservations = async () => {
    return await prisma.observaciones_Jugador.findMany({
        include: {
            atleta: true,
            entrenador: true,
        },
    });
};

export const getObservationById = async (id) => {
    return await prisma.observaciones_Jugador.findUnique({
        where: { id },
        include: {
            atleta: true,
            entrenador: true,
        },
    });
};

export const updateObservation = async (id, data) => {
    return await prisma.observaciones_Jugador.update({
        where: { id },
        data,
    });
};

export const deleteObservation = async (id) => {
    return await prisma.observaciones_Jugador.delete({
        where: { id },
    });
};
