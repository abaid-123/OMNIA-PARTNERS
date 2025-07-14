import React from "react";
import Navbar from "../../Navbar";
import CapabilitiesHeroSection from "../CapabilitiesHeroSection";
import CapabilitiesNavbar from "../CapabilitiesNavbar";
import CapabilitiesOverview from "../CapabilitiesOverview";

import HelpCapabilities from "../HelpCapabilities";

import CapabilitiesHelpClient from "../CapabilitiesHelpClient";
import AutoIndustryTeam from "../../industries_component/AutomotiveDetail/AutoIndustryTeam";
import ClientTestimonials from "../../Clienttestimonails";
import Talkus from "../../Talkus";
import Footer from "../../Footer";
import CapabilityInsights from "../CapabilityInsights";
import ResearchMethodologies from "./ResearchMethodologies";
import CapabilityApproaches from "./CapabilityApproaches";

const StrategicServicesHome = ({
  name,
  backgroundImage,
  expoimage,
  types,
  capability,
  backgroundImage2,
  backgroundImage3,
}) => {
  return (
    <div>
      <Navbar />
      <CapabilitiesHeroSection title={name} backgroundImage={backgroundImage} />
      <CapabilitiesNavbar name={name} />
      <div id="overview">
        <CapabilitiesOverview name={name} expoimage={expoimage} />
      </div>
      <div id="how-we-can-help">
        <HelpCapabilities backgroundImage2={backgroundImage2} />
      </div>
      <div id="methodologies">
        <ResearchMethodologies />
      </div>
      <div id="approaches">
        <CapabilityApproaches backgroundImage3={backgroundImage3}/>
      </div>
      <div id="case-studies">
        <CapabilitiesHelpClient name={name} capability={capability} />
      </div>
      <div id="our-teams">
        <AutoIndustryTeam />
      </div>
      <CapabilityInsights name={name} types={types} capability={capability} />
      <ClientTestimonials />
      <Talkus />
      <Footer />
    </div>
  );
};

export default StrategicServicesHome;
