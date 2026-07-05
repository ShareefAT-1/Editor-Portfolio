import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    videoUrl: {
      type: String,
      required: true,
      trim: true,
    },

    previewStart: {
      type: Number,
      required: true,
      default: 0,
    },

    previewEnd: {
      type: Number,
      required: true,
      default: 20,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;