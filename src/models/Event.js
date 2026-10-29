import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    date: {
      type: Date,
      required: true
    },
    location: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      default: "general"
    },
    capacity: {
      type: Number,
      default: 100
    }
  },
  {
    timestamps: true
  }
);

const EventModel = mongoose.model("Event", eventSchema);

export default EventModel;