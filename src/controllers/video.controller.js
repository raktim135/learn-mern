import mongoose from "mongoose";
import { Video } from "../models/video.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const storeVideo = asyncHandler(async(req, res)=>{
    try {
        const { ownerId, title, description, views, isPublished } = req.body;
        // console.log(req.body)
        // if ([ownerId, title, description, views, isPublished].some((video) => video?.trim() === "")) {
        //     throw new ApiError(409, "Please pass subscribing channel details.");
        // }

        if ([ownerId, title, description].some((video) => (video === null || video?.trim() === "") )){
            throw new ApiError(409, "Please pass subscribing channel details.");
        }

        if ([views, isPublished].some((video) => !video || video === null) ){
            throw new ApiError(409, "Please pass subscribing channel details. 1");
        }
        
        const video = await Video.create({
            ownerId, title, description, views, isPublished
        });
    
        if(!(video && video._id)){
            throw new ApiError(400, "Unable to uploaded the video.");
        }
    
        return res.status(200)
                .json(new ApiResponse(200, video, "Video has been uploaded successfully."));
    } catch (error) {
        throw new ApiError(error.statusCode || 500, error?.message || "Some exception occured during video upload.");
    }
});

const getAllVideos = asyncHandler(async (req,res) => {
    const videos = await Video.aggregate([
        // {
        //     $match: {
        //         _id: new mongoose.Types.ObjectId(req.user._id)
        //     }
        // },
        {
            $lookup: {
                from: "users", //table name
                localField: "ownerId",
                foreignField: "_id",
                as: "ownerDetails",
                pipeline: [
                    {
                        $project: {
                            userName: 1,
                            email: 1,
                            fullName: 1,
                            avatar: 1
                        }
                    }
                ]
                
            }
        },
        {
            $project: {
                _id: 1,
                title: 1,
                description: 1,
                views: 1,
                ispublished: 1,
                ownerDetails: 1
            }
        },
        {
            $addFields : {
                ownerDetails: {
                    $first: "$ownerDetails" // replacing ownerDetails with the fisrt object of ownerDetails array, simply converting to object for easy fronend integration
                }
            }
        }
    ]);

    return res.status(200).json(new ApiResponse(200, videos, "All videos fetched successfully."));
});

export { storeVideo, getAllVideos }