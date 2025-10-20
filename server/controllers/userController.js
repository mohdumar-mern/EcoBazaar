import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import HandleError from "../utils/handleError.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";


// @desc Register a User
// @route POST /api/v1/register
export const registerUser = asyncHandler(async (req, res, next) => {
    const { name, email, password, avatar } = req.body;
    // Check if all fields are present
    if (!name || !email || !password) {
        return next(new HandleError("Page number exceeds total pages", 404));
    }
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        return next(new HandleError("User already exists", 400));
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
        name,
        email,
        password : hashedPassword,
        avatar:{
            public_id: "avatar.public_id,",
            url: "avatar.url"
        }
    });
    res.status(201).json({
        success: true,
        user
    });
});


// @desc Login User
// @route POST /api/v1/login
export const loginUser = asyncHandler(async (req, res, next) => {  
    const { email, password } = req.body;
    // Check if all fields are present
    if (!email || !password) {
        return next(new HandleError("Please provide email and password", 400));
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new HandleError("Invalid email or password", 401));
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
        return next(new HandleError("Invalid email or password", 401));
    }
    res.status(200).json({
        success: true,
        token: generateToken(user._id)
    });
});