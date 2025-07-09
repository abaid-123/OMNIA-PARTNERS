import React, { useState } from "react";

// Step 1: Define data like it's coming from an API
const capabilitiesData = [
  {
    id: 1,
    image: "/images/capabilitiesImage/thumb1.png",
    number: "01",
    title: "Strategic Services",
  },
  {
    id: 2,
    image: "/images/capabilitiesImage/thumb2.png",
    number: "02",
    title: "Product Engineering",
  },
  {
    id: 3,
    image: "/images/capabilitiesImage/thumb3.png",
    number: "03",
    title: "UX/UI Design",
  },
  {
    id: 4,
    image: "/images/capabilitiesImage/thumb4.jpg",
    number: "04",
    title: "Data & Analytics",
  },
  {
    id: 5,
    image: "/images/capabilitiesImage/thumb5.png",
    number: "05",
    title: "Cloud Transformation",
  },

  {
    id: 6,
    image: "/images/capabilitiesImage/thumb6.png",
    number: "06",
    title: "Support Services",
  },
  {
    id: 7,
    image: "/images/capabilitiesImage/thumb2.png",
    number: "07",
    title: "Product Engineering",
  },
];

const CapabilitiesSection = () => {
  // Step 2: Default to first image object
  const [selected, setSelected] = useState(capabilitiesData[0]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex =
      currentIndex === capabilitiesData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    setSelected(capabilitiesData[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex =
      currentIndex === 0 ? capabilitiesData.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelected(capabilitiesData[prevIndex]);
  };

  return (
    <div className="bg-gradient-to-b from-[#202947]  to-[#05060b] text-white ">
      <div className="flex flex-col w-[100%] lg:flex-row max-w-7xl mx-auto ">
        <div className="flex-1 mt-6 lg:mt-0 ">
          {/* Header */}
          <div className="mb-4 px-[5%] pt-[5%]">
            <div className="flex pl-6">
              <h2 className="text-4xl font-semibold mr-3">Our</h2>
              <p className="capability_hidden text-sm text-gray-300 mt-2">
                Lorem Ipsum is simply dummy text <br /> of the printing and
                typesetting industry.
              </p>
            </div>
            <hr className="capability_hidden h-1 w-full border-none bg-[radial-gradient(ellipse_at_center,_#6c86d9,_#00162a)] mt-1 mb-1" />
            <h2 className="text-4xl font-semibold pl-6">Capabilities</h2>
          </div>

          <div className="capabilities_show hidden   px-[5%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            ex illum eum voluptas eos pariatur, aliquam quo hic nisi illo
            commodi. Quos itaque tenetur nesciunt nisi rerum exercitationem
            obcaecati quasi?
            <hr className="hidden capabilities_show h-1 w-full border-none bg-[radial-gradient(ellipse_at_center,_#6c86d9,_#00162a)] mt-1 mb-4 " />
          </div>

          {/* Image section */}
          <div className="relative capability_hidden pl-[5%] pb-[8%]">
            {/* Sidebar thumbnails */}
            <div className="absolute z-10 left-[1%]   bg-gradient-to-b from-[#101834] to-[#2c3962] items-center">
              {capabilitiesData.map((item, index) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={`thumb${item.id}`}
                  className="w-12 h-14 object-cover mb-1 cursor-pointer"
                  onClick={() => {
                    setSelected(item);
                    setCurrentIndex(index); // ✅ sync progress bar
                  }}
                />
              ))}
            </div>

            {/* Main image */}
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-[393px] md:min-h-screen sm:h-full xs:h-[250px] object-cover"
            />

            {/* Overlay text with number and title */}
            <div className="absolute bottom-[12%] left-[1%] bg-opacity-60 px-6 rounded-md flex items-center overflow-visible">
              <h3 className="text-8xl font-bold text-white ">
                {selected.number}
              </h3>
              <span className="text-white pt-8 text-sm ml-4">
                {selected.title}
              </span>
            </div>

            <div className="absolute bottom-[10%]  flex w-1/5 mt-4">
              {capabilitiesData.map((_, index) => (
                <div key={index} className="flex-1 flex items-end">
                  <div
                    className={`w-full transition-all duration-500 relative ${
                      index === currentIndex
                        ? "bg-white h-3 absolute top-1"
                        : "bg-blue-200 h-[2px]"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden capabilities_show p-[5%] ">
            <div className="flex gap-2 ">
              <div className="w-1/2 text-center">
                <img
                  src="/images/capabilitiesImage/thumb1.png"
                  alt="..."
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="w-1/2 text-center">
                <img
                  src="/images/capabilitiesImage/thumb6.png"
                  alt="..."
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
            <div className="pt-2 ">
              <img
                src="/images/capabilitiesImage/thumb4.jpg"
                alt="..."
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesSection;
