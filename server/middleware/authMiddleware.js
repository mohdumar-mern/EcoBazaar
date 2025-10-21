import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

import User from "../models/userModel.js";
import HandleError from "../utils/handleError.js";
export const protect = asyncHandler(async (req, res, next) => {
  try {
    const {token} = req.cookies ;
    // Check if token exists
    if (!token) {
      return next(new HandleError("Token not found", 401));
    }
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded?.userId) {
      return next(new HandleError("Invalid token", 401));
    }
    // Find user by ID
    const user = await User.findById(decoded.userId);
    // check if user exists
    if (!user) {
      return next(new HandleError("User not found", 401));
    }
    // Attach Admin to request
    req.user = user; 
    next()
  } catch (error) {
    console.error("Token verification error:", error);
    return next(new HandleError("Not authorized, token failed", 401));
  }
});


// Roele-based access control middleware
export const roleBasedAccess = (...role) => {
  return (req, res, next) => {
    if (!role.includes(req.user.role)) {
      return next(new HandleError(`Role (${req.user.role}) is not allowed to access this resource`, 403));
    }
    next();
  }
};