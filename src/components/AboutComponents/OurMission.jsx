import React from "react";

// Temporary placeholder image and alt text
const expoimage = "/images/About/mission.png"; // Replace with your actual path
const name = "Our Mission Image";

const OurMission = () => {
  const paragraph = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio reiciendis inventore quasi veniam rerum placeat, architecto quos culpa nisi! Voluptates ipsam ex corporis aperiam sint? Accusantium repellat eius eligendi fugiat? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit facere reprehenderit repudiandae autem, molestias, inventore sint aliquam dicta vero ipsum animi sunt enim, ex distinctio saepe dolore provident eveniet optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corporis, maxime consequuntur corrupti facilis inventore nam nostrum eius, repellat pariatur perferendis, nisi suscipit vitae aut consectetur eos sunt. Aperiam, cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perferendis a laudantium assumenda enim deleniti voluptatem eaque autem labore unde natus error excepturi, atque ipsam possimus. Aperiam corporis doloribus unde?`;

  return (
    <div className="px-6 sm:px-10 lg:px-20 py-8">
      {/* Overview Section */}
      <p className="text-sm text-gray-700 mb-1">Overview</p>

      <div className="flex flex-col lg:flex-row gap-6 justify-between">
        {/* Left Text Section */}
        <div className="w-full lg:w-[75%]">
          <div className="mb-4 flex items-center gap-4">
            <h1 className="capitalize font-semibold text-3xl w-fit">
              Our Mission
            </h1>
            <hr className="flex-1 h-1 mt-4 border-none bg-gradient-to-r from-[#03255b] to-[#e6e8ed]" />
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">{paragraph}</p>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-[25%]">
          <img
            src={expoimage}
            alt={name}
            className="w-full h-[32px] sm:h-[321px] lg:h-full object-cover rounded-md shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
