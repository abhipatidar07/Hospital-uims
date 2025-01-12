// components/DeliveryList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DeliveryList = () => {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    // Fetch deliveries from the backend API
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

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Assigned Deliveries</h2>
      <ul className="list-disc pl-6">
        {deliveries.length > 0 ? (
          deliveries.map((delivery) => (
            <li key={delivery._id} className="text-black mb-3">
              Room {delivery.patientId}: {delivery.mealType} Meal
              <span className="ml-4 text-blue-600 cursor-pointer hover:underline">Details</span>
              <p className={`ml-4 ${delivery.status === 'Delivered' ? 'text-green-600' : 'text-yellow-600'}`}>
                Status: {delivery.status}
              </p>
            </li>
          ))
        ) : (
          <p>No deliveries available.</p>
        )}
      </ul>
    </div>
  );
};

export default DeliveryList;
