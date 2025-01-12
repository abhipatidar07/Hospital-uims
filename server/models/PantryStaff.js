const mongoose = require('mongoose');

const PantryStaffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInfo: { type: String, required: true },
  location: { type: String, required: true },
  assignedTasks: { 
    type: [mongoose.Schema.Types.ObjectId], 
    ref: 'DietChart', 
    default: [] 
  },
}, { timestamps: true });

module.exports = mongoose.model('PantryStaff', PantryStaffSchema);
