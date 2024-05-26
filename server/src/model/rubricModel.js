import { prisma } from "../config/prisma.js";
import { rubricSchema, rubricFieldSchema, rubricScorePlayerSchema } from "../schemas/rubricSchema.js";

// Función para obtener una rúbrica por ID de deporte
export const getRubricBySportId = async (id_sport) => {
    try {
        const rubric = await prisma.rubric.findUnique({
            where: { id_sport: id_sport },
            include: {
                fields: true
            }
        });
        return rubric;
    } catch (error) {
        console.error(error);
        return "Hubo un error con el servidor";
    }
};

// Función para crear una nueva rúbrica
export const createRubric = async (datos) => {
    try {
        const validatedData = rubricSchema.parse(datos);
        const newRubric = await prisma.rubric.create({
            data: validatedData
        });
        return newRubric;
    } catch (error) {
        console.error(error);
        return "Hubo un error con el servidor";
    }
};

// Función para actualizar una rúbrica
export const updateRubric = async (id_sport, datos) => {
    try {
        const validatedData = rubricSchema.partial().parse(datos);
        const updatedRubric = await prisma.rubric.update({
            where: { id_sport: id_sport },
            data: validatedData
        });
        return updatedRubric;
    } catch (error) {
        console.error(error);
        return "Hubo un error con el servidor";
    }
};

// Función para eliminar una rúbrica
export const deleteRubric = async (id_sport) => {
    try {
        await prisma.rubric.delete({
            where: { id_sport: id_sport }
        });
        return "Eliminado con éxito";
    } catch (error) {
        console.error(error);
        return "Hubo un error con el servidor";
    }
};

// Función para obtener todos los campos de rúbrica por ID de rúbrica
export const getAllRubricFields = async (id_sport) => {
    try {
        const rubric = await prisma.rubric.findUnique({
            where: { id_sport: id_sport },
            include: {
                fields: true
            }
        });
        return rubric ? rubric.fields : [];
    } catch (error) {
        console.error(error);
        return "Hubo un error con el servidor";
    }
};

// Función para crear un nuevo campo de rúbrica
export const createRubricField = async (datos) => {
    try {
        const validatedData = rubricFieldSchema.parse(datos);
        const newField = await prisma.rubric_fields.create({
            data: validatedData
        });
        return newField;
    } catch (error) {
        console.error(error);
        return "Hubo un error con el servidor";
    }
};

// Función para obtener todas las puntuaciones de un jugador en un campo de rúbrica
export const getAllRubricScoreByPlayer = async (id_field, id_player) => {
    try {
        const scores = await prisma.rubric_Score_player.findMany({
            where: {
                id_rubric_field: id_field,
                id_player: id_player
            }
        });
        return scores;
    } catch (error) {
        console.error(error);
        return "Hubo un error con el servidor";
    }
};

// Función para crear una nueva puntuación de jugador en un campo de rúbrica
export const createRubricScorePlayer = async (id_field, id_player, datos) => {
    try {
        const validatedData = rubricScorePlayerSchema.parse(datos);
        const newScore = await prisma.rubric_Score_player.create({
            data: {
                ...validatedData,
                id_rubric_field: id_field,
                id_player: id_player
            }
        });
        return newScore;
    } catch (error) {
        console.error(error);
        return "Hubo un error con el servidor";
    }
};

// Función para obtener los resultados de la rúbrica de un jugador específico
export const getPlayerRubricScores = async (id_player) => {
    try {
        const scores = await prisma.rubric_Score_player.findMany({
            where: {
                id_player: id_player
            },
            include: {
                rubric:true
            }
        });
        return scores;
    } catch (error) {
        console.error(error);
        return "Hubo un error con el servidor";
    }
};
