import React, { useState } from "react";
import {
  HiOutlineArrowRight,
  HiOutlineBookmark,
  HiBookmark,
} from "react-icons/hi2";

const AutomotiveHelpClient = ({name = "Automotive",industry}) => {
  // 🔵 all bookmarked card IDs live here
  const [bookmarkedIds, setBookmarkedIds] = useState(new Set());

  // be sure every card has a UNIQUE id
  const cardData = [
    { id: 1, img: "/images/industriesimages/Automotiveimages/Cardimg4.png" },
    { id: 2, img: "/images/industriesimages/Automotiveimages/Cardimg3.png" },
    { id: 3, img: "/images/industriesimages/Automotiveimages/Cardimg2.png" },
    { id: 4, img: "/images/industriesimages/Automotiveimages/Cardimg1.png" },
  ];

  // helper to toggle bookmark status for one card
  const toggleBookmark = (id) =>
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <div className="p-8">
      {/* ========= Heading ========= */}
      <p className="text-sm text-gray-700 mb-1 capitalize">case studies</p>
      <div className="w-full flex items-center gap-4 ">
        <h1 className="capitalize font-semibold heading_w lg:w-[50%] md:w-[60%] text-xl md:text-2xl lg:text-3xl">
          how we've helped clients
        </h1>
        <hr className="h-1 block hr_show w-full mt-6 border-none bg-[radial-gradient(ellipse_at_center,_#03255b,_#e6e8ed)]" />
      </div>

      {/* ========= Cards ========= */}
      <div className="mt-8 flex flex-wrap gap-6">
        {cardData.map(({ id, img }) => (
          <div
            key={id}
            className= " cursor-pointer w-full sm:w-[48%] lg:w-[23%] bg-white shadow-md border border-gray-200 rounded-md overflow-hidden flex flex-col"
          >
            <img
              src={img}
              alt="Industry"
              className="h-48 w-full object-cover"
            />

            <div className="p-4 flex-grow">
              <h2 className="text-md font-semibold capitalize">{industry}</h2>
              <p className="text-sm text-gray-600 mt-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className="flex items-center justify-between px-4 pb-4">
              {/* share icon just for show */}
              <HiOutlineArrowRight className="w-5 h-5 text-gray-700 cursor-pointer" />

              {/* bookmark toggle */}
              <button
                onClick={() => toggleBookmark(id)}
                className=" rounded-full  transition"
              >
                {bookmarkedIds.has(id) ? (
                  <HiBookmark className="w-5 h-5 text-blue-600" />
                ) : (
                  <HiOutlineBookmark className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutomotiveHelpClient;
