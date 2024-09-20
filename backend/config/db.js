import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://aviationuser:aviationuser123@cluster0.kroov.mongodb.net/aviation?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Successfully connected to mongoDb :)");
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
