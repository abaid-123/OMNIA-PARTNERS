import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoicon from "../assets/logoicon.png";
import "./stylecomponents/Navbar.css";
import Industry_dropdown from "./dropdowns/Industry_dropdown";
import Capabilities_dropdown from "./dropdowns/Capabilities_dropdown";
import Feature_insights_dropdown from "./dropdowns/Feature_insights_dropdown";

const Navbar = () => {
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // for sidebar toggle

  return (
    <div className="navbar-container bg-white shadow-md px-6 py-4 flex items-center justify-between relative">
      {/* Left: Hamburger + Logo */}
      <div className="w-full flex justify-between items-center px-2">
        <div className="flex w-[170px] adjust_w items-center gap-2 justify-between md:justify-start">
          {/* Hamburger - visible only on sm */}
          <div>
            <button
              className="block md:hidden cursor-pointer"
              onClick={() => {
                // Prevent toggle if not small screen
                if (window.innerWidth < 768) {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }
              }}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo & Text */}
          <div className="flex items-center  justify-center flex-grow md:flex-grow-0">
            <svg
                  className="w-6 h-6 mr-1 cursor-pointer hidden md:block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
            <Link to="/">
              <img className="logoicon mr-2" src={logoicon} alt="logo" />
            </Link>

            <div className="navheading text-center md:text-left">
              <h3 className="nameheading">OMNIA</h3>
              <p className="paratext1 text-gray-500">PARTNERS LTD.</p>
              <p className="paratext2 text-black">
                Grow Boldly, Navigate Smartly
              </p>
            </div>
          </div>
        </div>
        <div>
          <ul className="hidden_ul  cursor-pointer md:flex items-center text-sm  font-medium gap-3 gapitem">
            <li className="hover:border-b-2  border-transparent hover:border-blue-600 transition-all duration-300 ease-in-out ">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 px-1 pb-1 transition-all duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>

            <li className=" hover:border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 ease-in-out">
              <div
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                className="cursor-pointer text-gray-700 hover:text-blue-600"
              >
                Industries {isIndustriesOpen ? "▴" : "▾"}
              </div>

              {isIndustriesOpen && (
                <div className="w-full  bg-[#f7f7f7] shadow-lg z-50  absolute left-0 top-[100%]">
                  <Industry_dropdown />
                </div>
              )}
            </li>

            <li className=" hover:border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 ease-in-out">
              <div
                onClick={() => setIsCapabilitiesOpen(!isCapabilitiesOpen)}
                className="cursor-pointer text-gray-700 hover:text-blue-600"
              >
                Capabilities {isCapabilitiesOpen ? "▴" : "▾"}
              </div>

              {isCapabilitiesOpen && (
                <div className="w-full  bg-[#f7f7f7] shadow-lg z-50  absolute left-0 top-[100%]">
                  <Capabilities_dropdown />
                </div>
              )}
            </li>

            <li className=" hover:border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 ease-in-out">
              <div
                onClick={() => setIsInsightsOpen(!isInsightsOpen)}
                className="cursor-pointer text-gray-700 hover:text-blue-600"
              >
                Featured Insights {isInsightsOpen ? "▴" : "▾"}
              </div>
              
              {isInsightsOpen && (
                <div className="w-full  bg-[#f7f7f7] shadow-lg z-50  absolute left-0 top-[100%]">
                  <Feature_insights_dropdown />
                </div>
              )}
            </li>

            <li className="hover:border-b-2  border-transparent hover:border-blue-600 transition-all duration-300 ease-in-out ">
              <Link to="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="inline-flex items-center text-sm font-medium cursor-pointer pad_client text-white bg-blue-600 px-2 py-2 rounded-full hover:bg-blue-700 transition"
              >
                <svg
                  className="w-5 h-5 mr-1 bg-white text-blue-700 rounded-full"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
                Client Portal
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden show_portal">
          <Link
            to="/login"
            className="w-9  h-9 cursor-pointer rounded-full flex items-center justify-center"
          >
            <img
              src="/images/adminicon.png"
              alt="Admin Portal"
              className="w-full h-full"
            />
          </Link>
        </div>
      </div>

      {/* Center: Horizontal nav links (only for md and above) */}

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-[40%] h-full bg-white z-50 shadow-md p-6 md:hidden transition-all">
          {/* Top bar in sidebar */}
          <div className="flex items-center justify-between mb-8">
            <img className="w-10" src={logoicon} alt="logo" />
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile nav links */}
          <ul className="flex flex-col gap-6 text-lg font-semibold">
            <li>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="relative  ">
              <div
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                className="cursor-pointer text-gray-700 hover:text-blue-600"
              >
                Industries {isIndustriesOpen ? "▴" : "▾"}
              </div>

              {isIndustriesOpen && (
                <div className="  bg-[#f7f7f7] left-[60%] shadow-lg z-50  absolute -right-[200%] -top-[250%]">
                  <Industry_dropdown />
                </div>
              )}
            </li>
            <li className="relative">
              <div
                onClick={() => setIsCapabilitiesOpen(!isCapabilitiesOpen)}
                className="cursor-pointer text-gray-700 hover:text-blue-600"
              >
                Capabilities {isCapabilitiesOpen ? "▴" : "▾"}
              </div>

              {isCapabilitiesOpen && (
                <div className="  bg-[#f7f7f7] left-[60%] shadow-lg z-50  absolute -right-[200%] -top-[250%]">
                  <Capabilities_dropdown />
                </div>
              )}
            </li>
            <li>
              <Link
                to="/insights"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Featured Insights
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                Client Portal
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
