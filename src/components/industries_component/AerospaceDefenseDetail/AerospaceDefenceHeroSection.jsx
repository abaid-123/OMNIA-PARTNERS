import React from "react";
import { useNavigate } from "react-router-dom";

const AerospaceDefenceHeroSection = () => {
  const navigate = useNavigate();

  const bannerImages = [
    "/images/industriesimages/Automotiveimages/automotive_img.jpg",
  ];
  const [currentImageIndex] = React.useState(0);
  return (
    <div
      className="industries-hero"
      style={{ backgroundImage: `url(${bannerImages[currentImageIndex]})` }}
    >
      <div className="heroCotent relative z-10 max-w-6xl px-4 mx-auto pt-32 pb-16 text-left">
        {/* ⏪ Back Text with Arrow */}
        <div
          onClick={() => navigate(-1)}
          className="text-white text-sm mb-1 cursor-pointer inline-flex items-center"
        >
          <span className="text-lg mr-1">«</span> Back
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Automotive
        </h1>

        <p className="mb-8 text-sm sm:text-base text-gray-200 max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br className="hidden sm:block" />
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>

        <div className="Cookie_banner absolute right-1/12 top-[470px]">
          <img
            src="/images/cookies_below.png"
            alt="icon"
            className="h-[50px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AerospaceDefenceHeroSection;
