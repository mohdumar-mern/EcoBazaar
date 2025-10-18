import HandleError from "../utils/handleError.js";

// Middleware 1: Convert known errors (Mongoose, etc.) into custom HandleError
export const errorHandling = (err, req, res, next) => {
  console.error(err.stack);

  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((error) => error.message);
    err = new HandleError(errors.join(", "), 400);
  } else if (err.name === "CastError") {
    err = new HandleError("Resource not found. Invalid ID format", 400);
  } else if (!err.statusCode) {
    // If error has no statusCode, treat it as internal error
    err = new HandleError("Internal Server Error", 500);
  }

  next(err); // pass standardized error to final handler
};

// Middleware 2: Centralized error response handler
export const errorHandler = (err, req, res, next) => {
  console.error("🔥 Error Handler Caught:", err);

  // Custom operational errors (created by HandleError)
  if (err instanceof HandleError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // Fallback for any unexpected errors
  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};
