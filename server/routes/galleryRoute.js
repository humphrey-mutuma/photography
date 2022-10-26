import { Router } from "express";
const router = Router();
import {
  getGalleries,
  createGallery,
  deleteGallery,
} from "../controllers/galleryController.js";

// create crud routes for gallery
router.route("/").post(createGallery).get(getGalleries);
router.route("/:id").delete(deleteGallery);

export default router;
