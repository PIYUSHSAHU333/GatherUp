import { Router } from "express";
import { login, signup } from "../controllers/userController.js";
const router = Router()

router.route("/signup").post(signup)
router.route("/login").post(login)

export default router;