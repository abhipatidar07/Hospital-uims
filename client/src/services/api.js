import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:6000/api',
});

export const fetchPatients = () => API.get('/patients');
export const createPatient = (data) => API.post('/patients', data);
// Add more API calls as needed
