import mongoose from "mongoose";

export const connectDB = async () => {
  mongoose.connect(process.env.VITE_DB).then(() => console.log("DB Coneccted"));
};
