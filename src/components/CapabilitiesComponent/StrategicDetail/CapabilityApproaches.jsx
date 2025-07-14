import React from "react";

const CapabilityApproaches = ({backgroundImage3}) => {
  return (
    <div className="bg-[#0F1116] text-white py-10 px-4 md:px-16">
      {/* Top Image */}
      <div className="w-full mb-10">
        <img
          src={backgroundImage3}
          alt="Space"
          className="w-full h-auto rounded"
        />
      </div>

      {/* Text + Cards */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
        {/* Left Text Section */}
        <div className="lg:w-1/2">
          <p className="text-sm text-gray-400 mb-2">Approaches</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Our Approaches
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>

        {/* Right Cards Section */}
        <div className="flex flex-col md:flex-row gap-6 lg:w-1/2">
          {/* Card 1 */}
          <div className="bg-[#0047FF] p-6 rounded-md text-white shadow-md w-full">
            <h3 className="text-3xl font-bold mb-2">+360k</h3>
            <p className="uppercase text-sm font-semibold mb-2">Approaches</p>
            <p className="text-sm text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1DD36C] p-6 rounded-md text-white shadow-md w-full">
            <h3 className="text-3xl font-bold mb-2">+360k</h3>
            <p className="uppercase text-sm font-semibold mb-2">Approaches</p>
            <p className="text-sm text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapabilityApproaches;
