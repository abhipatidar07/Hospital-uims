import React from 'react';

const PreparationTracker = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Preparation Tracker</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Meal</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Morning Meal</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600">Completed</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Evening Meal</td>
            <td className="border border-gray-300 px-4 py-2 text-yellow-600">In Progress</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PreparationTracker;
