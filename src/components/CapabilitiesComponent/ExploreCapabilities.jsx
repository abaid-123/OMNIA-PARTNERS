import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const capabilities = [
  {
    title: "Strategic Services",
    points: [
      "Strategy Development",
      "Mergers, Acquisitions & Valuation",
      "Risk Management",
      "Change & Transformation Management",
    ],
    image: "/images/blackimg.png",
    image2: "/images/circleimg.png",
  },
  {
    title: "Financial & Legal Services",
    points: [
      "Financial Planning & Management",
      "Intellectual Property & Licensing",
      "Legal & Regulatory",
      "Commercial Contracts",
    ],
    image: "/images/blackimg.png",
    image2: "/images/circleimg.png",
  },
  {
    title: "Marketing & Customer Relations",
    points: ["Customer Relationship Management", "Sales, Marketing & Branding"],
    image: "/images/blackimg.png",
    image2: "/images/circleimg.png",
  },
  {
    title: "Operational Excellence",
    points: [
      "Operational & Services Excellence",
      "Manufacturing & Quality Assurance",
      "Supply Chain Optimization",
    ],
    image: "/images/blackimg.png",
    image2: "/images/circleimg.png",
  },
  {
    title: "Human Resources & Organizational Development",
    points: [
      "Human Resources",
      "Performance & Salary Management",
      "Talent Acquisition & Professional Development",
      "Coaching Organizational Developments & Training",
      "Management Services & Staff Augmentation",
    ],
    image: "/images/blackimg.png",
    image2: "/images/circleimg.png",
  },
  {
    title: "Innovation & Technology",
    points: ["Technology IT", "Product & Services Development"],
    image: "/images/blackimg.png",
    image2: "/images/circleimg.png",
  },
  {
    title: "Sustainability & Social Responsibility",
    points: [],
    image: "/images/blackimg.png",
    image2: "/images/circleimg.png",
  },
];

const ExploreCapabilities = () => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <p className=" capitalize text-gray-500 pl-[12px] mb-1">
        All Capabilities
      </p>
      <div className="flex items-center justify-between pl-[12px] px-4">
        <h2 className="text-2xl capitalize md:text-3xl  font-bold mb-6">
          our innovative services for the modern era
        </h2>
        <div className="border p-1 rounded-full cursor-pointer">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
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
              stroke-width="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
      </div>
      <hr className="capability_hidden h-1 border-none bg-[radial-gradient(ellipse_at_center,_#03255b,_#e6e8ed)] mx-4 mb-1" />

      <div className="flex flex-wrap gap-1 p-2 items-center justify-center ">
        {capabilities.map((capability, index) => (
          <div
            key={index}
            onClick={() =>
              navigate(
                `/all_capabilities/${capability.title
                  .toLowerCase()
                  .replace(/ & | /g, "-")}`
              )
            }
            // navigate on click
            className="setwidth w-full relative group h-[300px] bg-white border p-5 rounded-md shadow hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer hover:bg-black hover:text-white"
            onMouseEnter={() => setHovered(capability.title)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Background Images */}
            <img
              src={capability.image}
              alt={capability.title}
              className="absolute w-full h-full object-cover opacity-10 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"
            />
            <img
              src={capability.image2}
              alt={capability.title}
              className="absolute w-full h-full object-cover opacity-100 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"
            />

            <div
              className={`absolute bottom-3 right- p-1 rounded-full  ${
                hovered === capability.title
                  ? "border border-white bg-black"
                  : ""
              }`}
            >
              {hovered === capability.title ? (
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

            {/* Card Content */}
            <div className="relative z-10">
              <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
              <ul className="text-sm space-y-1">
                {capability.points.map((point, idx) => (
                  <li key={idx}>» {point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCapabilities;
