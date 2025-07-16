import React from "react";

const SignUpSuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm text-center relative">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-2">Congratulations</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Your account has been created. Please login with your created credentials.
        </p>

        <a
          href="/login"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition inline-block"
        >
          Sign In
        </a>
      </div>
    </div>
  );
};

export default SignUpSuccessModal;
