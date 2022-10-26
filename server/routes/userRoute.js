import { Router } from "express";
const router = Router();
import {
  registerUser,
  loginUser,
  getUser,
  deleteUser,
} from "../controllers/userController.js";

// create crud routes
router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/:id").get(getUser).delete(deleteUser);

export default router;
