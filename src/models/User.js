import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    default: "user", 
    enum: ["user", "organizer", "admin"] 
  }
});

export const UserModel = mongoose.model("User", userSchema);