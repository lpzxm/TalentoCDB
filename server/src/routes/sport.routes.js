import { Router } from "express";

import { getSports, getCategorySport, getSport, createNewSport, updateSportDetails, deleteSportRecord, createSportCategory, updateSportCategory, deleteSportCategory, addPlayer, removePlayer, } from "../controllers/sportController.js";
import {
    // getRubricHandler,
    // createRubricHandler,
    // updateRubricHandler,
    // deleteRubricHandler,
    getAllRubricFieldsHandler,
    createRubricFieldHandler,
    // getAllRubricScoreByPlayerHandler,
    createRubricScorePlayerHandler,
    getPlayerRubricScoresHandler,
    deleteRubricFieldHandler
} from "../controllers/rubricController.js";
import { upload } from "../config/upload.js";

const router = Router();


router.route("/")
    .get(getSports)
    .post(upload.single("foto"), createNewSport);

router.route("/:id")
    .get(getSport)
    .put(upload.single("foto"), updateSportDetails)
    .delete(deleteSportRecord);

router.route("/:id/categorias")
    .post(upload.single("img"), createSportCategory)

router.route("/:id/categorias/:id_categoria")
    .put(upload.single("img"), updateSportCategory)
    .delete(deleteSportCategory)
    .get(getCategorySport)

router.route("/:id/categorias/:id_categoria/jugadores/:id_player")
    .post(addPlayer)
    .delete(removePlayer)


// router.route("/:id/rubrica")
//     .get(getRubricHandler)
//     .post(createRubricHandler)
//     .put(updateRubricHandler)
//     .delete(deleteRubricHandler);

router.route("/:id/rubrica/campos")
    .get(getAllRubricFieldsHandler)
    .post(createRubricFieldHandler)


router.delete("/:id/rubrica/campos/:id_field", deleteRubricFieldHandler)
router.post("/:id/rubrica/campos/:id_field/evaluar/:id_player", createRubricScorePlayerHandler)


router.get("/:id/rubrica/resultados/:id_player", getPlayerRubricScoresHandler);

export default router