import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  deleteUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/adminMiddleware.js";

const router = express.Router();

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

// Admin Routes
router.route("/:id").delete(protect, admin, deleteUser);

export default router;
