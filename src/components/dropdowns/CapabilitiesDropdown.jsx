import React from "react";
import "../stylecomponents/Capabilities_dropdown.css";
import { useNavigate } from "react-router-dom";

const CapabilitiesDropdown = () => {
   const navigate = useNavigate();
  
    const handleClick = () => {
      navigate("/all_capabilities");
    };
  return (
    <div className="p-6 ">
      <div className="flex w-full justify-between text-center px-8 mb-2">
        <div>
          <h1 className="text-2xl font-normal">All Capabilities</h1>
        </div>
        <div className="block">
          <button
            onClick={handleClick}
            className="inline-flex items-center text-sm text-black border bg-white px-1 py-1 rounded-full  transition"
          >
            <svg
              className="w-6 h-6 mr-1 bg-black text-white rounded-full"
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
            See All
          </button>
        </div>
      </div>

      <hr className="capability_hidden h-1 border-none bg-[radial-gradient(ellipse_at_center,_#03255b,_#e6e8ed)] mt-6 mb-1 mx-[40px]" />

      <div className="px-6 Industry_dropdown_fullWidth">
        <div className="capability-scroll-content flex flex-col px-2 sm:px-6 py-3 max-h-[65vh] overflow-y-auto pr-3">
          {/* Row 1 */}
          <div className="set_flex flex w-full mb-3">
            <div className="flex w-full mb-2 gap-1">
              <div className="w-[50%]">
                <h4 className="font-normal text-gray-800 mb-1 text-lg text_handle">
                  Strategic Services
                </h4>
                <p className="text-xs font-normal pb-2">
                  » Strategy Development
                </p>
                <p className="text-xs font-normal pb-2">
                  » Mergers, Acquisitions & Valuation
                </p>
                <p className="text-xs font-normal pb-2">» Risk Management</p>
                <p className="text-xs font-normal pb-2">
                  » Change & Transformation Management
                </p>
              </div>
              <div className="w-[50%]">
                <h4 className="font-normal text-gray-800 mb-1 text-lg text_handle">
                  Financial & Legal Services
                </h4>
                <p className="text-xs font-normal pb-2">
                  » Financial Planning & Management
                </p>
                <p className="text-xs font-normal pb-2">
                  » Intellectual Property & Licensing
                </p>
                <p className="text-xs font-normal pb-2">» Legal & Regulatory</p>
                <p className="text-xs font-normal pb-2">
                  » Commercial Contracts
                </p>
              </div>
            </div>
            <div className="flex w-full mb-2 gap-1">
              <div className="w-[50%]">
                <h4 className="font-normal text-gray-800 mb-1 text-lg text_handle">
                  Marketing & Customer Relations
                </h4>
                <p className="text-xs font-normal pb-2">
                  » Customer Relationship Management
                </p>
                <p className="text-xs font-normal pb-2">
                  » Sales, Marketing & Branding
                </p>
              </div>
              <div className="w-[50%]">
                <h4 className="font-normal text-gray-800 mb-1 text-lg text_handle">
                  Operational Excellence
                </h4>
                <p className="text-xs font-normal pb-2">
                  » Operational & Services Excellence
                </p>
                <p className="text-xs font-normal pb-2">
                  » Manufacturing & Quality Assurance
                </p>
                <p className="text-xs font-normal pb-2">
                  » Supply Chain Optimization
                </p>
              </div>
            </div>
          </div>

          <hr className="capability_hidden h-[1px] my-2 border-none w-full bg-gray-200" />

          {/* Row 2 */}
          <div className="set_flex flex w-full mb-3">
            <div className="flex w-[100%] mb-2 gap-1">
              <div className="w-[50%]">
                <h4 className="font-normal text-gray-800 mb-1 text-lg text_handle">
                  Human Resources & Organizational...
                </h4>
                <p className="text-xs font-normal">» Human Resources</p>
                <p className="text-xs font-normal">» Performance & Salary Management</p>
                <p className="text-xs font-normal">
                  » Talent Acquisition & Professional Development
                </p>
                <p className="text-xs font-normal">
                  » Coaching Organizational Development & Training
                </p>
                <p className="text-xs font-normal">
                  » Management Services & Staff Augmentation
                </p>
              </div>
              <div className="w-[50%]">
                <h4 className="font-normal text-gray-800 mb-1 text-lg text_handle">
                  Innovation & Technology
                </h4>
                <p className="text-xs font-normal">» Technology IT</p>
                <p className="text-xs font-normal">» Product & Services Development</p>
              </div>
            </div>
          </div>
          {/* Add more rows as needed */}
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesDropdown;
