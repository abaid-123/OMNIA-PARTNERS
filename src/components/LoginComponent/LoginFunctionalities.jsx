import React, { useState } from "react";
import { Link } from "react-router-dom";
 

const LoginFunctionalities = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: 'url("images/Login/Loginbg.png")' }}
    >
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign in</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="flex justify-between items-center text-sm font-medium text-gray-700 mb-1">
              Password
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="text-xs text-gray-500 cursor-pointer hover:text-gray-700"
              >
                {showPassword ? " Hide" : " Show"}
              </span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-full py-2 font-semibold hover:bg-blue-700 transition"
          >
            Sign in
          </button>

          <div className="flex items-center justify-between text-sm mt-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4 text-blue-600" />
              <span className="text-gray-700">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-blue-600 hover:underline">
              Need help?
            </Link>
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link
            type="button"
            to="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign up
          </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginFunctionalities;
