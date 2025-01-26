import express from "express";
import {
  registerUser,
  getAllUsers,
  getUserByCnic,
  getUserByToken,
  updateUserDetails,
} from "../controllers/receptionistController.js";

const router = express.Router();

// Routes
router.post("/register", registerUser); // Register user
router.get("/", getAllUsers); // Get all users
router.get("/:cnic", getUserByCnic); // Get user by CNIC
router.get("/user/token/:token", getUserByToken);
router.put("/user/update/", updateUserDetails);

export default router;
