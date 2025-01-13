import React, { useState } from 'react';
import axios from 'axios';
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
import { login } from '../slices/authSlice';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  
    try {
      const response = await axios.post('https://heliverse-back1.onrender.com/api/auth/login', formData);
      const { token, user } = response.data;
      console.log(user)
  
      // Store token and user info
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
  
      // Dispatch login action
      dispatch(login(user));
  
      toast.success('Login successful');
  
      // Redirect based on role
      if (user.role === 'Hospital Manager') {
        navigate('/manager');
      } else if (user.role === 'Inner Pantry Staff') {
        navigate('/pantry');
      } else if (user.role === 'Delivery Personnel') {
        navigate('/delivery');
      } else {
        navigate('/');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error logging in');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        {message && <p className="text-red-500">{message}</p>}
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
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;



