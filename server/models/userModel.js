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
    description: {
      type: String,
      required: [true, "Please add  bio"],
    },
    socialMedia: {
      type: Array,
      // required: [true, "Please add  bio"],
    },
    gallery: {
      type: Schema.Types.ObjectId,
      ref: "Gallery",
    },
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
