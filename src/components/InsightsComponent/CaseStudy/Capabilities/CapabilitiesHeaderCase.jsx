import React, { useRef, useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

const tabs = [
  "Strategic Services",
  "Financial & Legal Services",
  "Marketing & Customer Relations",
  "Marketing & Customer Relations",
  "Operational Excellence",
  "Human Capital",
];

const CapabilitiesHeaderCase = ({ onBlogChange }) => {
  const [activeTab, setActiveTab] = useState("Strategic Services");
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scrollRef = useRef(null);

  const handleChange = (e) => {
    onBlogChange(e.target.value);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const distance = 150;
      const newScroll =
        direction === "right" ? scrollLeft + distance : scrollLeft - distance;
      scrollRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  };

  const handleScrollVisibility = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    handleScrollVisibility();
    const scrollEl = scrollRef.current;
    scrollEl.addEventListener("scroll", handleScrollVisibility);
    return () => scrollEl.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  return (
    <div className="px-4 md:px-10 lg:px-20 relative">
      <div className="flex  md:flex-row items-start md:items-center justify-between relative">
        {/* Scroll Buttons */}
        {showLeft && (
          <button
            className="absolute left-0 top-2 z-10 bg-white shadow p-1 rounded-full  hidden md:block"
            onClick={() => scroll("left")}
          >
            <GoArrowLeft />
          </button>
        )}

        {/* Tabs Scrollable */}
        <div className="overflow-x-hidden  hidden md:block" ref={scrollRef}>
          <div className="flex gap-6 text-sm md:text-base font-medium text-gray-500 whitespace-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-1 ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "hover:text-black"
                } transition`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        {showRight && (
          <button
            className="absolute right-[270px] top-2 z-10 bg-white shadow p-1 rounded-full"
            onClick={() => scroll("right")}
          >
            <GoArrowRight />
          </button>
        )}

        {/* Dropdown & Search */}
        <div className="flex items-center gap-4 mt-3 md:mt-0 ml-auto shrink-0">
          <select
            value="capabilities"
            onChange={handleChange}
            className="text-sm md:text-base border-b-2 border-gray-500 border-0 mb-1 outline-none bg-transparent font-medium"
          >
            <option value="omnia">Omnia Case Studies</option>
            <option value="capabilities">Capabilities Case Studies</option>
            <option value="industries">Industries Case Studies</option>
          </select>

          <button className="text-gray-600 hover:text-black transition ml-1">
            <FiSearch size={20} />
          </button>
        </div>
      </div>

      <hr className="w-full border-t border-gray-200 mt-2" />
    </div>
  );
};

export default CapabilitiesHeaderCase;
