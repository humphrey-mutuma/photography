import { Router } from "express";
const router = Router();
import {
  registerUser,
  loginUser,
  getUser,
  getUsers,
  deleteUser,
} from "../controllers/userController.js";

// create crud routes
router.route("/").post(registerUser).get(getUsers);
router.route("/login").post(loginUser);
router.route("/:id").get(getUser).delete(deleteUser);

export default router;
