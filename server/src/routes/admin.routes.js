import express from "express";
import { createAdmin } from "../controllers/adminController.js";
import { login } from "../controllers/login-controller.js";

const router = express.Router();

router.post("/admin/create", createAdmin);
router.post("/login", login);

export default router;