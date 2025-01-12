// pages/DeliveryPortal.js
import React from 'react';
import CreateDeliveryForm from '../components/CreateDeliveryForm';
import DeliveryList from '../components/DeliveryList';
import DeliveryStatusForm from '../components/DeliveryStatusForm';

const DeliveryPortal = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Delivery Personnel Portal</h1>
      <CreateDeliveryForm />
      <DeliveryList />
      <DeliveryStatusForm />
    </div>
  );
};

export default DeliveryPortal;
