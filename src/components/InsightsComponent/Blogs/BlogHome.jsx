import React, { useState } from "react";
import Navbar from "../../Navbar";
import BlogsHerosection from "./BlogsHerosection";
import BlogDescription from "./BlogDescription";
import BlogHeaderBar from "./BlogHeaderBar";

import OmniaBlogs from "./OmniaBlogs/OmniaBlogs";
import CapabilitiesBlogs from "./CapabilitiesBlogs/CapabilitiesBlogs";
import IndustriesBlogs from "./IndustriesBlogs/IndustriesBlogs";
import Slider from "./Slider";
import AutoIndustryTeam from "../../industries_component/AutomotiveDetail/AutoIndustryTeam";
import ClientTestimonials from "../../Clienttestimonails";
import Talkus from "../../Talkus";
import Footer from "../../Footer";
import StartConsultation from "./StartConsultation";
import CapabilitiesHelpClient from "../../CapabilitiesComponent/CapabilitiesHelpClient";
import CapabilitiesHeaderBar from "./CapabilitiesBlogs/CapabilitiesHeaderBar";
import IndustriesHeaderBar from "./IndustriesBlogs/IndustriesHeaderBar";

const BlogHome = () => {
  const [selectedBlog, setSelectedBlog] = useState("");

  // Function to render selected component
  const renderSelectedBlog = () => {
    switch (selectedBlog) {
      case "capabilities":
        return <CapabilitiesBlogs />;
      case "industries":
        return <IndustriesBlogs />;
      default:
        return <OmniaBlogs />;
    }
  };

  return (
    <div>
      <Navbar />
      <BlogsHerosection />
      <BlogDescription />
      {selectedBlog === "capabilities" ? (
        <CapabilitiesHeaderBar onBlogChange={setSelectedBlog} />
      ) : selectedBlog === "industries" ? (
        <IndustriesHeaderBar onBlogChange={setSelectedBlog} />
      ) : (
        <BlogHeaderBar onBlogChange={setSelectedBlog} />
      )}

      <div className="px-4 md:px-10 lg:px-20 py-6">
        {renderSelectedBlog()}
        <Slider />
      </div>
      <div className=" md:px-4 lg:px-8 ">
        <AutoIndustryTeam />
        <CapabilitiesHelpClient name="S" capability="Strategic Services" />

        <div className="flex justify-center mb-4">
          <button className="flex bg-blue-600 px-2 gap-2 py-2 font-semibold shadow-lg transition hover:bg-blue-700 rounded-full text-white">
            <span className="flex p- items-center justify-center rounded-full bg-white transition group-hover:bg-slate-200">
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
            See More
          </button>
        </div>
      </div>

      <StartConsultation />
      <ClientTestimonials />
      <Talkus />
      <Footer />
    </div>
  );
};

export default BlogHome;
