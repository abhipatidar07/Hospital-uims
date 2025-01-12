import React from 'react';
import PatientList from '../components/PatientList';
import DietChartForm from '../components/DietChartForm';
import DeliveryTracker from '../components/DeliveryTracker';
import AlertsPanel from '../components/AlertsPanel';
import CreatePatientForm from '../components/CreatePatientForm';

const HospitalManagerDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Hospital Manager Dashboard</h1>
      <CreatePatientForm/>
      <div className="grid grid-cols-2 gap-4">
        <PatientList />
        <DietChartForm />
        <DeliveryTracker />
        <AlertsPanel />
      </div>
    </div>
  );
};

export default HospitalManagerDashboard;
