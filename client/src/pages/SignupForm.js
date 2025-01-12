import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/authSlice';

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/auth/signup', formData);
      const user = response.data.user; // Assuming the API response contains the user object
      const token = response.data.token; // Assuming the API response contains the token

      // Save user and token to local storage
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);

      // Dispatch setUser action to update the Redux store
      dispatch(setUser(user));

      // Navigate to the login page
      navigate('/login');
      setMessage('Signup successful! You can now log in.');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error signing up');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Signup</h2>
        {message && <p className="text-red-500">{message}</p>}
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="block w-full mb-3 p-2 border rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="block w-full mb-3 p-2 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="block w-full mb-3 p-2 border rounded"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <select
          name="role"
          className="block w-full mb-3 p-2 border rounded"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="Hospital Manager">Hospital Manager</option>
          <option value="Inner Pantry Staff">Inner Pantry Staff</option>
          <option value="Delivery Personnel">Delivery Personnel</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
