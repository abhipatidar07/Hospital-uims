// components/DeliveryStatusForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeliveryStatusForm = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [selectedDelivery, setSelectedDelivery] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Fetch deliveries for status update
    const fetchDeliveries = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/deliveries');
        setDeliveries(response.data);
      } catch (error) {
        console.error('Error fetching deliveries:', error);
      }
    };

    fetchDeliveries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:4000/api/deliveries/${selectedDelivery}`, { status });
      console.log('Delivery status updated:', response.data);
      // Optionally show a success message or update state
    } catch (error) {
      console.error('Error updating delivery status:', error);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md mb-6">
      <h2 className="text-xl font-bold mb-4">Update Delivery Status</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Select Delivery:</label>
          <select
            name="selectedDelivery"
            onChange={(e) => setSelectedDelivery(e.target.value)}
            value={selectedDelivery}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select Delivery</option>
            {deliveries.map((delivery) => (
              <option key={delivery._id} value={delivery._id}>
                Room {delivery.patientId}: {delivery.mealType} Meal
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Status:</label>
          <select
            name="status"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Update Status
        </button>
      </form>
    </div>
  );
};

export default DeliveryStatusForm;
