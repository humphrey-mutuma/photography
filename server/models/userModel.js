import { Schema, model } from "mongoose";

// create a user schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add  password"],
    },
    bio: {
      type: String,
      // required: [true, "Please add  bio"],
    },
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
