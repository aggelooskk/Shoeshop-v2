import express from "express";
import User from "../models/userModel.js";
import { registerUser, loginUser } from "../controllers/userController.js"

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
