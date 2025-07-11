import React, { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Explore_automotive = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  const paragraph = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio reiciendis inventore quasi veniam rerum placeat, architecto quos culpa nisi! Voluptates ipsam ex corporis aperiam sint? Accusantium repellat eius eligendi fugiat? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit facere reprehenderit repudiandae autem, molestias, inventore sint aliquam dicta vero ipsum animi sunt enim, ex distinctio saepe dolore provident eveniet optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corporis, maxime consequuntur corrupti facilis inventore nam nostrum eius, repellat pariatur perferendis, nisi suscipit vitae aut consectetur eos sunt. Aperiam, cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perferendis a laudantium assumenda enim deleniti voluptatem eaque autem labore unde natus error excepturi, atque ipsam possimus. Aperiam corporis doloribus unde?`;
  return (
    <div className="p-8  ">
      {/* Overview */}
      <p className="text-sm text-gray-700 mb-1 px-4">Overview</p>
      <div className="flex gap-3 justify-between px-4 explore_auto_flex">
        {/* Heading with underline */}
        <div className="w-[100%] E_auto_wid ">
          <div className="mb-4 flex">
            <h1 className="capitalize font-semibold heading_w w-[35%] text-3xl">
              explore our automotive
            </h1>
            <hr className="block hr_show h-1  w-[50%] mt-7 border-none bg-[radial-gradient(ellipse_at_center,_#03255b,_#e6e8ed)]" />
          </div>
          <div className="relative">
            <p className="text-md text-gray-700 px-1 md:px-3">
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

        <div className="w-[20%] ex_a_img ">
          <img
            src="/images/industriesimages/Automotiveimages/explore_auto.png "
            className="w-full h-full"
            alt=""
          />
        </div>
      </div>
      {/* You can add more content here */}
    </div>
  );
};

export default Explore_automotive;
