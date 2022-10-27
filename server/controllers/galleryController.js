import asyncHandler from "express-async-handler";
import Gallery from "../models/galleryModel.js";
import User from "../models/userModel.js";

// @desc get gallery
// @route GET /api/gallery
// @access Private
const gallery = asyncHandler(async (req, res) => {
  const userGallery = await Gallery.find({ owner: req.user.id });
  res.status(200).json(userGallery);
});

// @desc create gallery
// @route POST /api/gallery
// @access private
const createGallery = asyncHandler(async (req, res) => {
  const { description, photos } = req.body;
  if (!description) {
    res.status(400);
    throw new Error("Please add a user, description and photos");
  }

  const createGallery = await Gallery.create({
    owner: req.user.id,
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
  // fetch the gallery to be deleted
  const gallery = await Gallery.findById(req.params.id);
  if (!gallery) {
    res.status(400);
    throw new Error("Gallery Not Found");
  }
 
  // verify owner (this is the signed in user)
  const owner = await User.findById(req.user.id); //get user.id from protect middleware
  if (!owner) {
    res.status(400);
    throw new Error("User not found");
  }
   // check to confirm the signed in user is the owner
  if (gallery.owner.toString() !== owner.id.toString()) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await Gallery.deleteOne({ _id: gallery._id });
  await User.findOneAndUpdate({ _id: req.user.id }, { gallery: null });
  res.status(200).json({ msg: "Gallery deleted" });
});

export { gallery, createGallery, deleteGallery };
