const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    diseases: { type: [String], default: [] },
    allergies: { type: [String], default: [] },
    roomNumber: { type: Number, required: true },
    bedNumber: { type: Number, required: true },
    floorNumber: { type: Number, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    contactInfo: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    otherDetails: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", PatientSchema);
