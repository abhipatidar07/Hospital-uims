import React from 'react';
import TaskList from '../components/TaskList';
import DeliveryPersonnelManager from '../components/DeliveryPersonnelManager';
import PreparationTracker from '../components/PreparationTracker';

const InnerPantryDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Inner Pantry Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <TaskList />
        <DeliveryPersonnelManager />
        <PreparationTracker />
      </div>
    </div>
  );
};

export default InnerPantryDashboard;
