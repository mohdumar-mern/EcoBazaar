import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

// Load environment variables early
dotenv.config();

const PORT = process.env.PORT || 3000;

// Start server after successful DB connection
const startServer = async () => {
  try {
    // Connect to database
    await connectDB();

    // Start Express server
    const server = app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

    // Handle unhandled promise rejections globally
    process.on("unhandledRejection", (err) => {
      console.error(`Unhandled Rejection: ${err.message}`);
      console.error(err.stack);
      server.close(() => process.exit(1));
    });

    // Handle uncaught exceptions (runtime errors not caught anywhere)
    process.on("uncaughtException", (err) => {
      console.error(`Uncaught Exception: ${err.message}`);
      console.error(err.stack);
      server.close(() => process.exit(1));
    });

  } catch (err) {
    console.error("Failed to connect to database:", err.message);
    process.exit(1);
  }
};

startServer();
