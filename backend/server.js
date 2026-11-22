
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import leadRoutes from "./routes/leadRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());

app.use(express.json());

app.use("/api/leads", leadRoutes);

// Test route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Lead Manager API is running!",
  });
});

// Start server after database connection
const startServer = async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
