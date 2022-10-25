import { Schema, model } from "mongoose";

// create a user schema

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema)