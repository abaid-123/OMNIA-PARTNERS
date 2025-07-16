import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CapabilityInsights = ({ name, types = [], capability }) => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const capabilities = types.map((title, i) => ({
    id: i + 1,
    title,
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore atque exercitationem nobis",
    image: "/images/blackimg.png",
    image2: "/images/circleimg.png",
  }));

  const getSlug = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/\s*&\s*/g, "-")
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  return (
    <div className="p-8">
      <h2 className="text-2xl md:text-3xl pl-3 font-bold mb-6">
        Explore Our Expertise
        <hr className="capability_hidden h-1 border-none bg-[radial-gradient(ellipse_at_center,_#03255b,_#e6e8ed)] mt-6 mb-1" />
      </h2>

      <div className="flex flex-wrap gap-1 p-2 items-center">
        {capabilities.map((capabilityData) => (
          <div
            key={capabilityData.id}
            onClick={() =>
              navigate(
                `/all_capabilities/${getSlug(capability)}/${getSlug(
                  capabilityData.title
                )}`
              )
            }
            onMouseEnter={() => setHovered(capabilityData.title)}
            onMouseLeave={() => setHovered(null)}
            className="setwidth w-full relative group h-[300px] bg-white border p-5 rounded-md shadow hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer hover:bg-black hover:text-white"
          >
            <img
              src={capabilityData.image}
              alt={capabilityData.title}
              className="absolute w-full h-full object-cover opacity-10 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"
            />
            <img
              src={capabilityData.image2}
              alt={capabilityData.title}
              className="absolute w-full h-full object-cover opacity-100 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"
            />

            <div
              className={`absolute bottom-3 right-4 p-1 rounded-full ${
                hovered === capabilityData.title
                  ? "border border-white bg-black"
                  : ""
              }`}
            >
              {hovered === capabilityData.title ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
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
                  className="w-5 h-5 text-black transition-transform duration-300"
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

            <div className="relative z-10">
              <h3 className="text-lg font-semibold mb-2">
                {capabilityData.title}
              </h3>
              <p className="text-sm">{capabilityData.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CapabilityInsights;
