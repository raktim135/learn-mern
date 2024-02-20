import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {User} from "../models/user.model.js";
import {uploadToCloudinary} from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";

const registerUser = asyncHandler(async (req, res) => {
	try {
		const {fullName, email, userName, password} = req.body;

		if ([fullName, email, userName, password].some((field) => field == null) || [fullName, email, userName, password].some((field) => field?.trim() === "")) {
			throw new ApiError(400, "All fields are required.");
		}

		const existingUser = await User.findOne({
			$or: [{userName}, {email}],
		});

		if (existingUser) {
			throw new ApiError(409, "User with email or username already exist.");
		}

		const avatarLocalPath = req.files?.avatar[0]?.path;
		const coverImageLocalPath = req.files?.coverImage[0]?.path;

		if (!avatarLocalPath) {
			throw new ApiError(400, "Avatar file is required.");
		}

		const avatar = await uploadToCloudinary(avatarLocalPath);
		let coverImage = null;
		if (coverImageLocalPath) {
			coverImage = await uploadToCloudinary(coverImageLocalPath);
		}

		if (!avatar) {
			throw new ApiError(400, "Avatar file is required.");
		}

		const user = await User.create({
			fullName,
			avatar: avatar.url,
			coverImage: coverImage ? coverImage.url : null,
			email,
			password,
			userName: userName.toLowerCase(),
		});

		const createdUser = await User.findById(user._id).select("-password -refreshToken");

		if (!createdUser) {
			throw new ApiError(500, "Something went wrong during user registration.");
		}

		return res.status(201).json(new ApiResponse(200, createdUser, "User registered successfully."));
	} catch (error) {
		throw new ApiError(500, error?.message || "Some exception occured during user registration.");
	}
});

const loginUser = asyncHandler(async (req, res) => {
	const {userName, email, password} = req.body;

	// console.log(userName)
	// console.log(email)

	if (!userName && !email) {
		throw new ApiError(400, "Username or email is required.");
	}

	const user = await User.findOne({
		$or: [{email}, {userName}],
	});

	if (!user) {
		throw new ApiError(400, "User not found.");
	}

	// console.log('user1', user)

	const isValidPassword = await user.isPasswordCorrect(password);

	if (!isValidPassword) {
		throw new ApiError(401, "Invalid user cradentials.");
	}

	const {refreshToken, accessToken} = await generateRefreshAndAccessToken(user._id);

	const logedInUser = await User.findById(user._id).select("-password -refreshToken");

	const options = {
		httpOnly: true,
		secure: true,
	};

	return res
		.status(200)
		.cookie("accessToken", accessToken, options)
		.cookie("refreshToken", refreshToken, options)
		.json(
			new ApiResponse(
				200,
				{
					user: logedInUser,
					accessToken,
					refreshToken,
				},
				"User logedin successfully.",
			),
		);

	//send in cookies
});

const logoutUser = asyncHandler(async (req, res) => {
	const user = await User.findByIdAndUpdate(
		req.user._id,
		{
			// $set: {
			// 	refreshToken: undefined,
			// },
			$unset: {
				refreshToken: 1,
			},
		},
		{
			new: true, //will return the updated row after operation
		},
	);

	const options = {
		httpOnly: true,
		secure: true,
	};

	return res.status(200).clearCookie("accessToken").clearCookie("refreshToken").json(new ApiResponse(200, {}, "User loged out successfully."));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
	try {
		const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;

		if (!incomingRefreshToken) {
			throw new ApiError(401, "Unauthorize request!");
		}

		const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);

		const user = await User.findById(decodedToken?._id);

		if (!user) {
			throw new ApiError(400, "Invalid access token!");
		}

		if (incomingRefreshToken !== user.refreshToken) {
			throw new ApiError(400, "Refresh token is expired or invalid!");
		}

		const {refreshToken, accessToken} = await generateRefreshAndAccessToken(user._id);

		const options = {
			httpOnly: true,
			secure: true,
		};

		return res.status(200).cookie("accessToken", accessToken, options).cookie("refreshToken", refreshToken, options).json(
			new ApiResponse(
				200,
				{
					accessToken,
					refreshToken,
				},
				"Access token refreshed successfully.",
			),
		);
	} catch (error) {
		throw new ApiError(401, error?.message || "Invalid refresh token!");
	}
});

