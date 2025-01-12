const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");

// Route to create a new patient
router.post("/create", patientController.createPatient);

// Route to fetch all patients
router.get("/getall", patientController.getAllPatients);

module.exports = router;
