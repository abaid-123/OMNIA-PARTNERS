import React from "react";

const teamMembers = [
  { id: 1, img: "/images/Person4.png", name: "John Doe", role: "Omnia Partner" },
  { id: 2, img: "/images/Person2.png", name: "Jane Smith", role: "Team Lead" },
  { id: 3, img: "/images/Person1.png", name: "Mark Lee", role: "Project Manager" },
  { id: 4, img: "/images/Person3.png", name: "Emma Brown", role: "UI Designer" },
];

const AutoIndustryTeam = () => {
  return (
    <div className="p-8">
      {/* Top Text */}
      <p className="text-sm text-gray-600 mb-1 capitalize">our teams</p>
      <div className="w-full flex items-center gap-4">
        <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl capitalize lg:w-[40%] md:w-[50%]">
          the core of our team
        </h1>
        <hr className="h-1 block hr_show w-full mt-4 border-none bg-[radial-gradient(ellipse_at_center,_#03255b,_#e6e8ed)]" />
      </div>

      {/* Team Cards */}
      <div className="mt-6 flex flex-wrap justify-start gap-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative group overflow-hidden w-[47%] sm:w-[23%] rounded-md"
          >
            {/* Image with zoom effect */}
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay and text */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-md font-semibold">{member.name}</h3>
              <p className="text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoIndustryTeam;
