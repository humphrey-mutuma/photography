import { Schema, model } from "mongoose";

// create a gallery schema
const gallerySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    photos: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Gallery", gallerySchema);
