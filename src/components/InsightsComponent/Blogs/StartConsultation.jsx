import React from "react";

const StartConsultation = () => {
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
      <div className="relative mx-auto max-w-7xl px-4 md:px-10 py-12">
        <h2 className="text-3xl font-normal sm:text-4xl lg:text-5xl">
          Let's start a consultation regarding to your bussiness
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-300">
          Stay ahead of the curve with our latest insights tailored to fuel your
          business’s expansion. Explore cutting‑edge strategies and trends
          designed to elevate your brand and drive success in today’s dynamic
          marketplace.
        </p>

        {/* Join our team button */}
        <button
          to="/contact"
          className="group mt-10 inline-flex items-center gap-4 rounded-full bg-blue-600 px-2 py-2 font-semibold shadow-lg transition hover:bg-blue-700"
        >
          <span className="flex p-1 items-center justify-center rounded-full bg-white transition group-hover:bg-slate-200">
            <svg
              class="w-6 h-6 text-blue-600"
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
          </span>
          Free Consultation
        </button>
      </div>
    </section>
  );
};

export default StartConsultation;
