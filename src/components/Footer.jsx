import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0c0c0c] text-white pt-10 px-8 lg:px-20">
      {/* Newsletter */}
      <div className="border-b border-blue-700 lg:flex pb-1 md:pb-2  sm:block md:justify-between    md:items-center sm:px-10 px-4 gap-4">
        <div>
          <h2 className="lg:text-3xl text-2xl md:mb-0 mb-6 md:w-2/5 font-semiblod">
            Join Our Newsletter To <br /> Keep Up To Date With Us!
          </h2>
        </div>

        <div className="relative flex w-[50%] footer_width  mt-2 md:m-5">
          <input
            type="email"
            placeholder=" Enter your email"
            className=" py-2.5 bg-[#1a1a1a] border border-gray-600 rounded px-4 text-sm text-white  sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4   focus:outline-none"
          />
          {/* <div className="absolute bottom-[30px] md:bottom-[30px] left-3 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                clipRule="evenodd"
              />
            </svg>
          </div> */}
          <button className=" border-2 cursor-pointer border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white duration-300 text-sm lg:mb-0 mb-4 px-1 md:px-5  md:py-2.5 rounded-full">
            Subscribe
          </button>
        </div>
      </div>

      <div className=" gap-y-8 md:gap-x-8 border-b lg:flex   md:justify-between  md:items-center border-blue-700 py-8">
        {/* Company Info */}
        <div className="md:w-1/6">
          <h3 className="font-bold mb-2">OMNIA PARTNERS LTD</h3>
          <p className="text-sm text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        {/* Platform */}
        <div className="md:w-1/6  lg:flex lg:items-center justify-center ">
          {/* Platform */}
          <div className="md:w-1/6 w-full px-6">
            <h4 className="text-gray-300 font-semibold mb-2">Platform</h4>
            <ul className="text-sm text-gray-400 space-y-1 ">
              <li>Industries</li>
              <li>Capabilities</li>
              <li>Featured Insight</li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:w-1/6 w-full px-6">
            <h4 className="text-gray-300 font-semibold mb-2">Support</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Career</li>
            </ul>
          </div>

          {/* Others */}
          <div className="md:w-1/6 w-full px-6">
            <h4 className="text-gray-300 font-semibold mb-2">Others</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>Local language</li>
              <li>Accessibility</li>
              <li>Subscribe</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      {/* Bottom Footer */}
      <div className="w-full lg:flex lg:p-3 md:flex-row justify-between items-center text-xs text-gray-500 py-6 gap-3 text-center md:text-left">
        <p>Omnia Partners LTD © 2024 Omnia | All Rights Reserved</p>

        <div className="flex flex-wrap justify-center gap-4 py-1">
          <a href="#" className="hover:text-white">
            Terms of Use
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Cookies
          </a>
        </div>

        {/* Social Icons (SVG) */}
        <div className="flex space-x-3 justify-center py-1 md:justify-end">
          <a
            href="#"
            className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
          >
            {/* Instagram SVG */}
            <svg
              fill="currentColor"
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm8.75 2.25a.75.75 0 000 1.5.75.75 0 000-1.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
            </svg>
          </a>

          <a
            href="#"
            className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
          >
            {/* Facebook SVG */}
            <svg
              fill="currentColor"
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-7H8v-3h2.44V9.5c0-2.4 1.43-3.75 3.62-3.75 1.05 0 2.15.19 2.15.19v2.37h-1.21c-1.2 0-1.57.74-1.57 1.5V12h2.67l-.43 3h-2.24v7C18.34 21.12 22 16.99 22 12z" />
            </svg>
          </a>

          <a
            href="#"
            className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
          >
            {/* Twitter (X) SVG */}
            <svg
              fill="currentColor"
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M20.999 3.999h-3l-5 6.2-5-6.2h-3l6.4 7.6-6.4 8.4h3l5-6.2 5 6.2h3l-6.4-7.6 6.4-8.4z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
