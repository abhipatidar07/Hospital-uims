const express = require('express');
const router = express.Router();
const deliveryController = require('../controllers/DeliveryController');

router.post('/deliveries', deliveryController.createDelivery);

// List deliveries
router.get('/deliveries', deliveryController.getDeliveries);

// Mark a delivery as completed
router.put('/deliveries/:id', deliveryController.markDeliveryCompleted);

module.exports = router;
