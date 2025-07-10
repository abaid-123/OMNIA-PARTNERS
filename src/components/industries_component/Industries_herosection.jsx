import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Industries_herosection = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const bannerImages = ["/images/industriesimages/all_Indu.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };
  return (
    <div
      className="relative  bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bannerImages[currentImageIndex]})` }}
    >
      {/* Hero Content */}
      <div className="heroCotent relative z-10 max-w-6xl px-4 mx-auto pt-32 pb-16 text-left">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          All Industries
        </h1>

        <p className="mb-8 text-sm sm:text-base text-gray-200 max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br className="hidden sm:block" />
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>

        <Link
          to="#"
          className="herolink inline-flex items-center px-1 py-2 cursor-pointer md:px-2 md:py-2 mb-8 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
        >
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          Free Consultation
        </Link>

        <div className="Cookie_banner absolute right-1/12 bottom-1/12 ">
          <img
            src="/images/cookies_below.png"
            alt="icon"
            className=" h-[50px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Industries_herosection;