const changePassowrd = asyncHandler(async (req, res) => {
	try {
		const {newPassword, oldPassword} = req.body;

		if (!newPassword || !oldPassword) {
			throw new ApiError(409, "Both new password & old passowr is required.");
		}

		const user = await User.findById(req.user._id);

		if (!(await user.isPasswordCorrect(oldPassword))) {
			throw new ApiError(409, "Please enter the correct old password.");
		}

		user.password = newPassword;

		await user.save({validateBeforeSave: false});

		return res.status(200).json(new ApiResponse(200, {}, "Password has been changed successfully."));
	} catch (error) {
		throw new ApiError(500, error?.message || "Please enter the correct old password.");
	}
});

const getSelf = asyncHandler(async (req, res) => {
	try {
		return res.status(200).json(new ApiResponse(200, {user: req.user}, "User details fetched successfully."));
	} catch (error) {
		throw new ApiError(500, error?.message || "Unable to fetch current user.");
	}
});

const updateUserDetails = asyncHandler(async (req, res) => {
	try {
		const {fullName, email} = req.body;

		if ([fullName, email].some((field) => field == null) || [fullName, email].some((field) => field?.trim() === "")) {
			throw new ApiError(400, "All fields are required.");
		}

		const updatedUser = await User.findByIdAndUpdate(
			req.user._id,
			{
				$set: {
					fullName: fullName,
					email: email,
				},
			},
			{
				new: true, //getting new user after update
			},
		).select("-password");

		if (!updatedUser) {
			throw new ApiError(500, "Something went wrong during user details update.");
		}

		return res.status(201).json(new ApiResponse(200, updatedUser, "User details updated successfully."));
	} catch (error) {
		throw new ApiError(500, error?.message || "Some exception during user details update.");
	}
});

const updateUserAvatar = asyncHandler(async (req, res) => {
	try {
		const avatarLocalPath = req.file?.path;

		if (!avatarLocalPath) {
			throw new ApiError(400, "Avatar file is missing.");
		}

		const avatar = await uploadToCloudinary(avatarLocalPath);

		if (!avatar.url) {
			throw new ApiError(400, "Error while uploading avatar.");
		}

		const updatedUser = await User.findByIdAndUpdate(
			req.user._id,
			{
				$set: {
					avatar: avatar.url,
				},
			},
			{
				new: true,
			},
		);

		if (!updatedUser) {
			throw new ApiError(400, "Error while updating avatar.");
		}

		return res.status(200).json(new ApiResponse(200, updatedUser, "User avatar updated successfully."));
	} catch (error) {
		throw new ApiError(500, error?.message || "Some exception occured during user avatar update.");
	}
});

const generateRefreshAndAccessToken = async (userId) => {
	try {
		const user = await User.findById(userId);

		const refreshToken = await user.generateRefreshToken();
		const accessToken = await user.generateAccessToken();

		user.refreshToken = refreshToken;
		await user.save({validateBeforeSave: false});

		return {refreshToken, accessToken};
	} catch (err) {
		console.log(err);
		throw new ApiError(400, "Error in generating access token ot refresh token.");
	}
};

const getUserChannelProfile = asyncHandler(async (req, res) => {
	const {userName} = req.params;

	if (!userName?.trim()) {
		throw new ApiError(400, "Username is missing.");
	}

	const channel = await User.aggregate([
		{
			$match: {
				userName: userName?.toLowerCase(),
			},
		},
		{
			$lookup: {
				from: "subscriptions",
				localField: "_id",
				foreignField: "channel",
				as: "subscribers",
			},
		},
		{
			$lookup: {
				from: "subscriptions",
				localField: "_id",
				foreignField: "subscriber",
				as: "subscribedChannels",
			},
		},
		{
			$addFields: {
				subscribersCount: {
					$size: "$subscribers",
				},
				subscribedChannelsCount: {
					$size: "$subscribedChannels",
				},
				isSubscribed: {
					$cond: {
						if: {
							$in: [req.user?._id, "$subscribers.subscriber"],
						},
						then: true,
						else: false,
					},
				},
			},
		},
		{
			$project: {
				fullName: 1,
				userName: 1,
				email: 1,
				avatar: 1,
				coverImage: 1,
				// subscribers: 1,
				subscribersCount: 1,
				subscribedChannelsCount: 1,
				isSubscribed: 1,
			},
		},
	]);

	if (!channel?.length) {
		throw new ApiError(404, "Channel does not exist.");
	}

	return res.status(200).json(new ApiResponse(200, channel[0], "Channel details fetched successfully."));
});

export {registerUser, loginUser, logoutUser, refreshAccessToken, changePassowrd, getSelf, updateUserDetails, updateUserAvatar, getUserChannelProfile};
