import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../../Services/firebase'; 

function Logout() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await auth.signOut();
      localStorage.removeItem('token');
      navigate('/signin');
    } catch (error) {
      console.error('Logout failed:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Log Out</h2>
        <p className="mb-8 text-center text-gray-600">
          Are you sure you want to log out of your account?
        </p>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={() => navigate('/Upload')} // Navigate back to home or dashboard
          >
            Cancel
          </button>
          <button
        //   w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#615793] hover:bg-[#32324D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#615793] transition duration-150 ease-in-out"
        //   >
            className="bg-[#615793] text-white px-6 py-2 rounded-md hover:bg-[#32324D] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500"
            onClick={handleLogout}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging out...
              </span>
            ) : (
              'Confirm Log Out'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;