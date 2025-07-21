import React from "react";
import "../stylecomponents/Industry_dropdown.css";
import { useNavigate } from "react-router-dom";

const IndustryDropdown = () => {
   const navigate = useNavigate();

  const handleClick = () => {
    navigate("/all_industries");
  };

  return (
    <div className="p-6 industry-scroll-content ">
      <div className="flex w-full justify-between text-center  px-8 mb-2">
        <div>
          <h1 className="text-2xl font-semibold">All Industries</h1>
        </div>
        <div className="block">
      <button
        onClick={handleClick}
        className="inline-flex items-center text-sm cursor-pointer text-black border bg-white px-1 py-1 rounded-full transition"
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
      <hr className="capability_hidden h-1  border-none bg-[radial-gradient(ellipse_at_center,_#03255b,_#e6e8ed)] mt-6 mb-1 mx-[40px]" />
      <div className="px-6 Industry_dropdown_fullWidth">
        <div
          className="industry-scroll-content flex flex-col px-2 sm:px-6 py-3 
                sm:max-h-none max-h-[65vh] overflow-y-auto pr-3 "
        >
          {/* Row 1 */}
          <div className="set_flex flex w-full  mb-3">
            <div className="flex w-[100%]  mb-2  gap-1">
              <div className="w-[50%] ">
                <h4 className="font-normal text-gray-800 mb-1 text-lg text_handle">
                  Automotive
                </h4>
                <p className="text-xs font-normal">» Rev Up Your Strategy</p>
                <p className="text-xs font-normal">» Shift Into High Gear</p>
              </div>
              <div className="w-[50%] ">
                <h4 className="font-normal text-gray-800 mb-1 text-lg text_handle ">
                  Aerospace & Defense
                </h4>
                <p className="text-xs font-normal">» Elevate Operations</p>
                <p className="text-xs font-normal">» Strategize With Precision</p>
              </div>
            </div>

            <div className="flex w-[100%] mb-2 gap-1">
              <div className="w-[50%] ">
                <h4 className="font-normal  text-gray-800 mb-1 text-lg text_handle ">
                  Aircraft Modification & Certification
                </h4>
                <p className="text-xs font-normal">» Certify Your Innovations</p>
                <p className="text-xs font-normal">» Elevate Your Fleet</p>
                <p className="text-xs font-normal">» Soar With Confidence</p>
              </div>
              <div className="w-[50%] ">
                <h4 className="font-normal text-gray-800 mb-1 text-lg text_handle ">
                  Healthcare
                </h4>
                <p className="text-xs font-normal">» Healthcare Innovation Awaits</p>
                <p className="text-xs font-normal">» Diagnose With Intelligence</p>
              </div>
            </div>
          </div>

          <hr className="capability_hidden h-[1px] my-2 border-none w-[100%] bg-gray-200" />
          {/* Row 2 */}
          <div className="set_flex flex w-full  mb-3 ">
            <div className="flex w-[100%] mb-2 gap-1 ">
              <div className="w-[50%] ">
                <h4 className="font-normal text-gray-800 mb-1 text-lg text_handle ">
                  Automation & Robotics
                </h4>
                <p className="text-xs font-normal">» Automate Your Success</p>
                <p className="text-xs font-normal">» Innovate With Robotics</p>
              </div>
              <div className="w-[50%] ">
                <h4 className="font-normal text-gray-800 mb-1 text-lg text_handle ">
                  Public Sector
                </h4>
                <p className="text-xs font-normal">» Enhance Civic Engagement</p>
                <p className="text-xs font-normal">» Govern With Vision</p>
              </div>
            </div>

            <div className="flex w-[100%] mb-2 gap-1">
              <div className="w-[50%] ">
                <h4 className="font-normal text-gray-800 mb-1 text-lg text_handle p-1 ">
                  Telecommuni-
                  <br />cations
                </h4>
                <p className="text-xs font-normal">» Network With Excellence</p>
                <p className="text-xs font-normal">» Signal Your Success</p>
              </div>
              <div className="w-[50%] ">
                <h4 className="font-normal text-gray-800 mb-1 text-lg text_handle ">
                  Intralogistics
                </h4>
                <p className="text-xs font-normal">» Streamline Your Supply Chain</p>
                <p className="text-xs font-normal">» Optimize With Intelligence</p>
                <p className="text-xs font-normal">» Navigate Logistics Complexity</p>
              </div>
            </div>
          </div>
          <hr className="capability_hidden h-[1px] my-2 border-none w-[100%] bg-gray-200" />
          {/* Row 3 */}
          <div className="set_flex flex w-full  mb-3">
            <div className="flex w-[100%] mb-2 gap-1 ">
              <div className="w-[50%] ">
                <h4 className="font-normal text-gray-800 mb-1 text-lg text_handle ">
                  Manufacturing & Quality Development
                </h4>
                <p className="text-xs font-normal">» Manufacture Superiority</p>
                <p className="text-xs font-normal">» Quality Crafted</p>
              </div>
              <div className="w-[50%] ">
                <h4 className="font-normal text-gray-800 mb-1 text-lg text_handle ">
                  Construction
                </h4>
                <p className="text-xs font-normal">» Blueprint For Success</p>
                <p className="text-xs font-normal">» Build Your Vision</p>
              </div>
            </div>
            <div className="flex w-[100%] mb-2 gap-1">
              <div className="w-[50%] ">
                <h4 className="font-normal text-gray-800 mb-1 text-lg text_handle ">
                  Packaging & Paper
                </h4>
                <p className="text-xs font-normal">» Package Your Potential</p>
                <p className="text-xs font-normal">» Unwrap New Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDropdown;
