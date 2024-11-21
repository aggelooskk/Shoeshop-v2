import express from "express";
import Product from "../models/productModel.js";
import { getProductById } from "../controllers/productController.js"

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:productId', getProductById);

export default router;
