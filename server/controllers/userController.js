import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// get users
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

// get a user
const getUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  if (!user) {
    res.status(400);
    throw new Error("User Not Found");
  }
  res.status(200).json(user);
});

// create user
const createUser = asyncHandler(async (req, res) => {
  const { name, email, password, bio } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add a name, email and password");
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

// delete
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
