import React from "react";
import { Link } from "react-router-dom";

const Hiring = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-black via-[#0c0c0c] to-[#003b57] text-white">
      {/* Left slim gradient bar */}
      <span aria-hidden className="absolute left-0 top-0 h-full w-[4px]" />

      {/* Dotted background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-10 lg:px-20 lg:py-20">
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">We’re Hiring</h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-300">
          Stay ahead of the curve with our latest insights tailored to fuel your
          business’s expansion. Explore cutting‑edge strategies and trends
          designed to elevate your brand and drive success in today’s dynamic
          marketplace.
        </p>

        {/* Join our team button */}
        <Link
          to="/contact"
          className="group mt-10 inline-flex items-center gap-4 rounded-full bg-blue-600 px-2 py-2 font-semibold shadow-lg transition hover:bg-blue-700"
        >
          <span className="flex p-2 items-center justify-center rounded-full bg-white transition group-hover:bg-slate-200">
            <svg
              className="h-5 w-6 text-blue-600 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
          Join our team
        </Link>
      </div>
    </section>
  );
};

export default Hiring;
