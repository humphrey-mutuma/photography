import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc get users
// @route GET /api/users
// @access public
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

// @desc get a user
// @route GET /api/users:id
// @access private
const getUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  if (!user) {
    res.status(400);
    throw new Error("User Not Found");
  }
  res.status(200).json(user);
});

// @desc  create a user
// @route POST /api/users:id
// @access private
const createUser = asyncHandler(async (req, res) => {
  const { name, email, password, bio } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add name, email and password");
  }
  // create a user
  const createUser = await User.create({
    name,
    email,
    password,
    bio,
  });
  if (createUser) {
    res.status(201).json(createUser);
  }
});

// @desc  delete a user
// @route DELETE /api/users:id
// @access private
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.deleteOne({ _id: id });
  if (!user) {
    res.status(400);
    throw new Error("User Not Found");
  }
  res.status(200).json({
    success: true,
  });
});

export { getUsers, getUser, createUser, deleteUser };
