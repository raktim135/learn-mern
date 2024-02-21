// import { User } from "../models/user.model.js";
// import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
// import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async(req, _, next)=>{ //user _, if there is no use of it within the code
    // try {
    //     const token = req.cookies?.accessToken || req.header('Authorization')?.replace("Bearer ", "");
    
    //     if(!token){
    //         throw new ApiError(401, "Unauthorize request!");
    //     }
    
    //     const decodedData = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    
    //     const user = await User.findById(decodedData?._id).select("-password -refreshToken");
    
    //     if(!user){
    //         throw new ApiError(401, "Invalid access token!");
    //     }
    
    //     req.user = user;
    //     next();
    // } catch (error) {
    //     throw new ApiError(401, error?.message || "Invalid access token!");
    // }
    next();
});