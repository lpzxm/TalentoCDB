import { Router } from "express";
import multer from "multer";
const upload = multer();
import {
  getPlayers,
  createNewPlayer,
  getPlayer,
  updatePlayerDetails,
  deletePlayerRecord,
  uploadReporteConductualFile,
  uploadReporteAcademicoFile,
  fillRubrica,
  getRubricaScores,
  updatePlayerStatus,
} from "../controllers/playerController.js";
import { auth } from "../middlewares/auth.js";
const router = Router();

router.route("/").get(getPlayers).post(createNewPlayer);

router
  .route("/:id")
  .get(getPlayer)
  .put(updatePlayerDetails)
  .delete(deletePlayerRecord);

router.post(
  "/academico",
  auth,
  upload.single("img"),
  uploadReporteAcademicoFile
);
router.post(
  "/conductual",
  auth,
  upload.single("img"),
  uploadReporteConductualFile
);
router.post("/rubrica", fillRubrica);
router.get("/rubrica/:id", getRubricaScores);
router.post("/estado/:id", updatePlayerStatus);

export default router;
