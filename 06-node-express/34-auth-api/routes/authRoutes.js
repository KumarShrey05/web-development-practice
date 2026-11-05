import express from "express";
import { register, login, getProfile } from "../controllers/authController.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const router = express.Router();

// Handles user registration.
router.post("/register", register);

// Handles user login.
router.post("/login", login);

// Protects the profile route using JWT authentication.
router.get("/profile", protectRoute, getProfile);

// Exports authentication routes.
export default router;
