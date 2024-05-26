import { Router } from "express";
import { getPlayers, createNewPlayer, getPlayer, updatePlayerDetails, deletePlayerRecord } from "../controllers/playerController.js";

const router = Router();

router.route("/")
    .get(getPlayers)
    .post(createNewPlayer);

router.route("/:id")
    .get(getPlayer)
    .put(updatePlayerDetails)
    .delete(deletePlayerRecord);

export default router