import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { User } from "../models/user.model.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";

// const registerUser = asyncHandler(async (req, res)=>{
const registerUser = asyncHandler(async (req, res) => {


    // throw new ApiError(400, "All fields are required.");
    // res.status(400).json({
    //     message: "ok"
    // });

    // console.log(req.body)

    const {fullName, email, userName, password} = req.body;

    if([fullName, email, userName, password].some((field)=>field?.trim() === ""  )){
        throw new ApiError(400, "All fields are required.", []);
    }

    const existingUser = await User.findOne({
        $or: [{userName}, {email}]
    });

    if(existingUser){
        throw new ApiError(409, "User with email or username already exist.", []);
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar file is required.");
    }

    const avatar = await uploadToCloudinary(avatarLocalPath);
    let coverImage = null;
    if(coverImageLocalPath){
        coverImage = await uploadToCloudinary(coverImageLocalPath);
    }

    if(!avatar){
        throw new ApiError(400, "Avatar file is required.");
    }

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage ? coverImage.url : null,
        email,
        password,
        userName: userName.toLowerCase()
    });

    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    console.log(createdUser)

    if(!createdUser){
        throw new ApiError(500, "Something went wrong during user registration.");
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully.")
    );

    // res.status(200).json({
    //     message: "ok",
    //     user: createdUser
    // });

});

export { registerUser }