import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InsightsTrending = ({
  heading = "Trending Insight",
  title = "Omnia Partners",
  description = `Lorem ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  backgroundImage = "/images/Insights/TrendingBg.png",
  cardsData = [
    {
      id: "blogs",
      title: "Our Latest Blogs",
      image: "/images/Insights/Trend1.png",
      link: "/insights/blogs",
    },
    {
      id: "case-studies",
      title: "Case Studies",
      image: "/images/Insights/Trend2.png",
      link: "/insights/case-studies",
    },
    {
      id: "white-paper",
      title: "White Paper",
      image: "/images/Insights/Trend3.png",
      link: "/insights/white-paper",
    },
  ],
}) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-md brightness-50"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10 text-white py-14 px-4 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto mb-10">
          <div className="flex justify-between">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  mb-2">
              {heading}
            </h2>
            <p className="lg:block hidden">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
              optio! <br />
              Eligendi praesentium nostrum earu
            </p>
          </div>

          <div className="border-t border-white/30 my-4"></div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {title}
          </h1>

          <p className="text-sm sm:text-base text-white/80 max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Cards Section */}
        {/* <div className="w-full"> */}
        <div className="max-w-6xl mx-auto flex justify-center gap-2 overflow-hidden flex-wrap">
          {cardsData.map((card) => (
            <div
              key={card.id}
              onClick={() =>
                navigate(card.link, { state: { title: card.title } })
              }
              onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
              className="w-full md:w-[371px] h-[300px] md:h-[350px] cursor-pointer overflow-hidden group transition-all duration-300"
            >
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
                />
                <div className="absolute bottom-0 w-full flex justify-between items-center px-4 py-2 bg-black/40 backdrop-blur-sm text-white text-md font-medium">
                  <p>{card.title}</p>
                  {hovered === card.id ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
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
          ))}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default InsightsTrending;
