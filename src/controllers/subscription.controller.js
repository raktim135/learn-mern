import {Subscription} from "../models/subscription.model.js";
import {User} from "../models/user.model.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";

const subscribeChannel = asyncHandler(async (req, res) => {
	try {
		const {subscribingChannel} = req.body;
		if ([subscribingChannel].some((user) => user == null) || [subscribingChannel].some((user) => user === "")) {
			throw new ApiError(409, "Please pass subscribing channel details.");
		}

		const esistingsubscribingChannel = await User.findById(subscribingChannel);
		if (!esistingsubscribingChannel) {
			throw new ApiError(400, "Subscribing channel not found.");
		}

		// const isAlreadySubscribed = await User.findOne({subscriber: req.body._id, channel: subscribingChannel});
		// return res.status(200).json(isAlreadySubscribed);

		// const isAlreadySubscribed = await User.findOne({
		// 	subscriber: req.user?._id,
		// 	channel: subscribingChannel,
		// });

		const isAlreadySubscribed = await Subscription.findOne({subscriber: req.user?._id, channel: subscribingChannel});

		if (isAlreadySubscribed) {
			throw new ApiError(400, "You have already subscribed to this channel.");
		}

		const subscription = await Subscription.create({
			subscriber: req.user?._id,
			channel: subscribingChannel,
		});

		const checkSubscription = await Subscription.findById(subscription._id);

		if (!checkSubscription) {
			throw new ApiError(400, "Some exception occured during subscription 1.");
		}

		return res.status(200).json(new ApiResponse(200, checkSubscription, "Subscribed successfully."));
	} catch (error) {
		throw new ApiError(500, error?.message || "Some exception occured during subscription 2.");
	}
});

export {subscribeChannel};
