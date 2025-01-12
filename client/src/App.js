// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HospitalManagerDashboard from './pages/HospitalManagerDashboard';
// import InnerPantryDashboard from './pages/InnerPantryDashboard';
// import DeliveryPortal from './pages/DeliveryPortal';
// import SignupForm from './pages/SignupForm';
// import LoginForm from './pages/LoginForm';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//       <div className="min-h-screen bg-gray-100">
//         <Navbar/>
//         <Routes>
//           <Route path="/manager" element={<HospitalManagerDashboard />} />
//           <Route path="/signup" element={<SignupForm />} />
//           <Route path="/login" element={<LoginForm/>} />
//           <Route path="/pantry" element={<InnerPantryDashboard />} />
//           <Route path="/delivery" element={<DeliveryPortal />} />
//         </Routes>
//       </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HospitalManagerDashboard from './pages/HospitalManagerDashboard';
import InnerPantryDashboard from './pages/InnerPantryDashboard';
import DeliveryPortal from './pages/DeliveryPortal';
import SignupForm from './pages/SignupForm';
import LoginForm from './pages/LoginForm';
import Navbar from './components/Navbar';

// Private Route Component
const PrivateRoute = ({ children, role }) => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  if (!isLoggedIn) {
    // If user is not logged in, redirect to login page
    return <Navigate to="/login" />;
  }

  if (role && user?.role !== role) {
    // If user's role doesn't match, redirect to a default page
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />

          {/* Private Routes with Role-Based Access */}
          <Route
            path="/manager"
            element={
              <PrivateRoute role="Hospital Manager">
                <HospitalManagerDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/pantry"
            element={
              <PrivateRoute role="Inner Pantry Staff">
                <InnerPantryDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/delivery"
            element={
              <PrivateRoute role="Delivery Personnel">
                <DeliveryPortal />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    
  );
}

export default App;
