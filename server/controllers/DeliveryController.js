// controllers/deliveryController.js
const Delivery = require('../models/Delivery');

// POST - Create a new delivery entry
exports.createDelivery = async (req, res) => {
    try {
    //   const { patientId, mealType, deliveryPersonnel, notes } = req.body;
      
    //   // Check if deliveryPersonnel has name and contactInfo
    //   if (!deliveryPersonnel || !deliveryPersonnel.name || !deliveryPersonnel.contactInfo) {
    //     return res.status(400).json({ message: 'Delivery personnel name and contact info are required.' });
    //   }
      
    //   const newDelivery = new Delivery({
    //     patientId,
    //     mealType,
    //     deliveryPersonnel,
    //     notes,
    //     status: 'Pending',  // Set the initial status as Pending
    //   });
    const { patientId, mealType, deliveryPersonnel, notes } = req.body;

    // Convert patientId to ObjectId
    let patientObjectId;
    try {
      patientObjectId = mongoose.Types.ObjectId(patientId);
    } catch (error) {
      return res.status(400).json({ message: 'Invalid patient ID format.' });
    }
    
    const newDelivery = new Delivery({
      patientId: patientObjectId,  // Ensure it's an ObjectId
      mealType,
      deliveryPersonnel,
      notes,
      status: 'Pending',
    });
    
      const savedDelivery = await newDelivery.save();
      res.status(201).json(savedDelivery);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  


// GET all deliveries
exports.getDeliveries = async (req, res) => {
    try {
      const deliveries = await Delivery.find().populate('patientId').exec();
      res.status(200).json(deliveries);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // PUT - Mark delivery as completed
  exports.markDeliveryCompleted = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedDelivery = await Delivery.findByIdAndUpdate(
        id,
        { status: 'Delivered', deliveryTimestamp: new Date() },
        { new: true }
      );
      
      if (!updatedDelivery) {
        return res.status(404).json({ message: 'Delivery not found' });
      }
      
      res.status(200).json(updatedDelivery);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };