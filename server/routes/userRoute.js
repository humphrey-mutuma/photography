import { Router } from "express";
const router = Router();
import {
  createUser,
  getUser,
  getUsers,
  deleteUser,
} from "../controllers/userController.js";

// create crud routes
router.route("/").post(createUser).get(getUsers);
router.route("/:id").get(getUser).delete(deleteUser);

export default router;
