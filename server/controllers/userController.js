import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// @desc  register a user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, bio } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add name, email and password");
  }
  // check if user is already registred
  const userExists = await User.findOne({ email: email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists, Login");
  }

  // hash user passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create a user
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    bio,
  });
  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      bio: newUser.bio,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }
});

// @desc login a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add email and password");
  }
  const user = await User.findOne({ email: email }); //find user by email
  if (!user) {
    res.status(400);
    throw new Error("User Not Found");
  }
  res.status(200).json(user);
});

// @desc get a user data
// @route GET /api/users/:id
// @access Public
const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id); //find user by email
  if (!user) {
    res.status(400);
    throw new Error("User Not Found");
  }
  res.status(200).json(user);
});

// @desc  delete a user
// @route DELETE  /api/users:id
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

export { registerUser, loginUser, getUser, deleteUser };
