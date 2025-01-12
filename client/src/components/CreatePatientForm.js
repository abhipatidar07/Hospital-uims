import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const CreatePatientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    diseases: "",
    allergies: "",
    roomNumber: "",
    bedNumber: "",
    floorNumber: "",
    age: "",
    gender: "",
    contactInfo: "",
    emergencyContact: "",
    otherDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/patients/create", {
        ...formData,
        diseases: formData.diseases.split(","),
        allergies: formData.allergies.split(","),
      });
      toast.success("Patient created successfully!");
      setFormData({
        name: "",
        diseases: "",
        allergies: "",
        roomNumber: "",
        bedNumber: "",
        floorNumber: "",
        age: "",
        gender: "",
        contactInfo: "",
        emergencyContact: "",
        otherDetails: "",
      });
    } catch (error) {
      toast.error("Failed to create patient");
      console.error("Error:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Create New Patient</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Diseases (comma-separated):</label>
          <input
            type="text"
            name="diseases"
            value={formData.diseases}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Allergies (comma-separated):</label>
          <input
            type="text"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Room Number:</label>
          <input
            type="number"
            name="roomNumber"
            value={formData.roomNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Bed Number:</label>
          <input
            type="number"
            name="bedNumber"
            value={formData.bedNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Floor Number:</label>
          <input
            type="number"
            name="floorNumber"
            value={formData.floorNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Contact Info:</label>
          <input
            type="text"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Emergency Contact:</label>
          <input
            type="text"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Other Details:</label>
          <textarea
            name="otherDetails"
            value={formData.otherDetails}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Create Patient
        </button>
      </form>
    </div>
  );
};

export default CreatePatientForm;
