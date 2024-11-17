import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
