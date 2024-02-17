import {Router} from "express";
import {verifyJWT} from "../middlewares/auth.middleware.js";
import {subscribeChannel} from "../controllers/subscription.controller.js";

const router = Router();

//UN-SECURED ROUTES

//SECURED ROUTES
router.route("/subscribe").post(verifyJWT, subscribeChannel);

export default router;
