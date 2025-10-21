import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import HandleError from "../utils/handleError.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { generateToken } from "../utils/generateToken.js";

// ========================================
// @desc    Register a new user
// @route   POST /api/v1/register
// ========================================
export const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, avatar, role } = req.body;

  if (!name || !email || !password) {
    return next(new HandleError("Please provide all required fields", 400));
  }

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
    role: role || "user",
    password: hashedPassword,
    avatar: {
      public_id: avatar?.public_id || "default_id",
      url: avatar?.url || "default_avatar_url",
    },
  });

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user,
  });
});

// ========================================
// @desc    Login user
// @route   POST /api/v1/login
// ========================================
export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

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

  const token = generateToken(user._id);
  const cookieExpireDays = Number(process.env.EXPIRED_COOKIES) || 7;

  res.cookie("token", token, {
    expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.status(200).json({
    success: true,
    message: "Login successful",
    token,
  });
});

// ========================================
// @desc    Logout user
// @route   POST /api/v1/logout
// ========================================
export const logoutUser = asyncHandler(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});

// ========================================
// @desc    Forgot Password (Generate Reset Token)
// @route   POST /api/v1/password/forgot
// ========================================
export const forgotPassword = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return next(new HandleError("User not found with this email", 404));
  }

  // Generate reset token
  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  // Create reset URL (send via email later)
  const resetUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

  res.status(200).json({
    success: true,
    message: "Password reset token generated successfully",
    resetUrl,
  });
});

// ========================================
// @desc    Reset Password
// @route   PUT /api/v1/password/reset/:token
// ========================================
export const resetPassword = asyncHandler(async (req, res, next) => {
  const { token } = req.params;
  const { password } = req.body;

  const resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(new HandleError("Reset token is invalid or has expired", 400));
  }

  // Set new password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Password has been reset successfully",
  });
});
