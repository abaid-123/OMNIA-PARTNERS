import React, { useState } from "react";
import Modal from "../components/Modal";
import LoginFunctionalities from "../components/LoginComponent/LoginFunctionalities";
import SignUpFunctionalities from "../components/LoginComponent/SignUpFunctionalities";

const SignUpPage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: 'url("/images/Login/Loginbg.png")' }}
    >
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Sign up</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-full py-2 font-semibold hover:bg-blue-700"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => setShowLoginModal(true)}
              className="text-blue-600 font-medium hover:underline"
            >
              Log in
            </button>
          </p>
        </form>
      </div>

      {/* 🟩 Login Modal */}
      <Modal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)}>
        <LoginFunctionalities
          onSwitchToSignUp={() => {
            setShowLoginModal(false);
            setShowSignUpModal(true);
          }}
        />
      </Modal>

      {/* 🟦 Sign Up Modal from Login */}
      <Modal isOpen={showSignUpModal} onClose={() => setShowSignUpModal(false)}>
        <SignUpFunctionalities />
      </Modal>
    </div>
  );
};

export default SignUpPage;
