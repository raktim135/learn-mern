import {Router} from "express";
import {registerUser, loginUser, logoutUser, refreshAccessToken, changePassowrd, getSelf, updateUserDetails, updateUserAvatar, getUserChannelProfile} from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js";
import {verifyJWT} from "../middlewares/auth.middleware.js";

const router = Router();

//UN-SECURED ROUTES
router.route("/register").post(
	upload.fields([
		{
			name: "avatar",
			maxCount: 1,
		},
		{
			name: "coverImage",
			maxCount: 1,
		},
	]),
	registerUser,
);
router.route("/login").post(loginUser);

//SECURED ROUTES
router.route("/self").get(verifyJWT, getSelf);
router.route("/logout").get(verifyJWT, logoutUser);
router.route("/change-passowrd").post(verifyJWT, changePassowrd);
router.route("/refresh-access-token").post(refreshAccessToken);
router.route("/update-user").post(verifyJWT, updateUserDetails);
router.route("/update-user-avatar").post(verifyJWT, upload.single("avatar"), updateUserAvatar);
router.route("/profile/:userName").get(verifyJWT, getUserChannelProfile);
export default router;
