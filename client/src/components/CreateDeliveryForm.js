// // components/CreateDeliveryForm.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const CreateDeliveryForm = () => {
//   const [formData, setFormData] = useState({
//     patientId: '',
//     mealType: '',
//     deliveryPersonnel: '',
//     notes: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://heliverse-back1.onrender.com/api/deliveries', formData);
//       console.log('Delivery created:', response.data);
//       // Optionally show a success message or clear the form
//     } catch (error) {
//       console.error('Error creating delivery:', error);
//     }
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md mb-6">
//       <h2 className="text-xl font-bold mb-4">Create New Delivery</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block mb-2 text-gray-700">Patient ID:</label>
//           <input
//             type="text"
//             name="patientId"
//             onChange={handleChange}
//             value={formData.patientId}
//             className="w-full p-2 border rounded-md"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-gray-700">Meal Type:</label>
//           <select
//             name="mealType"
//             onChange={handleChange}
//             value={formData.mealType}
//             className="w-full p-2 border rounded-md"
//             required
//           >
//             <option value="">Select Meal Type</option>
//             <option value="Morning">Morning</option>
//             <option value="Evening">Evening</option>
//             <option value="Night">Night</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-gray-700">Delivery Personnel:</label>
//           <input
//             type="text"
//             name="deliveryPersonnel"
//             onChange={handleChange}
//             value={formData.deliveryPersonnel}
//             className="w-full p-2 border rounded-md"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-gray-700">Notes:</label>
//           <textarea
//             name="notes"
//             onChange={handleChange}
//             value={formData.notes}
//             className="w-full p-2 border rounded-md"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//         >
//           Create Delivery
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateDeliveryForm;


// components/CreateDeliveryForm.js
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const CreateDeliveryForm = () => {
  const [formData, setFormData] = useState({
    mealType: '',
    deliveryPersonnel: { name: '', contactInfo: '' },
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the name is for nested deliveryPersonnel fields
    if (name.startsWith('deliveryPersonnel.')) {
      const field = name.split('.')[1]; // Extract the field name after "deliveryPersonnel."
      setFormData({
        ...formData,
        deliveryPersonnel: {
          ...formData.deliveryPersonnel,
          [field]: value, // Update the correct field in the deliveryPersonnel object
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4000/api/deliveries', formData);
//       console.log('Delivery created:', response.data);
//       toast("Delivery Created");
//       // Optionally show a success message or clear the form
//     } catch (error) {
//       console.error('Error creating delivery:', error);
//     }
//   };
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make sure patientId is valid
      const validPatientId = "6783a9bca11388688f85a2b5";  // Replace with actual ObjectId
  
      const response = await axios.post('http://localhost:4000/api/deliveries', {
        ...formData,
        patientId: validPatientId,
      });
      console.log('Delivery created:', response.data);
      toast("Delivery Created");
    } catch (error) {
      if (error.response) {
        console.error('Error creating delivery:', error.response.data);
        toast.error(`Error: ${error.response.data.message || 'Something went wrong'}`);
      } else {
        console.error('Error creating delivery:', error.message);
        toast.error('Error in request setup');
      }
    }
  };
  
  return (
    <div className="p-4 bg-white shadow-md rounded-md mb-6">
      <h2 className="text-xl font-bold mb-4">Create New Delivery</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Patient ID:</label>
          <input
            type="text"
            name="patientId"
            onChange={handleChange}
            value={formData.patientId}
            className="w-full p-2 border rounded-md"
            // required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Meal Type:</label>
          <select
            name="mealType"
            onChange={handleChange}
            value={formData.mealType}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select Meal Type</option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
            <option value="Night">Night</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Delivery Personnel Name:</label>
          <input
            type="text"
            name="deliveryPersonnel.name"
            onChange={handleChange}
            value={formData.deliveryPersonnel.name}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Delivery Personnel Contact Info:</label>
          <input
            type="text"
            name="deliveryPersonnel.contactInfo"
            onChange={handleChange}
            value={formData.deliveryPersonnel.contactInfo}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Notes:</label>
          <textarea
            name="notes"
            onChange={handleChange}
            value={formData.notes}
            className="w-full p-2 border rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Create Delivery
        </button>
      </form>
    </div>
  );
};

export default CreateDeliveryForm;
