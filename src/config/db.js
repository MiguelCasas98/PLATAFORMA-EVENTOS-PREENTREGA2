console.log("MONGO_URL desde db.js:", MONGO_URL);

import mongoose from "mongoose";
import { MONGO_URL } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Error al conectar MongoDB:", error);
    process.exit(1);
  }
};