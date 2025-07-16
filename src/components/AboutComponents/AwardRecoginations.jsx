import React from "react";

const AwardRecognitions = () => {
  return (
    <div className="bg-[#f4f8fd] py-14 px-4 sm:px-8 lg:px-20">
      {/* Title & Description */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        {/* Title with decorative lines */}
        <div className="flex items-center justify-center mb-3">
          <div className="h-[1px] w-16 bg-blue-300 mr-4" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Award & Recognitions
          </h2>
          <div className="h-[1px] w-16 bg-blue-300 ml-4" />
        </div>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br className="hidden sm:block" />
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
      </div>

      {/* White Box Placeholders */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="bg-white w-24 sm:w-28 md:w-32 lg:w-36 h-24 sm:h-28 md:h-32 lg:h-36 rounded-md shadow-sm"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AwardRecognitions;
