import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Accept `industry` slug as a prop (like "automotive", "aerospace-defense")
const AutomotiveInsights = ({ types = [], industry }) => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  // Create card data from types
  const industries = types.map((title, i) => ({
    id: i + 1,
    title,
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore atque exercitationem nobis",
    image: "/images/blackimg.png", // Replace with real background if needed
    image2: "/images/circleimg.png", // Replace with real overlay image if needed
  }));

  return (
    <div className="p-8">
      <h2 className="text-2xl md:text-3xl pl-3 font-bold mb-6">
        Explore Our Expertise
        <hr className="capability_hidden h-1 border-none bg-[radial-gradient(ellipse_at_center,_#03255b,_#e6e8ed)] mt-6 mb-1" />
      </h2>

      <div className="flex flex-wrap gap-1 p-2 items-center">
        {industries.map((industryData) => (
          <div
            key={industryData.id}
            onClick={() =>
              navigate(
                `/all_industries/${industry}/${industryData.title
                  .toLowerCase()
                  .replace(/ & | /g, "-")
                  .replace(/\s+/g, "-")}`
              )
            }
            onMouseEnter={() => setHovered(industryData.title)}
            onMouseLeave={() => setHovered(null)}
            className="setwidth w-full relative group h-[300px] bg-white border p-5 rounded-md shadow hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer hover:bg-black hover:text-white"
          >
            <img
              src={industryData.image}
              alt={industryData.title}
              className="absolute w-full h-full object-cover opacity-10 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"
            />
            <img
              src={industryData.image2}
              alt={industryData.title}
              className="absolute w-full h-full object-cover opacity-100 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"
            />

            <div className="absolute bottom-3 right-3">
              <div className="p-1 hover:border hover:border-white hover:rounded-full transition duration-300">
                {hovered === industryData.title ? (
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
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                )}
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-lg font-semibold mb-2">{industryData.title}</h3>
              <p className="text-sm">{industryData.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutomotiveInsights;
