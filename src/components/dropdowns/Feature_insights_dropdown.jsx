import React, { useState } from "react";

const Feature_insights_dropdown = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="p-6 px-8 mb-2 ">
      <div className="w-full   px-8 mb-2">
        <div>
          <h1 className="text-2xl font-semibod">All Industries</h1>
        </div>
        <hr className=" h-1  border-none bg-[radial-gradient(ellipse_at_center,_#03255b,_#e6e8ed)] mt-6 mb-1 " />
      </div>
      <div className="flex gap-3 p-8">
        <div
          className="relative flex-1 md:h-full overflow-hidden"
          onMouseEnter={() => setHovered("blogs")}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src="/images/trendingimages/trend1.png"
            alt="..."
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-125"
          />

          <div className="absolute bottom-0 w-full left-4 right-4 flex justify-between items-center px-4 py-2 bg-black/40 backdrop-blur-sm rounded text-white text-md font-medium">
            <p>Our Latest Blogs</p>
            {hovered === "blogs" ? (
              // Down Arrow
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M7 7h10v10"
                />
              </svg>
            ) : (
              // Right Arrow
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            )}
          </div>
        </div>
        <div
          className="relative flex-1 md:h-full overflow-hidden"
          onMouseEnter={() => setHovered("case")}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src="/images/trendingimages/trend2.png"
            alt="..."
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-125"
          />

          <div className="absolute bottom-0 w-full left-4 right-4 flex justify-between items-center px-4 py-2 bg-black/40 backdrop-blur-sm rounded text-white text-md font-medium">
            <p>Case Studies</p>
            {hovered === "case" ? (
              // Down Arrow
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M7 7h10v10"
                />
              </svg>
            ) : (
              // Right Arrow
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            )}
          </div>
        </div>
        <div
          className="relative flex-1 md:h-full overflow-hidden"
          onMouseEnter={() => setHovered("white")}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src="/images/trendingimages/trend3.png"
            alt="..."
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-125"
          />

          <div className="absolute bottom-0 w-full left-4 right-4 flex justify-between items-center px-4 py-2 bg-black/40 backdrop-blur-sm rounded text-white text-md font-medium">
            <p>White Paper</p>
            {hovered === "white" ? (
              // Down Arrow
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M7 7h10v10"
                />
              </svg>
            ) : (
              // Right Arrow
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature_insights_dropdown;
