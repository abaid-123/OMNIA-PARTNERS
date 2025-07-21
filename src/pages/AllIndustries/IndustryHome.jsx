import React from "react";
import Navbar from "../../components/Navbar";
import IndustriesHerosection from "../../components/industries_component/IndustriesHerosection";
import Discoverbussiness from "../../components/industries_component/Discoverbussiness";

import ExploreIndustries from "../../components/industries_component/ExploreIndustries";
import Clienttestimonails from "../../components/Clienttestimonails";
import Talkus from "../../components/Talkus";
import Footer from "../../components/Footer";
const IndustryHome = () => {
  return (
    <div>
      <Navbar />
      <IndustriesHerosection />
      <ExploreIndustries />
      <Discoverbussiness />
      <Clienttestimonails />
      <Talkus />
      <Footer />
    </div>
  );
};

export default IndustryHome;
