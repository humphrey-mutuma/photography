import { Schema, model } from "mongoose";

// create a gallery schema
const gallerySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
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
