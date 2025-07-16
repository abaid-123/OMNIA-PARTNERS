import React, { useState } from "react";
import { Link } from "react-router-dom";

import LoginNavbar from "./LoginNavbar";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  return (
    <div>
      <LoginNavbar/>
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
        style={{ backgroundImage: 'url("/images/Login/Loginbg.png")' }}
      >
        <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-2 text-gray-800 ">
            Create a new password
          </h2>
          <p className="text-sm text-gray-600  mb-6">Enter your new password</p>

          <form className="space-y-4">
            {/* New Password */}
            <div>
              <label className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                Password
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-xs text-gray-500 cursor-pointer hover:text-gray-700"
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New password"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Repeat Password */}
            <div>
              <label className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                Repeat Password
                <span
                  onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                  className="text-xs text-gray-500 cursor-pointer hover:text-gray-700"
                >
                  {showRepeatPassword ? "Hide" : "Show"}
                </span>
              </label>
              <input
                type={showRepeatPassword ? "text" : "password"}
                placeholder="Repeat new password"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Reset Button */}
            <Link
              to="/login"
              className="w-full bg-blue-600 text-white rounded-full py-3 font-semibold hover:bg-blue-700 transition block text-center"
            >
              Reset Password
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
