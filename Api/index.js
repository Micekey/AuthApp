import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Database connected successfully!");
}).catch((err) => {
    console.log(err);
    console.log("Connection failed!")
})
const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,  // Include if you're using credentials (e.g., cookies)
  }));
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running!")
})

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);