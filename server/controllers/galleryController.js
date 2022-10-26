import asyncHandler from "express-async-handler";
import Gallery from "../models/galleryModel.js";
import User from "../models/userModel.js";

// @desc get galleries
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
  if (!owner || !description) {
    res.status(400);
    throw new Error("Please add a user, description and photos");
  }

  const createGallery = await Gallery.create({
    owner,
    description,
    photos,
  });
  if (createGallery) {
    // res.status(201).json(createGallery);
    // update users gallery with the newly created gallery id
    const updateUser = await User.updateOne(
      { _id: createGallery.owner },
      { gallery: createGallery.id }
    );
    if (updateUser) {
      res.status(201).json({
        success: true,
        createdGallery: createGallery,
        updatedUser: updateUser,
      });
    } else {
      res.status(400);
      throw new Error("Gallery Not created or user gallery not updated");
    }
  }
});

// @desc delete gallery
// @route DELETE /api/gallery/:id
// @access private
const deleteGallery = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { galleryOwner, userId } = req.body;

  if (!userId || !galleryOwner) {
    res.status(400);
    throw new Error("Invalid infomation");
  }
  // verify owner
  // const owner = await User.findById(galleryOwner);
  // if (!owner) {
  //   res.status(400);
  //   throw new Error("User not found");
  // }

  // check to confirm the signed in user is the owner
  // pass sined in user id and gallery owner id
  if (userId !== galleryOwner) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await Gallery.deleteOne({ _id: id });
  res.status(200).json({ msg: "Gallery deleted" });
});

export { getGalleries, createGallery, deleteGallery };
