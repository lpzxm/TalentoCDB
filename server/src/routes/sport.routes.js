import { Router } from "express";
import multer from "multer";
const storage = multer.memoryStorage()
const upload = multer({ storage });

import { getSports, getSport, createNewSport, updateSportDetails, deleteSportRecord, createSportCategory, updateSportCategory, deleteSportCategory,addPlayer,removePlayer } from "../controllers/sportController.js";

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


export default router