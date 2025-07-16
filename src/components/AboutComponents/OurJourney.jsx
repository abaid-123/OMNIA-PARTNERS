import React, { useEffect, useState, useRef } from "react";

const statData = [
  { value: 22, label: "Years in Business" },
  { value: 64000, label: "Member Locations" },
  { value: 233000, label: "Contract Solutions" },
  { value: 13000, label: "Our Partners" },
  {
    value: 94,
    label: "Population Serve",
    sub: "Population served by agencies utilizing Omnia partners",
    isPercent: true,
  },
];

const OurJourney = () => {
  const [counts, setCounts] = useState(statData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000; // total duration in ms
    const frameRate = 30; // update rate (ms)
    const totalFrames = duration / frameRate;

    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) => {
          const target = statData[index].value;
          const increment = target / totalFrames;
          const next = count + increment;
          return next < target ? next : target;
        })
      );
    }, frameRate);

    const timeout = setTimeout(() => clearInterval(interval), duration + 100);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [hasAnimated]);

  const formatNumber = (value, index) => {
    const raw = Math.round(value);
    const item = statData[index];

    if (item.isPercent) return `${raw}%`;
    if (item.value >= 1000) return `${Math.round(value / 1000)}k`;
    return raw;
  };

  return (
    <div
      className="bg-white px-4 sm:px-8 lg:px-12 py-8 text-gray-800"
      ref={sectionRef}
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <p className="text-sm text-gray-500">Our Journey</p>
        <div className="flex">
          <h2 className="text-3xl w-[35%] sm:text-4xl font-bold mt-2 mb-4">
            Who <span className="text-blue-600">We Are</span>
          </h2>
          <hr className="block hr_show h-1 w-[65%] mt-8 border-none bg-[radial-gradient(ellipse_at_center,_#03255b,_#e6e8ed)]" />
        </div>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus hic nobis! Vero, sequi ad itaque ex fugiat, iusto dolores maiores quas, enim perspiciatis laudantium odit quae quisquam debitis dolorum!
        </p>
      </div>

      {/* Image */}
      <div className="max-w-6xl mx-auto mb-10">
        <img
          src="/images/About/about-team.png"
          alt="Team Discussion"
          className="w-full shadow-md object-cover"
        />
      </div>

      {/* Stats Flexbox Layout */}
      <div className="w-full max-w-8xl mx-auto flex flex-wrap gap-6 justify-center">
        {statData.map((item, index) => (
          <div
            key={index}
            className="w-[431px] sm:w-1/4 lg:w-1/6 px-2 border pt-4 pb-16 pl-4 text-left transition-all duration-500 ease-out"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              {formatNumber(counts[index], index)}
            </h3>
            <p className="text-blue-600 font-medium text-sm">{item.label}</p>
            <p className="text-xs text-gray-500 mt-1">
              {item.sub ||
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurJourney;
