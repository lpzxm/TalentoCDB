import { Router } from "express";
import multer from "multer";
const storage = multer.memoryStorage()
const upload = multer({ storage });

import { getSports, getSport, createNewSport, updateSportDetails, deleteSportRecord, createSportCategory, updateSportCategory, deleteSportCategory, addPlayer, removePlayer } from "../controllers/sportController.js";
import {
    getRubricHandler,
    createRubricHandler,
    updateRubricHandler,
    deleteRubricHandler,
    getAllRubricFieldsHandler,
    createRubricFieldHandler,
    getAllRubricScoreByPlayerHandler,
    createRubricScorePlayerHandler,
    getPlayerRubricScoresHandler
} from "../controllers/rubricController.js";

const router = Router();


router.route("/")
    .get(getSports)
    .post(createNewSport);

router.route("/:id")
    .get(getSport)
    .put(updateSportDetails)
    .delete(deleteSportRecord);

router.route("/:id/categorias")
    .post(upload.single("img"), createSportCategory)

router.route("/:id/categorias/:id_categoria")
    .put(upload.single("img"), updateSportCategory)
    .delete(deleteSportCategory)

router.route("/:id/categorias/:id_categoria/jugadores/:id_player")
    .post(addPlayer)
    .delete(removePlayer)


router.route("/:id/rubrica")
    .get(getRubricHandler)
    .post(createRubricHandler)
    .put(updateRubricHandler)
    .delete(deleteRubricHandler);

router.route("/:id/rubrica/campos")
    .get(getAllRubricFieldsHandler)
    .post(createRubricFieldHandler);

router.post("/:id/rubrica/campos/:id_field/evaluar/:id_player",createRubricScorePlayerHandler)


router.get("/:id/rubrica/resultados/:id_player", getPlayerRubricScoresHandler);

export default router