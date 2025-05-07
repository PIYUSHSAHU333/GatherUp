import { Router } from "express";
import { searchEvents, submitEvents, browseEvents } from "../controllers/eventController";
const router = Router();

router.route("/searchEvent").post(searchEvents);
router.route("/browseEvent").post(browseEvents);
router.route("/submitEvent").post(submitEvents);


export default router;