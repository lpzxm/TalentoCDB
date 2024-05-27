import { Router } from "express";
import { login, perfil } from "../controllers/login-controller.js";
import {auth} from "../middlewares/auth.js"
const router = Router();

router.post("/login", login);
router.get("/perfil",auth,perfil);

export default router;