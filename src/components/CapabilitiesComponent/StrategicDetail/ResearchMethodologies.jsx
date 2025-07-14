import React from "react";

const researchData = [
  {
    bg: "bg-yellow-100",
    title: "Heading for research",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    offset: false,
  },
  {
    bg: "bg-rose-100",
    title: "Heading for research",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    offset: true,
  },
  {
    bg: "bg-blue-100",
    title: "Heading for research",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    offset: false,
  },
  {
    bg: "bg-green-100",
    title: "Heading for research",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    offset: true,
  },
];

const ResearchMethodologies = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 py-12 bg-[#f9f9f9]">
      {/* Heading Section */}
      <p className="text-sm text-gray-500 mb-1">Methodologies</p>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 inline-block">
        Our Research
      </h2>
      <p className="text-gray-700 max-w-4xl mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>

      {/* Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {researchData.map((item, index) => (
          <div
            key={index}
            className={`w-full sm:w-[48%] lg:w-[22%] transform transition-transform duration-300 ${
              item.offset ? "lg:translate-y-8" : "" /* ⬅ shift only ≥ lg */
            }`}
          >
            <div
              className={`h-full min-h-[250px] p-6 rounded-md shadow-sm ${item.bg} flex flex-col`}
            >
              <div className="w-12 h-12 bg-white rounded mb-4" />
              <h3 className="text-md font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-800">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchMethodologies;
