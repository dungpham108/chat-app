import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { MONGO_URI } = process.env;
    if (!MONGO_URI) throw new Error("MONGO_URI is not set");

    const conn = await mongoose.connect(MONGO_URI);
    console.log("MONGOOSE CONNECTED:", conn.connection.host);
  } catch (error) {
    console.log("Error connection to MONGODB:", error);
    process.exit(1);
  }
};
