import { Router } from "express";
const router = Router();
import {
  getGallery,
  createGallery,
  updateGallery,
  deleteGallery,
} from "../controllers/galleryController.js";
import protect from "../middleware/authMiddleware.js";

// create crud routes for gallery
router.route("/").post(protect, createGallery).get(protect, getGallery);
router
  .route("/:id")
  .patch(protect, updateGallery)
  .delete(protect, deleteGallery);

export default router;
