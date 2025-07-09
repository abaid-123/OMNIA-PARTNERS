import React, { useState } from "react";

const testimonialsData = [
  {
    name: "John Doe",
    title: "Voice President Of Omnia Partners",
    quote: "The Service Was Amazing. I Never Had To Wait For My Food.",
    serviceName: "Service Name",
    serviceType: "Strategic Services",
    image: "/images/client.png",
  },
  {
    name: "Jane Smith",
    title: "Head of Marketing, Sights Corp",
    quote: "Excellent service and a wonderful experience. Highly recommended!",
    serviceName: "Brand Development",
    serviceType: "Marketing Services",
    image: "/images/client.png",
  },
  {
    name: "Michael Brown",
    title: "CTO, TechFront",
    quote: "Fast delivery and professional support. Will work with them again.",
    serviceName: "Platform Optimization",
    serviceType: "Technical Services",
    image: "/images/client.png",
  },
];

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  //  Show previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };
  const current = testimonialsData[currentIndex];
  return (
    <div className=" bg-[#007bff] p-[5%] md:p-[50px]">
      <div className="text-center mb-8 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Our Clients Testimonials
        </h2>
        <p className="text-sm md:text-base text-gray-100">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="flex justify-between relative">
        <div className="flex justify-between">
          <img
            src={current.image}
            alt="client"
            className="relative  inset-0 bg-[#007bff] header-Carousel rounded-lg  z-10 w-[50%] drop-shadow-yellow-900  object-cover rounded-lg"
          />
          <div className="show-md-up p-8 max-w-xl">
            <h3 className="text-md font-semibold text-white">{current.name}</h3>
            <p className="text-xs text-gray-200 mb-4">{current.title}</p>
            <div className="text-5xl leading-tight text-white mb-0">“</div>
            <p className="text-lg leading-relaxed text-white">
              {current.quote}
            </p>
            <div className="text-5xl leading-tight text-white text-right">
              ”
            </div>
            <h4 className="text-sm font-bold mt-2 text-white">
              {current.serviceName}
            </h4>
            <p className="text-xs text-gray-200">{current.serviceType}</p>
          </div>

          <div className="show-sm-only pl-8">
            <h3 className="text-md  text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              tempora unde eveniet, rem, aliquid vel placeat aliquam blanditiis
              cupiditate ullam voluptatibus nam cumque! Aspernatur cupiditate
              repellendus consequuntur praesentium corrupti officia.
            </h3>
          </div>
        </div>
        <div className="absolute client_hide right-0  top-1/2  transform -translate-y-1/2 flex flex-col gap-2">
          <button
            onClick={prevTestimonial}
            className="bg-white text-blue-600 p-1 md:p-2 rounded-full shadow-lg hover:bg-yellow-50 cursor-pointer "
          >
            <svg
              class="w-6 h-6  "
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
                d="M12 6v13m0-13 4 4m-4-4-4 4"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-blue-600 text-white p-1 md:p-2 rounded-full shadow-lg hover:bg-blue-700 "
          >
            <svg
              class="w-6 h-6 "
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
                d="M12 19V5m0 14-4-4m4 4 4-4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
