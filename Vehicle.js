import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  type: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  exterior: { type: String, required: true },
  interior: { type: String, required: true },
  description: { type: String, required: true },
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
export default Vehicle;
