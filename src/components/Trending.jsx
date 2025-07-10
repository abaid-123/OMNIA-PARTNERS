import React, { useState } from "react";
import "./stylecomponents/Trending.css";

const Trending = () => {
  const [hovered, setHovered] = useState(null);
  const [activeSection, setActiveSection] = useState("omnia");
  const [currentIndex, setCurrentIndex] = useState(0);

  const [openSections, setOpenSections] = useState({
    omnia: true,
    sights: false,
    aroundWeb: false,
  });

  const toggleSection = (sectionName) => {
    setOpenSections({
      omnia: sectionName === "omnia",
      sights: sectionName === "sights",
      aroundWeb: sectionName === "aroundWeb",
    });
    setActiveSection(sectionName); // sync with image on the right
  };
  return (
    <section className="  w-full bg-gray-50 p-[5%] ">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading Section */}
        <div className="trending-heading flex md:flex-row justify-between  items-start md:items-center mb-8">
          <div className="pl-5">
            <p className="text-base text-gray-500">Featured Insights: 02</p>
            <h2 className="text-2xl font-semibold mt-1 md:text-4xl">
              Trending Insight
            </h2>
          </div>
          <p className="text-gray-500 text-base max-w-md mt-4 md:mt-2 header-Carousel">
            Lorem Ipsum is simply dummy text of the printing <br /> and
            typesetting industry.
          </p>
        </div>

        <div className="flex   gap-8">
          {/* Left Side: */}
          <div className="relative flex-1 p-8 trending_hidden flex">
            {/* Vertical Slider */}
            <div className="relative w-6 mr-3">
              {/* Vertical Line */}
              <div className="absolute left-[10px] transform -translate-x-1/2 h-[250px] w-[2px] bg-blue-500 "></div>

              {/* Movable Indicator */}
              <div
                className={`absolute left-[3px]  w-3 h-[50px] bg-blue-600  transition-all duration-500`}
                style={{
                  top:
                    activeSection === "omnia"
                      ? "0px"
                      : activeSection === "sights"
                      ? "100px"
                      : "200px",
                }}
              />
            </div>

            {/* Section Headings */}
            <div className="space-y-8 pl-3">
              {/* Omnia Section */}
              <div className="">
                <div
                  className="flex justify-between items-start cursor-pointer"
                  onClick={() => toggleSection("omnia")}
                >
                  <h3 className="text-xl font-semibold">Omnia Partners</h3>
                  {openSections.omnia ? (
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19V5m0 14-4-4m4 4 4-4"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  )}
                </div>

                {openSections.omnia && (
                  <div className="transition-all duration-500 ease-in-out overflow-hidden mt-2 text-gray-500">
                    <hr className="trending-divider h-1 w-full border-none bg-[radial-gradient(ellipse_at_center,_#00162a,_#6c86d9)] mt-1 mb-1" />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Omnis quidem voluptatem perspiciatis amet ipsam nostrum id
                  </div>
                )}
              </div>

              {/* Sights Section */}
              <div className="">
                <div
                  className="flex justify-between items-start cursor-pointer"
                  onClick={() => toggleSection("sights")}
                >
                  <p className="text-lg font-semibold">
                    Sights From Other Firms
                  </p>

                  {openSections.sights ? (
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19V5m0 14-4-4m4 4 4-4"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  )}
                </div>

                {openSections.sights && (
                  <p className="mt-2 text-gray-500">
                    <hr className="trending-divider h-1 w-full border-none bg-[radial-gradient(ellipse_at_center,_#00162a,_#6c86d9)] mt-1 mb-1" />
                    Additional content for "Sights From Other Firms" goes here.
                  </p>
                )}
              </div>

              {/* Around The Web Section */}
              <div className="">
                <div
                  className="flex justify-between items-start cursor-pointer"
                  onClick={() => toggleSection("aroundWeb")}
                >
                  <p className="text-lg font-semibold">From Around The Web</p>
                  {openSections.aroundWeb ? (
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19V5m0 14-4-4m4 4 4-4"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  )}
                </div>
                {openSections.aroundWeb && (
                  <p className="mt-2 text-gray-500">
                    <hr className="trending-divider h-1 w-full border-none bg-[radial-gradient(ellipse_at_center,_#00162a,_#6c86d9)] mt-1 mb-1" />
                    Additional content for "From Around The Web" goes here.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Side */}
          {activeSection === "omnia" && (
            <div className="right-content top_sectionimage gap-1   flex flex-1">
              {/* Left side: Large vertical image */}
              <div
                className="relative flex-1 md:h-full overflow-hidden"
                onMouseEnter={() => setHovered("blogs")}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src="/images/trendingimages/trend1.png"
                  alt="..."
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-125"
                />

                <div className="absolute bottom-0 w-full left-4 right-4 flex justify-between items-center px-4 py-2 bg-black/40 backdrop-blur-sm rounded text-white text-md font-medium">
                  <p>Our Latest Blogs</p>
                  {hovered === "blogs" ? (
                    // Down Arrow
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M7 7h10v10"
                      />
                    </svg>
                  ) : (
                    // Right Arrow
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  )}
                </div>
              </div>

              {/* Right side: Two stacked images */}
              <div className="flex flex-col justify-between h-full gap-1 flex-1 ">
                {/* Case Studies */}
                <div
                  className="relative h-1/2 overflow-hidden"
                  onMouseEnter={() => setHovered("case")}
                  onMouseLeave={() => setHovered(null)}
                >
                  <img
                    src="/images/trendingimages/trend2.png"
                    alt="Case Studies"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-125"
                  />
                  <div className="absolute w-full bottom-0 left-4 right-4 flex justify-between items-center px-4 py-2 bg-black/40 backdrop-blur-sm rounded cursor-pointer text-white text-md font-medium">
                    <p>Case Studies</p>
                    {hovered === "case" ? (
                      // Your custom icon on hover
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M7 7h10v10"
                        />
                      </svg>
                    ) : (
                      // Default right arrow
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {/* White Paper */}
                <div
                  className="relative h-1/2 overflow-hidden"
                  onMouseEnter={() => setHovered("white")}
                  onMouseLeave={() => setHovered(null)}
                >
                  <img
                    src="/images/trendingimages/trend3.png"
                    alt="White Paper"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-125"
                  />
                  <div className="absolute w-full bottom-0 left-4 right-4 flex justify-between items-center px-4 py-2 bg-black/40 backdrop-blur-sm rounded text-white text-md font-medium">
                    <p>White Paper</p>

                    {hovered === "white" ? (
                      // Your custom icon on hover
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M7 7h10v10"
                        />
                      </svg>
                    ) : (
                      // Default right arrow
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "sights" && (
            <div className="flex flex-1">
              <div className="overflow-hidden relative">
                <img
                  onMouseEnter={() => setHovered("sights")}
                  onMouseLeave={() => setHovered(null)}
                  src="/images/trendingimages/sights1.png"
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-125"
                  alt="Sights"
                />
                <div className="absolute w-full bottom-0 left-4 right-4 flex justify-between items-center px-4 py-2 bg-black/40 backdrop-blur-sm  text-white text-md font-medium">
                  <p>Other Firms</p>

                  {hovered === "sights" ? (
                    // Your custom icon on hover
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M7 7h10v10"
                      />
                    </svg>
                  ) : (
                    // Default right arrow
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeSection === "aroundWeb" && (
            <div className="flex flex-1">
              <div className="overflow-hidden relative">
                <img
                  onMouseEnter={() => setHovered("web")}
                  onMouseLeave={() => setHovered(null)}
                  src="/images/trendingimages/web1.png"
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-125"
                  alt="web1"
                />
                <div className="absolute w-full bottom-[1px] left-4 right-4 flex justify-between items-center px-4 py-2 bg-black/40 backdrop-blur-sm  text-white text-md font-medium">
                  <p>From Around The Web</p>

                  {hovered === "web" ? (
                    // Your custom icon on hover
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M7 7h10v10"
                      />
                    </svg>
                  ) : (
                    // Default right arrow
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Trending;
