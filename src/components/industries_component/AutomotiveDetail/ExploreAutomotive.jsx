import React, { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const ExploreAutomotive = ({
  name = "Automotive", // default name
  expoimage = "/images/industriesimages/Automotiveimages/explore_auto.png", // default image
}) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const paragraph = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio reiciendis inventore quasi veniam rerum placeat, architecto quos culpa nisi! Voluptates ipsam ex corporis aperiam sint? Accusantium repellat eius eligendi fugiat? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit facere reprehenderit repudiandae autem, molestias, inventore sint aliquam dicta vero ipsum animi sunt enim, ex distinctio saepe dolore provident eveniet optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corporis, maxime consequuntur corrupti facilis inventore nam nostrum eius, repellat pariatur perferendis, nisi suscipit vitae aut consectetur eos sunt. Aperiam, cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perferendis a laudantium assumenda enim deleniti voluptatem eaque autem labore unde natus error excepturi, atque ipsam possimus. Aperiam corporis doloribus unde?`;

  return (
    <div className="p-[3%]">
      {/* Overview Section */}
      <p className="text-sm text-gray-700  mb-1 ">Overview</p>
      <div className="flex gap-3 justify-between  explore_auto_flex">
        {/* Left Text Section */}
        <div className="w-full E_auto_wid">
          <div className="mb-4 flex ">
            <h1 className="capitalize font-semibold heading_w w-[35%] text-3xl">
              explore our {name.toLowerCase()}
            </h1>
            <hr className="block hr_show h-1 w-[50%] mt-7 border-none bg-[radial-gradient(ellipse_at_center,_#03255b,_#e6e8ed)]" />
          </div>

          <div className="relative">
            <p className="text-md text-gray-700 px-1 md:px-1">
              {showFullText ? paragraph : paragraph.slice(0, 700) + "..."}
            </p>

            <button
              className="flex items-center cursor-pointer text-black text-sm mt-2 px-1 md:px-3"
              onClick={toggleText}
            >
              {showFullText ? (
                <>
                  <ChevronDownIcon className="h-4 w-4 mr-1" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronRightIcon className="h-4 w-4 mr-1" />
                  Show More
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-[20%] ex_a_img">
          <img
            src={expoimage}
            alt={name}
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreAutomotive;
