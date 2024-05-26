import {
    getRubricBySportId,
    createRubric,
    updateRubric,
    deleteRubric,
    getAllRubricFields,
    createRubricField,
    getAllRubricScoreByPlayer,
    createRubricScorePlayer,
    getPlayerRubricScores
} from "../model/rubricModel.js";

// Obtener una rúbrica por ID de deporte
export const getRubricHandler = async (req, res) => {
    try {
        const id_sport = +req.params.id;
        const rubric = await getRubricBySportId(id_sport);
        res.json(rubric);
    } catch (error) {
        res.status(500).json({ error: "Hubo un error con el servidor" });
    }
};

// Crear una nueva rúbrica
export const createRubricHandler = async (req, res) => {
    try {
        const datos = {
            id_sport: +req.params.id
        }
        const newRubric = await createRubric(datos);
        res.json(newRubric);
    } catch (error) {
        res.status(500).json({ error: "Hubo un error con el servidor" });
    }
};

// Actualizar una rúbrica
export const updateRubricHandler = async (req, res) => {
    try {
        const id_sport = +req.params.id;
        const datos = req.body;
        const updatedRubric = await updateRubric(id_sport, datos);
        res.json(updatedRubric);
    } catch (error) {
        res.status(500).json({ error: "Hubo un error con el servidor" });
    }
};

// Eliminar una rúbrica
export const deleteRubricHandler = async (req, res) => {
    try {
        const id_sport = +req.params.id;
        const result = await deleteRubric(id_sport);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Hubo un error con el servidor" });
    }
};

// Obtener todos los campos de rúbrica por ID de deporte
export const getAllRubricFieldsHandler = async (req, res) => {
    try {
        const id_sport = +req.params.id;
        const fields = await getAllRubricFields(id_sport);
        res.json(fields);
    } catch (error) {
        res.status(500).json({ error: "Hubo un error con el servidor" });
    }
};

// Crear un nuevo campo de rúbrica
export const createRubricFieldHandler = async (req, res) => {
    try {
        const datos = req.body;
        const newField = await createRubricField(datos);
        res.json(newField);
    } catch (error) {
        res.status(500).json({ error: "Hubo un error con el servidor" });
    }
};

// Obtener todas las puntuaciones de un jugador en un campo de rúbrica
export const getAllRubricScoreByPlayerHandler = async (req, res) => {
    try {
        const id_field = +req.params.id_field;
        const id_player = +req.params.id_player;
        const scores = await getAllRubricScoreByPlayer(id_field, id_player);
        res.json(scores);
    } catch (error) {
        res.status(500).json({ error: "Hubo un error con el servidor" });
    }
};

// Crear una nueva puntuación de jugador en un campo de rúbrica
export const createRubricScorePlayerHandler = async (req, res) => {
    try {
        const id_field = +req.params.id_field;
        const id_player = +req.params.id_player;
        const datos = req.body;
        const newScore = await createRubricScorePlayer(id_field, id_player, datos);
        res.json(newScore);
    } catch (error) {
        res.status(500).json({ error: "Hubo un error con el servidor" });
    }
};

// Obtener los resultados de la rúbrica de un jugador específico
export const getPlayerRubricScoresHandler = async (req, res) => {
    try {
        const id_player = +req.params.id_player;
        const scores = await getPlayerRubricScores(id_player);
        res.json(scores);
    } catch (error) {
        res.status(500).json({ error: "Hubo un error con el servidor" });
    }
};