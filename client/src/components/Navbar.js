// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';

// const Navbar = () => {
//   const navigate = useNavigate();

//   // State to manage login status
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check login status when the component mounts
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if(!token){
//       setIsLoggedIn(false);
//     }
//     else{
//       setIsLoggedIn(true);
//     }
    
//   }, []); // Run only once on component mount

//   const handleLogout = () => {
//     // Clear session data
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     toast.success('Logged out successfully!');
//     setIsLoggedIn(false); // Immediately update state
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-blue-600 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-2xl font-bold">
//           <Link to="/">Hospital Food Management</Link>
//         </div>
//         <div>
//           {/* Conditionally render the buttons based on login state */}
//           {!isLoggedIn ? (
//             <>
//               <Link
//                 to="/login"
//                 className="text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mr-2"
//                 onClick={() => setIsLoggedIn(false)} // Ensure state sync after navigation
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="text-white py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 transition duration-300"
//                 onClick={() => setIsLoggedIn(false)} // Ensure state sync after navigation
//               >
//                 Signup
//               </Link>
//             </>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="text-white py-2 px-4 rounded bg-red-500 hover:bg-red-700 transition duration-300"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/authSlice';
import { toast } from 'react-hot-toast';
import { Link,useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Dispatch logout action
    dispatch(logout());

    toast.success('Logged out successfully!');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Hospital Food Management</Link>
        </div>
        <div>
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mr-2"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 transition duration-300"
              >
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-white py-2 px-4 rounded bg-red-500 hover:bg-red-700 transition duration-300"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
