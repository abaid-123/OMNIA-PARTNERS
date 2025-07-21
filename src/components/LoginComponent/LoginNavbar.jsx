import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoicon from "../../assets/logoicon.png";
import "../stylecomponents/Navbar.css";
import IndustryDropdown from "../dropdowns/IndustryDropdown";
import CapabilitiesDropdown from "../dropdowns/CapabilitiesDropdown";
import FeatureInsightsDropdown from "../dropdowns/FeatureInsightsDropdown";

const LoginNavbar = () => {
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="navbar-container bg-white shadow-md px-6 py-4 flex items-center justify-between relative">
      <div className="w-full flex justify-between items-center px-2">
        {/* Logo + Hamburger */}
        <div className="flex w-[170px] adjust_w items-center gap-2 justify-between md:justify-start">
          <button
            className="block md:hidden cursor-pointer"
            onClick={() => {
              if (window.innerWidth < 768) {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }
            }}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Logo */}
          <div className="flex items-center justify-center flex-grow md:flex-grow-0">
            <img className="logoicon mr-2" src={logoicon} alt="logo" />
            <div className="navheading text-center md:text-left">
              <h3 className="nameheading">OMNIA</h3>
              <p className="paratext1 text-gray-500">PARTNERS LTD.</p>
              <p className="paratext2 text-black">Grow Boldly, Navigate Smartly</p>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden_ul cursor-pointer md:flex items-center text-sm font-medium gap-3 gapitem">
          <li className="hover:border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 ease-in-out">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-1 pb-1 transition-all">Home</Link>
          </li>

          <li className="hover:border-b-2 border-transparent hover:border-blue-600 transition-all">
            <div onClick={() => setIsIndustriesOpen(!isIndustriesOpen)} className="cursor-pointer text-gray-700 hover:text-blue-600">
              Industries {isIndustriesOpen ? "▴" : "▾"}
            </div>
            {isIndustriesOpen && (
              <div className="w-full bg-[#f7f7f7] shadow-lg z-50 absolute left-0 top-[100%]">
                <IndustryDropdown />
              </div>
            )}
          </li>

          <li className="hover:border-b-2 border-transparent hover:border-blue-600 transition-all">
            <div onClick={() => setIsCapabilitiesOpen(!isCapabilitiesOpen)} className="cursor-pointer text-gray-700 hover:text-blue-600">
              Capabilities {isCapabilitiesOpen ? "▴" : "▾"}
            </div>
            {isCapabilitiesOpen && (
              <div className="w-full bg-[#f7f7f7] shadow-lg z-50 absolute left-0 top-[100%]">
                <CapabilitiesDropdown />
              </div>
            )}
          </li>

          <li className="hover:border-b-2 border-transparent hover:border-blue-600 transition-all">
            <div onClick={() => setIsInsightsOpen(!isInsightsOpen)} className="cursor-pointer text-gray-700 hover:text-blue-600">
              Featured Insights {isInsightsOpen ? "▴" : "▾"}
            </div>
            {isInsightsOpen && (
              <div className="w-full bg-[#f7f7f7] shadow-lg z-50 absolute left-0 top-[100%]">
                <FeatureInsightsDropdown />
              </div>
            )}
          </li>

          <li className="hover:border-b-2 border-transparent hover:border-blue-600 transition-all">
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-[40%] h-full bg-white z-50 shadow-md p-6 md:hidden transition-all">
          <div className="flex items-center justify-between mb-8">
            <img className="w-10" src={logoicon} alt="logo" />
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-6 text-lg font-semibold">
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>

            <li className="relative">
              <div onClick={() => setIsIndustriesOpen(!isIndustriesOpen)} className="cursor-pointer text-gray-700 hover:text-blue-600">
                Industries {isIndustriesOpen ? "▴" : "▾"}
              </div>
              {isIndustriesOpen && (
                <div className="bg-[#f7f7f7] shadow-lg z-50 absolute -right-[200%] -top-[250%]">
                  <IndustryDropdown />
                </div>
              )}
            </li>

            <li className="relative">
              <div onClick={() => setIsCapabilitiesOpen(!isCapabilitiesOpen)} className="cursor-pointer text-gray-700 hover:text-blue-600">
                Capabilities {isCapabilitiesOpen ? "▴" : "▾"}
              </div>
              {isCapabilitiesOpen && (
                <div className="bg-[#f7f7f7] shadow-lg z-50 absolute -right-[200%] -top-[250%]">
                  <CapabilitiesDropdown />
                </div>
              )}
            </li>

            <li>
              <Link to="/insights" onClick={() => setIsMobileMenuOpen(false)}>Featured Insights</Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LoginNavbar;
