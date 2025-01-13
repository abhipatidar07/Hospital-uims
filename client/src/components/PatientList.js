import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch patient data from the API
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("https://heliverse-back1.onrender.com/api/patients/getall");
        setPatients(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch patients");
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Patient List</h2>
      {loading ? (
        <p>Loading patients...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : patients.length === 0 ? (
        <p>No patients found.</p>
      ) : (
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Age</th>
              <th className="border border-gray-300 px-4 py-2">Gender</th>
              <th className="border border-gray-300 px-4 py-2">Room</th>
              <th className="border border-gray-300 px-4 py-2">Floor</th>
              <th className="border border-gray-300 px-4 py-2">Contact</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient._id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{patient.name}</td>
                <td className="border border-gray-300 px-4 py-2">{patient.age}</td>
                <td className="border border-gray-300 px-4 py-2">{patient.gender}</td>
                <td className="border border-gray-300 px-4 py-2">{patient.roomNumber}</td>
                <td className="border border-gray-300 px-4 py-2">{patient.floorNumber}</td>
                <td className="border border-gray-300 px-4 py-2">{patient.contactInfo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PatientList;
