import React, { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    title: "",
    company: "",
    industry: "",
    interest: "",
    employees: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const goToStep = (n) => setStep(n);

  const validateFields = () => {
    const requiredFields = {
      1: ["firstName", "lastName", "email", "country"],
      2: ["title", "company", "industry", "interest", "employees"],
      3: ["message"],
    };
    const currentFields = requiredFields[step];
    const missing = currentFields.filter((key) => !formData[key]);
    if (missing.length > 0) {
      setErrorMessage("Please fill in all required fields.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

 const handleSubmit = () => {
  if (!validateFields()) return;

  setShowModal(true);

  // Reset the form fields
  setFormData({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    title: "",
    company: "",
    industry: "",
    interest: "",
    employees: "",
    message: "",
  });

  // Optional: Reset step to first
  setStep(1);
};

  
  return (
    <div className="min-h-screen bg-white py-10 px-4 sm:px-10 md:px-20 relative">
      {/* Step Progress Bar */}
      <div className="md:flex hidden justify-center items-center space-x-4 mb-10 text-sm font-medium">
        {[
          { label: "Personal Information", id: 1 },
          { label: "About Your Business", id: 2 },
          { label: "Message", id: 3 },
        ].map((item, idx) => (
          <React.Fragment key={item.id}>
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => goToStep(item.id)}
            >
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full text-white text-xs font-bold ${
                  step > item.id
                    ? "bg-green-500"
                    : step === item.id
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
              >
                {step > item.id ? "✓" : item.id}
              </div>
              <span
                className={`${
                  step >= item.id ? "text-blue-600" : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </div>
            {idx !== 2 && <span className="text-gray-400">────────</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Form Container */}
      <div className="rounded-lg p-6 md:p-10 bg-white shadow">
        {errorMessage && (
          <p className="text-red-500 mb-4 text-sm font-medium">
            {errorMessage}
          </p>
        )}

        {/* Step 1 */}
        {step === 1 && (
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
              <hr className="h-1 w-[50%] bg-blue-600 mb-4 border-none" />
              <p className="text-sm text-gray-600">
                Please enter your all personal information.
              </p>
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="input"
                  required
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>
              <input
                name="email"
                type="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                className="input w-full"
                required
              />
              <input
                name="phone"
                type="text"
                placeholder="Phone No"
                value={formData.phone}
                onChange={handleChange}
                className="input w-full"
              />
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="input w-full"
                required
              >
                <option value="">Select Country *</option>
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-bold mb-2">About Your Business</h2>
              <hr className="h-1 w-[50%] bg-blue-600 mb-4 border-none" />
              <p className="text-sm text-gray-600">
                Please enter all your business information.
              </p>
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
              <select
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="input w-full"
                required
              >
                <option value="">Title/Role *</option>
                <option value="Founder">Founder</option>
                <option value="Manager">Manager</option>
                <option value="Director">Director</option>
                <option value="Employee">Employee</option>
              </select>
              <input
                name="company"
                type="text"
                placeholder="Company Name *"
                value={formData.company}
                onChange={handleChange}
                className="input w-full"
                required
              />
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="input w-full"
                required
              >
                <option value="">Related Industry *</option>
                <option value="Technology">Technology</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Retail">Retail</option>
              </select>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="input w-full"
                required
              >
                <option value="">Service of Interest *</option>
                <option value="Consulting">Consulting</option>
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
              </select>
              <select
                name="employees"
                value={formData.employees}
                onChange={handleChange}
                className="input w-full"
                required
              >
                <option value="">Number of Employees *</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201+">201+</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-bold mb-2">Message</h2>
              <hr className="h-1 w-[50%] bg-blue-600 mb-4 border-none" />
              <p className="text-sm text-gray-600">
                Please enter your message.
              </p>
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="input w-full h-40 resize-none"
            />
          </div>
        )}

        {/* Buttons */}
        {/* Buttons shown after all form step sections */}
        <div className="flex justify-between mt-8">
          {step > 1 ? (
            <button
              onClick={prevStep}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-full transition"
            >
              Back
            </button>
          ) : (
            <span /> // Keeps layout consistent on step 1
          )}

          {step < 3 ? (
            <button
              onClick={() => {
                if (validateFields()) nextStep();
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition"
            >
              Submit
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-8 rounded shadow-md max-w-md text-center">
            <h2 className="text-xl font-bold mb-4">Form Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your submission. We’ll get back to you soon.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
