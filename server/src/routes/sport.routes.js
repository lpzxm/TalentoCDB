import { Router } from "express";

const router = Router();

router.route("/")
    .get(async (req, res) => {
        const sports = await getAllSport();
        return res.json(sports)
    })
    .post(async (req, res) => {
        const datos = req.body;
        const sport = await createSport(datos)
        return res.json(sport)
    })


router.route("/:id")
    .get(async (req, res) => {
        const id_deporte = +req.params.id
        const sport = await getSportById(id_deporte)
        return res.json(sport)
    })
    .put(async (req, res) => {
        const id_deporte = +req.params.id
        const datos = req.body;
        const sport = await updateSport(id_deporte, datos)
        return res.json(sport)
    })
    .delete(async(req, res) => {
        const id_deporte = +req.params.id
        const sportDeleted = await deleteSport(id_deporte);
        return res.json(sportDeleted)
    })

export default router