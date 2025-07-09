import React, { useRef, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

const industriesData = [
  {
    id: 1,
    title: "Automotive",
    image: "/images/industriesimages/industry3.png",
  },
  {
    id: 2,
    title: "Aerospace & Defense",
    image: "/images/industriesimages/industry2.png",
  },
  {
    id: 3,
    title: "Aircraft Modification & Certification",
    image: "/images/industriesimages/industry1.png",
  },
  {
    id: 4,
    title: "Healthcare",
    image: "/images/industriesimages/industry5.png",
  },
  {
    id: 5,
    title: "Logistics",
    image: "/images/industriesimages/industry4.png",
  },
  {
    id: 6,
    title: "Aerospace & Defense",
    image: "/images/industriesimages/industry2.png",
  },
  {
    id: 7,
    title: "Automotive",
    image: "/images/industriesimages/industry3.png",
  },
];

const Industries = () => {
  const [hovered, setHovered] = useState(null);

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -100, // Adjust scroll amount as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 100,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className=" bg-white p-[5%]  ">
      {/* Heading */}
      <div className="mb-6 pl-8">
        <p className="text-sm text-gray-500">All Industries: 03</p>
      </div>
      <div className="flex justify-between border-b border-blue-700 ">
        <div className=" inline-block">
          <h1 className="text-4xl md:text-3xl font-bold px-4 md:px-8 pb-4 md:pb-8 ">
            Industries
          </h1>
        </div>
        <div className="md:flex items-center justify-end gap-2 mb-6 px-4 header-Carousel">
          {/* Left Arrow */}
          <ChevronLeftIcon
            className="w-5 h-5 text-gray-600 cursor-pointer"
            onClick={scrollLeft}
          />

          {/* Scrollable Thumbnails */}
          <div
            ref={scrollRef}
            className="flex space-x-2 overflow-x-auto max-w-[300px] cursor-pointer scrollbar-hide"
          >
            {industriesData.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.title}
                className="w-14 h-10 object-cover rounded-md border border-gray-200"
              />
            ))}
          </div>

          {/* Right Arrow */}
          <ChevronRightIcon
            className="w-5 h-5 text-gray-600 cursor-pointer"
            onClick={scrollRight}
          />

          {/* Search Icon */}
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-600 cursor-pointer ml-2" />
        </div>
      </div>

      {/* Top Thumbnail Carousel */}

      <div className="">
        {/* Top Section */}
        <div className="flex md:flex-row gap-1  min-h-[300px] md:h-[350px] top_sectionimage">
          {/* Left Large Image */}
          <div
            className="w-full md:w-[58%] relative overflow-hidden"
            onMouseEnter={() => setHovered("Automotive")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={industriesData[0].image}
              alt="Automotive"
              className="w-full h-[300px] md:h-[300px] object-cover border-0 transition-transform duration-500 ease-in-out hover:scale-125"
            />
            <h1 className="absolute top-4 left-1 px-3 right-0 text-white text-3xl font-bold z-10">
              01
            </h1>

            <div className="absolute w-full bottom-[0%] left-4 right-4 flex justify-between items-center px-4 py-2 bg-black/40 backdrop-blur-sm text-white text-sm font-medium">
              <p>Automotive</p>
              {hovered === "Automotive" ? (
                // Down Arrow
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M7 7h10v10"
                  />
                </svg>
              ) : (
                // Right Arrow
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              )}
            </div>
          </div>

          {/* Right Two Images */}
          <div className="flex  md:flex-row  md:w-[42%] gap-1 top_sectionimage">
            {/* Top Right */}
            <div
              className="w-full h-full relative overflow-hidden"
              onMouseEnter={() => setHovered("Aerospace")}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={industriesData[1].image}
                alt="Aerospace & Defense"
                className="w-full h-[300px] md:h-[300px] object-cover border-0 transition-transform duration-500 ease-in-out hover:scale-125"
              />
              <h1 className="absolute top-4 left-1 px-3 right-0 text-white text-3xl font-bold z-10">
                02
              </h1>

              <div className="absolute w-full bottom-[0%] left-4 right-4 flex justify-between items-center px-4 py-2 bg-black/40 backdrop-blur-sm text-white text-sm font-medium">
                <p>Aerospace & Defense</p>
                {hovered === "Aerospace" ? (
                  // Down Arrow
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M7 7h10v10"
                  />
                </svg>
                ) : (
                  // Right Arrow
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Bottom Right */}
            <div
              className="w-full md:w-[50%] relative overflow-hidden"
              onMouseEnter={() => setHovered("Aircraft")}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={industriesData[2].image}
                alt="Aircraft Modification & Certification"
                className="w-full h-[300px] md:h-[300px] object-cover border-0 transition-transform duration-500 ease-in-out hover:scale-125"
              />
              <h1 className="absolute top-4 left-1 px-3 right-0 text-white text-3xl font-bold z-10">
                03
              </h1>

              <div className="absolute w-full bottom-[0%] left-4 right-4 flex justify-between items-center px-4 py-2 bg-black/40 backdrop-blur-sm rounded text-white text-sm font-medium">
                <p>Aircraft Modification & Certification</p>
                {hovered === "Aircraft" ? (
                  // Down Arrow
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M7 7h10v10"
                  />
                </svg>
                ) : (
                  // Right Arrow
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex md:flex-row gap-1  min-h-[300px] md:h-[350px] mt-1 top_sectionimage">
          {/* Bottom Left */}
          <div
            className="w-full md:w-[40%] relative overflow-hidden"
            onMouseEnter={() => setHovered("Healthcare")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={industriesData[3].image}
              alt="Healthcare"
              className="w-full h-[300px] md:h-[350px] object-cover border-0 transition-transform duration-500 ease-in-out hover:scale-125"
            />
            <h1 className="absolute top-4 left-1 px-3 right-0 text-white text-3xl font-bold z-10">
              04
            </h1>

            <div className="absolute w-full bottom-0 left-0 flex justify-between items-center px-4 py-2 bg-black/40 backdrop-blur-sm rounded text-white text-sm font-medium z-10">
              <p>Healthcare</p>
              {hovered === "Healthcare" ? (
                // Down Arrow
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M7 7h10v10"
                  />
                </svg>
              ) : (
                // Right Arrow
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              )}
            </div>
          </div>

          {/* Bottom Right */}
          <div
            className="w-full md:w-[60%] relative overflow-hidden"
            onMouseEnter={() => setHovered("Logistics")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={industriesData[4].image}
              alt="Logistics"
              className="w-full h-[300px] md:h-[350px]  object-cover border-0 transition-transform duration-500 ease-in-out hover:scale-125"
            />
            <h1 className="absolute top-4 left-1 px-3 right-0 text-white text-3xl font-bold z-10">
              05
            </h1>

            <div className="absolute w-full bottom-[0%] left-4 right-4 flex justify-between items-center px-4 py-2 bg-black/40 backdrop-blur-sm rounded text-white text-sm font-medium">
              <p>Logistics</p>
              {hovered === "Logistics" ? (
                // Down Arrow
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M7 7h10v10"
                  />
                </svg>
              ) : (
                // Right Arrow
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Explore Industries Button */}
      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white px-2 md:px-6 py-2  rounded-full hover:bg-blue-700 transition flex items-center gap-2 cursor-pointer mx-auto">
          <span>Explore Industries</span>
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Industries;
