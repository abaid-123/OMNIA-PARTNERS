import React from "react";
import { Link } from "react-router-dom";
import LoginNavbar from "./LoginNavbar";

const ForgotPassword = () => {
  return (
    <div>
      <LoginNavbar/>
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
        style={{ backgroundImage: 'url("/images/Login/Loginbg.png")' }}
      >
        <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-2 text-gray-800 ">
            Forgot Password
          </h2>
          <p className=" mb-6 text-gray-600 text-sm ">
            Enter your email address we'll send you a link to reset your
            password
          </p>
          <form className="space-y-4">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter your email address
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <Link
              to="/reset-password"
              className="w-full bg-blue-600 text-white rounded-full py-3 font-semibold hover:bg-blue-700 transition text-center block"
            >
              Send Link
            </Link>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Remembered your password?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Back to Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
