import React from "react";

// Sample data
const industries = [
  {
    title: "Automotive",
    points: ["Rev Up Your Strategy", "Shift Into High Gear"],
    image: "/images/blackimg.png",
    image2:"/images/circleimg.png",
  },
  {
    title: "Aerospace & Defense",
    points: ["Elevate Operations", "Strategize With Precision"],
     image: "/images/blackimg.png",
    image2:"/images/circleimg.png",
  },
  {
    title: "Aircraft Modification & Certification",
    points: [
      "Certify Your Innovations",
      "Elevate Your Fleet",
      "Soar With Confidence",
    ],
     image: "/images/blackimg.png",
    image2:"/images/circleimg.png",
  },
  {
    title: "Healthcare",
    points: ["Healthcare Innovation Awaits", "Diagnose with Intelligence"],
     image: "/images/blackimg.png",
    image2:"/images/circleimg.png",
  },
  {
    title: "Automation & Robotics",
    points: ["Automate Your Success", "Innovate with Robotics"],
     image: "/images/blackimg.png",
    image2:"/images/circleimg.png",
  },
  {
    title: "Public Sector",
    points: ["Enhance Civic Engagement", "Govern with Vision"],
     image: "/images/blackimg.png",
    image2:"/images/circleimg.png",
  },
  {
    title: "Telecommunications",
    points: ["Network with Excellence", "Signal Your Success"],
     image: "/images/blackimg.png",
    image2:"/images/circleimg.png",
  },
  {
    title: "Intralogistics",
    points: [
      "Streamline Your Supply Chain",
      "Optimize with Intelligence",
      "Navigate Logistics Complexity",
    ],
     image: "/images/blackimg.png",
    image2:"/images/circleimg.png",
  },
];

const Explore_industries = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Explore Our Expertise
        <hr className="capability_hidden h-1 border-none bg-[radial-gradient(ellipse_at_center,_#03255b,_#e6e8ed)] mt-6 mb-1" />
      </h2>

      <div className="flex flex-wrap gap-4 h-[600px]">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="relative group w-[calc(25%-1rem)] bg-white border p-5 rounded-md shadow hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer hover:bg-black hover:text-white"
          >
            {/* Hover Background Image */}
            <img
              src={industry.image}
              alt={industry.title}
              className="absolute w-full h-full object-cover opacity-10 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"
            />
            <img
              src={industry.image2}
              alt={industry.title}
              className="absolute w-full h-full object-cover opacity-110 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"
            />

            {/* Card Content */}
            <div className="relative z-10 ">
              <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
              <ul className="text-sm space-y-1">
                {industry.points.map((point, idx) => (
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

export default Explore_industries;
