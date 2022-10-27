import { Router } from "express";
const router = Router();
import {
  registerUser,
  loginUser,
  getUser,
  getUsers,
  deleteUser,
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

// create crud routes
router.route("/").post(registerUser).get(getUsers);
router.route("/login").post(loginUser);
router.route("/:id").get(protect, getUser).delete(deleteUser);

export default router;
