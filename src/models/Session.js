import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    speaker: {
      type: String,
      required: true,
      trim: true
    },
    startTime: {
      type: Date,
      required: true
    },
    endTime: {
      type: Date,
      required: true
    },
    room: {
      type: String,
      default: "Sala principal"
    }
  },
  {
    timestamps: true
  }
);

const SessionModel = mongoose.model("Session", sessionSchema);

export default SessionModel;