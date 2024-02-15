import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { User } from "../models/user.model.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";

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

    // console.log(createdUser)

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

// const logout =

const loginUser = asyncHandler(async (req, res) => {
    const {userName, email, password} = req.body;

    // console.log(userName)
    // console.log(email)

    if(!userName && !email){
        throw new ApiError(400, "Username or email is required.");
    }

    const user = await User.findOne({
        $or: [{email}, {userName}]
    });

    if(!user){
        throw new ApiError(400, "User not found.");
    }

    // console.log('user1', user)

    const isValidPassword = await user.isPasswordCorrect(password);

    if(!isValidPassword){
        throw new ApiError(401, "Invalid user cradentials.");
    }

    const {refreshToken, accessToken} = await generateRefreshAndAccessToken(user._id);

    const logedInUser = await User.findById(user._id).select("-password -refreshToken");

    const options = {
        httpOnly: true,
        secure: true
    };

    return res.status(200)
                .cookie("accessToken", accessToken, options)
                .cookie("refreshToken", refreshToken, options)
                .json(
                    new ApiResponse(
                        200,
                        {
                            user: logedInUser, accessToken, refreshToken
                        },
                        "User logedin successfully."
                    )
                );

    //send in cookies

});

const logoutUser = asyncHandler(async (req, res) => {
    const user =await  User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true //will return the updated row after operation
        }
    );

    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
                .clearCookie("accessToken")
                .clearCookie("refreshToken")
                .json(new ApiResponse(200, {}, "User loged out successfully."));
});

const refreshAccessToken = asyncHandler(async(req,res)=>{
    try {
        //get use from req
        const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;
    
        if(!incomingRefreshToken){
            throw new ApiError(401, "Unauthorize request!");
        }
    
        const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
    
        const user = await User.findById(decodedToken?._id);
    
        if(!user){
            throw new ApiError(4, "Invalid access token!");
        }
    
        if(incomingRefreshToken !== user.refreshToken){
            throw new ApiError(4, "Refresh token is expired or invalid!");
        }
    
        const {newRefreshToken, newAccessToken} = await generateRefreshAndAccessToken(user._id);
    
        const options = {
            httpOnly: true,
            secure: true
        };
    
        return res.status(200)
                    .cookie("accessToken", newAccessToken, options)
                    .cookie("refreshToken", newRefreshToken, options)
                    .json(
                        new ApiResponse(
                            200,
                            {
                                accessToken: newAccessToken,
                                refreshToken: newRefreshToken
                            },
                            "Access token refreshed successfully."
                        )
                    );
    } catch (error) {
        new ApiResponse(
            500, error?.message | "Invalid refresh token!"
        )
    }
});

const generateRefreshAndAccessToken = async (userId) => {
    try {
        const user = await User.findById(userId);

        const refreshToken = await user.generateRefreshToken();
        const accessToken = await user.generateAccessToken();

        user.refreshToken = refreshToken;
        user.save({validateBeforeSave: false});

        return {refreshToken, accessToken}
    }
    catch(err){
        console.log(err)
        throw new ApiError(400, "Error in generating access token ot refresh token.");
    }
}

export { registerUser, loginUser, logoutUser, refreshAccessToken }