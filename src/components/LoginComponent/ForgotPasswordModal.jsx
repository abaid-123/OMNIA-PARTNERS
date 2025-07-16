import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginNavbar from "./LoginNavbar";
import SignUpSuccessModal from "./SignUpSuccessModal"; // ✅ Import modal


const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
   const [showRepeatPassword, setShowRepeatPassword] = useState(false);
   const [success, setSuccess] = useState(false); // ✅ Show modal after submit
 
   const handleSubmit = (e) => {
     e.preventDefault();
 
     // TODO: Add real validation / API call
     setSuccess(true); // ✅ Trigger modal
   };
 
  return (
   <>
   abaid
   </>
  );
};

export default ForgotPasswordModal;
