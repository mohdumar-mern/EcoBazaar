class HandleError extends Error {
  constructor(message, statusCode = 500) {
    // Call parent (Error) constructor with the error message
    super(message);

    // Assign a custom status code (e.g., 400, 404, 500)
    this.statusCode = statusCode;

    // Optional: Give the error a name for clarity
    this.name = this.constructor.name;

    // Capture the stack trace for debugging
    Error.captureStackTrace(this, this.constructor);
  }
}

export default HandleError;
