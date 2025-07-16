import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginNavbar from "./LoginNavbar";
import SignUpSuccessModal from "./SignUpSuccessModal"; // ✅ Import modal

const SignUpFunctionalities = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [success, setSuccess] = useState(false); // ✅ Show modal after submit

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Add real validation / API call
    setSuccess(true); // ✅ Trigger modal
  };

  return (
    <div>
      <LoginNavbar />
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
        style={{ backgroundImage: 'url("images/Login/Loginbg.png")' }}
      >
        <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8 relative">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Sign up
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* First + Last Name */}
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Password */}
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
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
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
                placeholder="Repeat Password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Terms & Privacy */}
            <div className="flex items-start space-x-2 text-sm">
              <input type="checkbox" required className="mt-1" />
              <span>
                By creating an account, I agree to our{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms of use
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </span>
            </div>

            {/* Google reCAPTCHA Placeholder */}
            <div className="w-full h-16 border border-gray-700 rounded flex items-center justify-between text-sm text-gray-500 p-2">
              <div>
                <input type="checkbox" required className="m-2" />
                <span>I'm not a robot </span>
              </div>
              <img
                src="images/Login/google_recaptcha.png"
                alt="google_recaptcha"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-full py-2 font-semibold hover:bg-blue-700 transition"
            >
              Sign Up
            </button>

            {/* Switch to Login */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <Link
                type="button"
                to="/login"
                className="text-blue-600 font-medium hover:underline"
              >
                Log in
              </Link>
            </p>
          </form>

          {/* ✅ Show Modal if success */}
          {success && <SignUpSuccessModal onClose={() => setSuccess(false)} />}
        </div>
      </div>
    </div>
  );
};

export default SignUpFunctionalities;
