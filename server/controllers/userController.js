import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import HandleError from "../utils/handleError.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { generateToken } from "../utils/generateToken.js";
import sendEmail from "../utils/sendEmail.js";

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

  // 1️⃣ Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    return next(new HandleError("User not found with this email", 404));
  }

  // 2️⃣ Generate reset token
  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  // 3️⃣ Create password reset URL
  const resetUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

  // 4️⃣ Create email message
  const message = `
You are receiving this email because you (or someone else) requested a password reset.
Please click the link below or copy-paste it in your browser to reset your password:

${resetUrl}

If you didn't request this, please ignore this email.
`;

  try {
    // 5️⃣ Send email
    await sendEmail(
      "Password Recovery 🔑",
      message,
      user.email
    );

    res.status(200).json({
      success: true,
      message: `Email sent to: ${user.email}`,
    });
  } catch (error) {
    // 6️⃣ Rollback token if email fails
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });

    console.error("❌ Forgot password email failed:", error.message);
    return next(new HandleError("Email could not be sent", 500));
  }
});


// ========================================
// @desc    Reset Password
// @route   PUT /api/v1/password/reset/:token
// ========================================
export const resetPassword = asyncHandler(async (req, res, next) => {
  const { token } = req.params;
  const { password, confirmPassword } = req.body;
  // Check if passwords match
  if (password !== confirmPassword) {
    return next(new HandleError("Passwords do not match", 400));
  }
  // Hash the token to compare with DB
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


// ========================================
// @desc    Get User Details
// @route   GET /api/v1/profile
// ========================================
export const getUserDetails = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user?.id);
  if (!user) {
    return next(new HandleError("User not found", 404));
  }
  res.status(200).json({
    success: true,
    user,
  });
});


// ========================================
// @desc    Update User Password
// @route   PUT /api/v1/password/update
// ========================================
export const updatePassword = asyncHandler(async (req, res, next) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;
  // Check all fields are provided
    if (!oldPassword || !newPassword || !confirmPassword) {
    return next(new HandleError("Please provide all required fields", 400));
  }
  const user = await User.findById(req.user?.id).select("+password");
  // Check if user exists
  if (!user) {
    return next(new HandleError("User not found", 404));
  }
  // Check if old password matches
  const isOldPasswordMatched = await bcrypt.compare(oldPassword, user.password);
  if (!isOldPasswordMatched) {
    return next(new HandleError("Old password is incorrect", 400));
  }
  // Check if new passwords and confirm password match
  if (newPassword !== confirmPassword) {
    return next(new HandleError("Passwords do not match", 400));
  }
  // Update to new password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(newPassword, salt);
  await user.save();
  res.status(200).json({
    success: true,
    message: "Password updated successfully",
  });
});