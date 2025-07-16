import React from "react";

const SightsAroundWeb = () => {
  return (
    <div className="bg-[#f6f9ff] py-12  lg:px-0 sm:px-8 px-4">
      <div className="max-w-7xl flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/Insights/Web1.png"
            alt="Globe in Hand"
            className="w-full h-[350px] md:h-[400px] object-cover "
          />
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2 relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            From Around The Web
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>

          {/* Action Button */}
          <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-r-full transition">
            <svg
                class="w-6 h-6 text-white"
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

          {/* Optional background star icon or SVG pattern */}
          <div className="absolute top-0 right-0 opacity-10 hidden lg:block">
            <img
              src="/images/Insights/star-pattern.png"
              alt="Decoration"
              className="w-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SightsAroundWeb;
 