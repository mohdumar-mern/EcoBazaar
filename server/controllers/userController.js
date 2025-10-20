import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import HandleError from "../utils/handleError.js";


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
    const user = await User.create({
        name,
        email,
        password,
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