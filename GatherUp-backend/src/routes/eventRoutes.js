import { Router } from "express";
import { searchEvents, submitEvents, browseEvents } from "../controllers/eventController.js";
const router = Router();

router.route("/searchEvent").get(searchEvents);
router.route("/browseEvent").get(browseEvents);
router.route("/submitEvent").post(submitEvents);


export default router;