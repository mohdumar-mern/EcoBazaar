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


// export const adminOnly = (req, res, next) => {
//   if (req.user && req.user.role === "admin") {
//     return next();
//   }
//   return res.status(403).json({ message: "Admin access only" });
// };
