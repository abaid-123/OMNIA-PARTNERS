import React from "react";
import Navbar from "../../Navbar";
import AerospaceDefenceHeroSection from "./AerospaceDefenceHeroSection";
import AutomotiveHerosection from "../AutomotiveDetail/AutomotiveHerosection";
import AutomotiveNavbar from "../AutomotiveDetail/AutomotiveNavbar";
import ExploreAutomotive from "../AutomotiveDetail/ExploreAutomotive";
import HelpIndustries from "../HelpIndustries";
import AutomotiveHelpClient from "../AutomotiveDetail/AutomotiveHelpClient";
import AutoIndustryTeam from "../AutomotiveDetail/AutoIndustryTeam";
import ClientTestimonials from "../../Clienttestimonails";
import Talkus from "../../Talkus";
import Footer from "../../Footer";
import AutomotiveInsights from "../AutomotiveDetail/AutomotiveInsights";


const AerospaceDefenseHome = ({ name, backgroundImage, expoimage,types,industry }) => {
  return (
    <div>
      <Navbar />
      <AutomotiveHerosection title={name} backgroundImage={backgroundImage} />
      <AutomotiveNavbar name={name} />
      <div id="overview">
        <ExploreAutomotive name={name} expoimage={expoimage} />
      </div>

      <div id="how-we-can-help">
        <HelpIndustries />
      </div>
      <div id="case-studies"></div>
      <AutomotiveHelpClient  name={name}/>
      <div id="our-teams">
        <AutoIndustryTeam />
      </div>
      <AutomotiveInsights types={types} industry={industry}/>
      <ClientTestimonials/>
      <Talkus/>
      <Footer/>
    </div>
  );
};

export default AerospaceDefenseHome;
