import React from "react";

const SightsFromOtherFirms = () => {
  return (
    <div className="bg-black text-white py-10 px-4 sm:px-10 lg:px-20">
      {/* Flex Row */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
        {/* Left Heading */}
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Sights From <br /> Other Firms
          </h2>
        </div>

        {/* Right Text + Button */}
        <div className="md:w-1/2 relative">
          <div className="pl-4 border-l-4 border-blue-500 text-sm sm:text-base leading-relaxed text-gray-200">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>

          {/* Button */}
          <div className="mt-4">
            <button className="bg-blue-600 hover:bg-blue-700 transition p-2  rounded-r-full">
              <svg
                class="w-6 h-6  dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-6xl mx-auto">
        <img
          src="/images/Insights/Sights1.png"
          alt="Network Graphic"
          className="w-full h-[300px]  object-cover"
        />
      </div>
    </div>
  );
};

export default SightsFromOtherFirms;
