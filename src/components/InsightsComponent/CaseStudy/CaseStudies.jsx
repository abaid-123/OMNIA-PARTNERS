import React, { useState } from "react";
import Navbar from "../../Navbar";
import CaseHerosection from "./CaseHerosection";
import OmniaCase from "./Omnia/OmniaCase";
import IndustriesCase from "./Industries/IndustriesCase";
import CapabilitiesCase from "./Capabilities/CapabilitiesCase";
import CapabilitiesHeaderBar from "../Blogs/CapabilitiesBlogs/CapabilitiesHeaderBar";
import IndustriesHeaderBar from "../Blogs/IndustriesBlogs/IndustriesHeaderBar";
import HeaderCase from "./HeaderCase";
import IndustriesHeaderCase from "./Industries/IndustriesHeaderCase";
import CapabilitiesHeaderCase from "./Capabilities/CapabilitiesHeaderCase";
import Slider from "../Blogs/Slider";
import CapabilitiesHelpClient from "../../CapabilitiesComponent/CapabilitiesHelpClient";
import RecommendedBlogs from "../Blogs/RecommendedBlogs";
import RecommendedCase from "./RecommendedCase";
import StartConsultation from "../Blogs/StartConsultation";
import Talkus from "../../Talkus";
import Footer from "../../Footer";

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState("");

  // Function to render selected component
  const renderSelectedCase = () => {
    switch (selectedCase) {
      case "omnia":
        return <OmniaCase />;
      case "industries":
        return <IndustriesCase />;
      default:
        return <CapabilitiesCase />;
    }
  };

  return (
    <div>
      <Navbar />
      <CaseHerosection />

      <div className="px-4 md:px-10 lg:px-20 py-6">
        <p className="text-gray-500 mb-2">Case Studies</p>
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold capitalize whitespace-nowrap">
            How we've helped client
          </h1>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
      </div>
      {selectedCase === "capabilities" ? (
        <CapabilitiesHeaderCase onBlogChange={setSelectedCase} />
      ) : selectedCase === "industries" ? (
        <IndustriesHeaderCase onBlogChange={setSelectedCase} />
      ) : (
        <HeaderCase onBlogChange={setSelectedCase} />
      )}
      <div className="px-4 md:px-10 lg:px-20 py-6">
        {renderSelectedCase()}
        <Slider />
        <RecommendedCase />
      </div>
      <StartConsultation />
     
      <Talkus />
      <Footer />
    </div>
  );
};

export default CaseStudies;
