import {Router} from "express";
// import {verifyJWT} from "../middlewares/auth.middleware.js";
import {layerZeroScanner} from "../controllers/layerZeroScanner.controller.js";

const router = Router();

//UN-SECURED ROUTES

//SECURED ROUTES
router.route("/scanner").get(layerZeroScanner);

export default router;
