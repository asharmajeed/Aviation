import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the schema for repairs
const repairSchema = new Schema({
  componentType: { type: String, required: true }, // e.g., Fuel Pump, Hydraulic Pump
  username: { type: String, required: true },
  repairDate: { type: Date, required: true },
  expireDate: { type: Date, required: true },
});

// Create the model
const Repair = mongoose.model("Repair", repairSchema);

export default Repair;
