import React from "react";
import Navbar from "../../Navbar";
import AerospaceDefenceHeroSection from "./AerospaceDefenceHeroSection";
import Automotive_herosection from "../AutomotiveDetail/Automotive_herosection";
import Automotive_navbar from "../AutomotiveDetail/Automotive_navbar";
import Explore_automotive from "../AutomotiveDetail/Explore_automotive";
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
      <Automotive_herosection title={name} backgroundImage={backgroundImage} />
      <Automotive_navbar name={name} />
      <div id="overview">
        <Explore_automotive name={name} expoimage={expoimage} />
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
