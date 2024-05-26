import { getAllCoach, createCoach, getCoachById,updateCoach,deleteCoach } from "../model/coachModel.js";

export const getAllCoachesController = async (req, res) => {
    const coaches = await getAllCoach();
    return res.json(coaches)
}

export const createCoachesController = async (req, res) => {
    const datos = req.body;
    const coach = await createCoach(datos);
    return res.json(coach)
}

export const getCoachByIdController = async (req, res) => {
    const id_coach = +req.params.id
    const coach = await getCoachById(id_coach);
    return res.json(coach)
}

export const updateCoachController = async(req, res) => {
    const id_coach = +req.params.id;
    const datos = req.body;
    const coach = await updateCoach(id_coach, datos);
    return res.json(coach)
}
export const deleteCoachController = async(req, res) => {
    const id_coach = +req.params.id
    const coach = await deleteCoach(id_coach)
    return res.json(coach)
}