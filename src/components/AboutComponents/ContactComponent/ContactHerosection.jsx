import React, { useState } from "react";


const ContactHerosection = () => {
  return (
    <div
      className="industries-hero "
      style={{
        backgroundImage: "url('/images/About/Contact.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Content */}
      <div className="heroCotent z-10 max-w-6xl px-4 mx-auto pt-32 pb-16 text-left">
        <h1 className=" capitalize text-3xl sm:text-5xl mt-8 font-bold mb-6 leading-tight">
          Contact Us
        </h1>

        <p className="mb-8 text-sm sm:text-base text-gray-200 max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br className="hidden sm:block" />
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>

       

        <div className="Cookie_banner absolute bottom-12 right-36">
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

export default ContactHerosection;
