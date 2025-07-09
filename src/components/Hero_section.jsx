import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "./stylecomponents/Hero_section.css";

const Hero_section = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const bannerImages = [
    "/images/hero_section.png",
    "/images/thumb4.jpg",
    "/images/hero_section.png",
  ];
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
          Emphasizing Expertise <br />
          <span className="">And Core Values.</span>
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
        {showCookieBanner && (
          <div className="flex justify-between">
            {/* Cookie Banner */}
            <div className="relative mt-10 bg-white text-black py-4 px-4 w-full max-w-4xl rounded-md shadow-md">
              <div className="flex md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-start md:items-center gap-4">
                  <div
                    className="cookiesimage w-10 h-10 bg-no-repeat cursor-p bg-center bg-contain flex-shrink-0"
                    style={{ backgroundImage: "url('/images/cookies.png')" }}
                  ></div>

                  <p className="text-sm max-w-md">
                    Our website uses cookies. By continuing navigating, we
                    assume your permission to deploy cookies as detailed in our
                    Privacy Policy.
                  </p>
                </div>

                <div className="cookie-buttons  flex gap-2 flex-wrap ">
                  <button className="accept-btn cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700">
                    Accept cookies
                  </button>
                  <button
                    onClick={() => setShowCookieBanner(false)}
                    className="decline-btn border cursor-pointer border-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-100"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>

            <div className="Cookie_banner flex items-center cursor-pointer justify-center ml-4 mt-10">
              <img
                src="/images/cookies_below.png"
                alt="icon"
                className=" h-[50px] object-contain"
              />
            </div>
          </div>
        )}

        {/* Slider Progress Line */}
        <div className="  flex justify-between text-center p-3">
          <div className="flex w-1/3 mt-4">
            {bannerImages.map((_, index) => (
              <div key={index} className=" flex-1 flex items-end">
                <div
                  className={`w-full transition-all duration-500 relative ${
                    index === currentImageIndex
                      ? "bg-blue-700 h-3 absolute top-1"
                      : "bg-blue-200 h-[2px]"
                  }`}
                ></div>
              </div>
            ))}
          </div>

          {/* Slider Navigation */}
          <div className="flex justify-end items-center gap-4 mt-6">
            {/* Left Arrow */}

            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full cursor-pointer bg-black bg-opacity-60 flex items-center justify-center hover:bg-opacity-80"
            >
              <svg
                class="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14M5 12l4-4m-4 4 4 4"
                />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full cursor-pointer bg-blue-600 flex items-center justify-center hover:bg-blue-700"
            >
              <svg
                class="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero_section;
