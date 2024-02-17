import { Router } from "express";
import { storeVideo, getAllVideos } from "../controllers/video.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

//UN-SECURED ROUTES


//SECURED ROUTES
router.route("/upload").post(verifyJWT, storeVideo);
router.route("/all").get(verifyJWT, getAllVideos);

export default router;
