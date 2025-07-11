import React from "react";

const Talkus = () => {
  return (
    <div
      style={{ backgroundImage: "url('/images/talkimage.png')" }}
      className="relative min-h-[250px] bg-cover bg-center"
    >
      <div className="p-[5%] ">
        <h1 className="font-medium text-3xl mb-3">Let's Talk With Us </h1>
        <div>
          <div className="md:block lg:flex justify-between">
            <p>
              "Let's connect and explore how our team can delve into <br /> your
              business model."
            </p>
            <div className="flex h-1/4 mt-3 lg:m-0">
              <input
                className="border text-gray-700 border-gray-200 p-1 mr-2 rounded-sm"
                type="text"
                placeholder="Email Address"
              />
              <button className="text-white bg-blue-700 cursor-pointer rounded-full px-2 hover:bg-blue-600">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talkus;
