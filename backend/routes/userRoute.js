import { Router } from "express";
const router = Router();
import {
  registerUser,
  loginUser,
  updateUser,
  getUser,
  getLoggedInUser,
  getUsers,
  deleteUser,
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

// create crud routes
router.route("/").post(registerUser).get(getUsers).patch(protect, updateUser);
router.route("/login").post(loginUser);
router.route("/user").get(protect, getLoggedInUser);
router.route("/:userId").get(getUser).delete(protect, deleteUser);

export default router;
