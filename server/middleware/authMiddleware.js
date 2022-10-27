import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];
      // verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // get user from the token (we passed the user id) and remove hashed password from the returned value
      req.user = await User.findById(decoded.id).select("-password");

      // call next piece of middleware
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("No token");
  }
});

export default protect;
