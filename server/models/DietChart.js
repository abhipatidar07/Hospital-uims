const mongoose = require('mongoose');

const DietChartSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  morningMeal: { 
    ingredients: { type: [String], default: [] },
    instructions: { type: String },
  },
  eveningMeal: { 
    ingredients: { type: [String], default: [] },
    instructions: { type: String },
  },
  nightMeal: { 
    ingredients: { type: [String], default: [] },
    instructions: { type: String },
  },
}, { timestamps: true });

module.exports = mongoose.model('DietChart', DietChartSchema);
