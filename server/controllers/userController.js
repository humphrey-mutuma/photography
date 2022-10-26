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
  res.status(200).json(user);
});

// create user
const createUser = asyncHandler(async (req, res) => {
  const name = req.body.name;
  if (!name) {
    res.status(400);
    throw new Error("Please add a name");
  }

  const createUser = await User.create({
    name: name,
  });
  if (createUser) {
    res.status(201).json(createUser);
  }
});

export { getUsers, getUser, createUser };
