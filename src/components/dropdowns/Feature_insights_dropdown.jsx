import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Feature_insights_dropdown = ({ onClose }) => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (onClose) onClose(); // Close dropdown if function is passed
    navigate("/featured-insights"); // Navigate to insights page
  };

  return (
    <div className="p-6 px-8 mb-2">
      <div className="w-full px-8 mb-2">
        <h1 className="text-2xl font-semibold">All Industries</h1>
        <hr className="h-1 border-none bg-[radial-gradient(ellipse_at_center,_#03255b,_#e6e8ed)] mt-6 mb-1" />
      </div>

      <div className="flex flex-col gap-6">
        {/* Images Row */}
        <div className="flex gap-3 px-8">
          {[
            {
              id: "blogs",
              label: "Our Latest Blogs",
              src: "/images/trendingimages/trend1.png",
            },
            {
              id: "case",
              label: "Case Studies",
              src: "/images/trendingimages/trend2.png",
            },
            {
              id: "white",
              label: "White Paper",
              src: "/images/trendingimages/trend3.png",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="relative flex-1 overflow-hidden"
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-[350px] object-cover transition-transform duration-500 ease-in-out hover:scale-125"
              />
              <div className="absolute bottom-0 w-full flex justify-between items-center px-4 py-2 bg-black/40 backdrop-blur-sm rounded text-white text-md font-medium">
                <p>{item.label}</p>
                {hovered === item.id ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
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
          ))}
        </div>

        {/* Link Button */}
        <div className="text-center">
          <button
            onClick={handleNavigate}
            className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            View All Featured Insights
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature_insights_dropdown;
