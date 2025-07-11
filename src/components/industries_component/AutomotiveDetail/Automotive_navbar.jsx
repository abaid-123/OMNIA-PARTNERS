import React, { useState } from "react";
import { HiOutlineShare, HiOutlineBookmark, HiBookmark } from "react-icons/hi2";

const Automotive_navbar = () => {
  const [bookmarked, setBookmarked] = useState(false);

  const menuItems = [
    { label: "Overview", id: "overview" },
    { label: "How We Can Help", id: "how-we-can-help" },
    { label: "Case Studies", id: "case-studies" },
    { label: "Our Teams", id: "our-teams" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100, // adjust offset if needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center px-4 py-3">
        {/* Left Title */}
        <div className="mr-[60px] font-semibold text-base text-black whitespace-nowrap">
          Automotive
        </div>

        {/* Center Menu */}
        <div className="flex-1 mx-4 overflow-x-auto scrollbar-hide">
          <ul className="flex items-center gap-3 text-sm text-gray-500 whitespace-nowrap">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleScroll(item.id)}
                className={`cursor-pointer hover:text-blue-600 ${
                  index === 0
                    ? "text-blue-600 hover:border-b-2 font-medium"
                    : "hover:border-b-2"
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Icons */}
        <div className="flex gap-2 flex-shrink-0">
          <button className="p-2 rounded-full border cursor-pointer transition">
            <HiOutlineShare className="w-5 h-5 hover:text-blue-600 text-gray-600" />
          </button>
          <button
            onClick={() => setBookmarked(!bookmarked)}
            className="p-2 rounded-full border cursor-pointer transition"
          >
            {bookmarked ? (
              <HiBookmark className="w-5 h-5 text-blue-600" />
            ) : (
              <HiOutlineBookmark className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Automotive_navbar;
