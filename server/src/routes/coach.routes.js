import { Router } from "express";
import { getAllCoachesController, createCoachesController, getCoachByIdController,updateCoachController,deleteCoachController } from "../controllers/coachController.js";
const router = Router();

router.route("/")
    .get(getAllCoachesController)
    .post(createCoachesController)

router.route("/:id")
    .get(getCoachByIdController)
    .put(updateCoachController)
    .delete(deleteCoachController)

export default router