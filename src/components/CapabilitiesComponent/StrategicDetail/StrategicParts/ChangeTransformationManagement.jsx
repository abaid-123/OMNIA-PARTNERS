import React from "react";
import Navbar from "../../../Navbar";
import CapabilitiesHeroSection from "../../CapabilitiesHeroSection";
import CapabilitiesNavbar from "../../CapabilitiesNavbar";
import CapabilitiesOverview from "../../CapabilitiesOverview";
import HelpCapabilities from "../../HelpCapabilities";
import CapabilitiesHelpClient from "../../CapabilitiesHelpClient";
import AutoIndustryTeam from "../../../industries_component/AutomotiveDetail/AutoIndustryTeam";
import CapabilityInsights from "../../CapabilityInsights";
import Footer from "../../../Footer";
import Talkus from "../../../Talkus";
import ClientTestimonials from "../../../Clienttestimonails";
import ResearchMethodologies from "../ResearchMethodologies";
import CapabilityApproaches from "../CapabilityApproaches";

const ChangeTransformationManagement = ({
  title,
  backgroundImage,
  imgexpo,
  types,
  capability,
  backgroundImage2,
  backgroundImage3,
}) => {
  return (
    <div>
      <Navbar />
      <CapabilitiesHeroSection
        backgroundImage={backgroundImage}
        title={title}
      />
      <CapabilitiesNavbar name={title} />
      <div id="overview">
        <CapabilitiesOverview name={title} expoimage={imgexpo} />
      </div>
      <div id="how-we-can-help">
        <HelpCapabilities backgroundImage2={backgroundImage2} />
      </div>
      <div id="methodologies">
        <ResearchMethodologies />
      </div>
      <div id="approaches">
        <CapabilityApproaches backgroundImage3={backgroundImage3} />
      </div>
      <div id="case-studies">
        <CapabilitiesHelpClient name={title} capability={capability} />
      </div>
      <div id="our-teams">
        <AutoIndustryTeam />
      </div>
      <CapabilityInsights name={title} types={types} capability={capability} />
      <ClientTestimonials />
      <Talkus />
      <Footer />
    </div>
  );
};

export default ChangeTransformationManagement;
