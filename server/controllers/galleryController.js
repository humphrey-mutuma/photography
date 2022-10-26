import asyncHandler from "express-async-handler";
import Gallery from "../models/galleryModel.js";

// @desc get gallery
// @route GET /api/galleries
// @access Public
const getGalleries = asyncHandler(async (req, res) => {
  const galleries = await Gallery.find();
  res.status(200).json(galleries);
});

// @desc create gallery
// @route POST /api/gallery
// @access private
const createGallery = asyncHandler(async (req, res) => {
  const { owner, description, photos } = req.body;
  if (!owner || !description || !photos) {
    res.status(400);
    throw new Error("Please add a name, description and photos");
  }

  const createGallery = await Gallery.create({
    owner,
    description,
    photos,
  });
  if (createGallery) {
    res.status(201).json(createGallery);
  }
});

// @desc delete gallery
// @route DELETE /api/gallery/:id
// @access private

const deleteGallery = asyncHandler(async (req, res) => {
  const gallery = await Gallery.findById(req.params.id);
  if (!gallery) {
    res.status(400);
    throw new Error("Gallery not found");
  }
  const owner = await User.findById(req.owner.id);
  if (!owner) {
    res.status(400);
    throw new Error("Owner not found");
  }

  // check to confirm the signed in user is the owner

  if (gallery.owner.toString() !== owner.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await gallery.deleteOne({ _id: req.params.id });
});

export { getGalleries, createGallery, deleteGallery };
