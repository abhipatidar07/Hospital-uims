const mongoose = require('mongoose');

const DeliverySchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  deliveryPersonnel: { 
    name: { type: String, required: true },
    contactInfo: { type: String, required: true },
  },
  mealType: { type: String, enum: ['Morning', 'Evening', 'Night'], required: true },
  status: { type: String, enum: ['Pending', 'In Progress', 'Delivered'], default: 'Pending' },
  deliveryTimestamp: { type: Date },
  notes: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Delivery', DeliverySchema);
