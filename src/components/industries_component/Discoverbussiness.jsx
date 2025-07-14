import React from "react";

const Discoverbussiness = () => {
  return (
    <div className="bg-gradient-to-br from-[#0b2634] to-[#000000] text-white w-full">
      <div className=" mx-auto text-center  p-4 sm:px-6 md:px-12 py-12 sm:py-12 lg:py-">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl   font-bold leading-tight mb-4">
          Discover Our Newest Insights To Propel{" "}
          <br className="hidden sm:block" />
          Your Business Growth
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-base text-gray-300 mb-8 px-[5%] leading-relaxed">
          Stay ahead of the curve with our latest insights tailored to fuel your
          business expansion. Explore cutting-edge strategies and trends
          designed to elevate your brand and drive success in today’s dynamic
          marketplace.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center ">
          <button className="flex items-center cursor-pointer gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-2 rounded-full text-sm sm:text-base transition duration-300">
            <span className="text-lg px-1 bg-white rounded-full text-blue-600">
              ➜
            </span>{" "}
            Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discoverbussiness;
