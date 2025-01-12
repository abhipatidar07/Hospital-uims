const Patient = require("../models/Patient");

// Create a new patient
exports.createPatient = async (req, res) => {
  try {
    const {
      name,
      diseases,
      allergies,
      roomNumber,
      bedNumber,
      floorNumber,
      age,
      gender,
      contactInfo,
      emergencyContact,
      otherDetails,
    } = req.body;

    const newPatient = new Patient({
      name,
      diseases,
      allergies,
      roomNumber,
      bedNumber,
      floorNumber,
      age,
      gender,
      contactInfo,
      emergencyContact,
      otherDetails,
    });

    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch all patients
// Route: GET /api/patients
exports.getAllPatients = async (req, res) => {
    console.log("Fetching all patients...");
    try {
      const patients = await Patient.find();
      res.status(200).json(patients);
    } catch (error) {
      console.error("Error fetching patients:", error);
      res.status(500).json({ message: error.message });
    }
  };
  
  
