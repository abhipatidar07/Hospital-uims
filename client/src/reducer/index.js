import { combineReducers } from "@reduxjs/toolkit";

import patientsReducer from "../slices/patientSlice"
import authReducer from "../slices/authSlice"


const rootReducer  = combineReducers({
    patients: patientsReducer,
    auth: authReducer
    
})

export default rootReducer