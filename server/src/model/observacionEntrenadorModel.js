//el q vea esto, yo se que es un deschongue de modelos en las observaciones y se puede simplificar, pero soy feliz
import { prisma } from "../config/prisma.js";

export const getObservacionesEntrenador = async () => {
    return await prisma.observaciones_Entrenador.findMany();
};

export const getObservacionEntrenadorById = async (id) => {
    return await prisma.observaciones_Entrenador.findUnique({
        where: { id: parseInt(id) },
    });
};

export const createObservacionEntrenador = async (data) => {
    return await prisma.observaciones_Entrenador.create({
        data,
    });
};

export const updateObservacionEntrenador = async (id, data) => {
    return await prisma.observaciones_Entrenador.update({
        where: { id: parseInt(id) },
        data,
    });
};

export const deleteObservacionEntrenador = async (id) => {
    return await prisma.observaciones_Entrenador.delete({
        where: { id: parseInt(id) },
    });
};