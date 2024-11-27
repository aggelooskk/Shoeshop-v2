import express from "express";
import {
  getProductById,
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/adminMiddleware.js";

const router = express.Router();

// Public Route - Get all products
router.get("/", getAllProducts);

// Public Route - Get product by ID
router.get("/:id", getProductById);

// Admin Routes - Create, Update, and Delete products
router.post("/", protect, admin, createProduct);

router
  .route("/:id")
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;
