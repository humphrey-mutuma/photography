import { Router } from "express";
const router = Router();
import { createUser, getUser, getUsers } from "../controllers/user.contoller.js";

// create crud routes
router.route("/").post(createUser).get(getUsers);
router.route("/:id").get(getUser);

export default router;
