import { Router } from "express";
import { login, signup } from "../controllers/userController";
const router = Router()

router.route("/signup").post(login)
router.route("/login").post(signup)

export default router;