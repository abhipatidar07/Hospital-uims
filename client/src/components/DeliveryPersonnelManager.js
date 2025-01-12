import React from 'react';
import CreateDeliveryForm from './CreateDeliveryForm';

const DeliveryPersonnelManager = () => {
  return (
    <div>
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Manage Delivery Personnel</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Contact</th>
            <th className="border border-gray-300 px-4 py-2">Assigned Tasks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">John Doe</td>
            <td className="border border-gray-300 px-4 py-2">123-456-7890</td>
            <td className="border border-gray-300 px-4 py-2">Room 101, Room 102</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default DeliveryPersonnelManager;
