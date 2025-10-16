import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";
dotenv.config();

const PORT = process.env.PORT || 3000;


connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);

      // Start the keep-alive function
    //   keepAlive();
    }); 
    
  })
  .catch((err) => {
    console.error("Failed to connect to database", err.message);
    process.exit(1);
  });
