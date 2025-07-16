import React, { useState } from "react";
import Modal from "./Modal";
import LoginNavbar from "./LoginNavbar";
import LoginFunctionalities from "./LoginFunctionalities";
import SignUpFunctionalities from "./SignUpFunctionalities";

const LoginPage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const openLoginModal = () => {
    setShowSignUpModal(false); // Close signup
    setShowLoginModal(true);   // Open login
  };

  const openSignUpModal = () => {
    setShowLoginModal(false);  // Close login
    setShowSignUpModal(true);  // Open signup
  };

  return (
    <div>
      <LoginNavbar />
      <LoginFunctionalities/>
    </div>
  );
};

export default LoginPage;
