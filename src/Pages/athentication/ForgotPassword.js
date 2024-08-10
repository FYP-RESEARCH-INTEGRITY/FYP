import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { auth } from "../../Services/firebase";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emalVal = e.target.email.value;
    sendPasswordResetEmail(auth, emalVal)
      .then((data) => {
        alert("Check your gmail");
        history("/");
      })
      .catch((err) => {
        alert(err.code);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Forgot Password</h1>
    <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input 
          id="email"
          name="email" 
          type="email" 
          required 
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#615793] focus:border-transparent"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#615793] hover:bg-[#32324D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#615793] transition duration-150 ease-in-out"
        >
          Reset Password
        </button>
      </div>
    </form>
    <p className="mt-4 text-center text-sm text-gray-600">
      Remember your password? {' '}
      <a href="/signin" className="font-medium text-[#615793] hover:text-[#32324D]">
        Sign in
      </a>
    </p>
  </div>
</div>
  );
}
export default ForgotPassword;
