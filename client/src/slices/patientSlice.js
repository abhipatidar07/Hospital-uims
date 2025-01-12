import { createSlice } from '@reduxjs/toolkit';

const patientSlice = createSlice({
  name: 'patients',
  initialState: [],
  reducers: {
    setPatients: (state, action) => action.payload,
    addPatient: (state, action) => [...state, action.payload],
  },
});

export const { setPatients, addPatient } = patientSlice.actions;
export default patientSlice.reducer;
