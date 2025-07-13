import React from "react";
import Navbar from "../../../Navbar";

import Automotive_navbar from "../Automotive_navbar";
import Explore_automotive from "../Explore_automotive";
import Automotive_herosection from "../Automotive_herosection";
import HelpIndustries from "../../HelpIndustries";
import AutomotiveHelpClient from "../AutomotiveHelpClient";
import AutomotiveInsights from "../AutomotiveInsights";
import AutoIndustryTeam from "../AutoIndustryTeam";
import ClientTestimonials from "../../../Clienttestimonails";
import Talkus from "../../../Talkus";
import Footer from "../../../Footer";

const RevUpYourStrategy = ({ name, image, image2, types, industry }) => {
  return (
    <div>
      <Navbar />
      <Automotive_herosection title={name} backgroundImage={image} />
      <Automotive_navbar name={name} />

      <div id="overview">
        <Explore_automotive name={name} expoimage={image2} />
      </div>

      <div id="how-we-can-help">
        <HelpIndustries />
      </div>

      <div id="case-studies"></div>

      <AutomotiveHelpClient industry={industry}/>

      <div id="our-teams">
        <AutoIndustryTeam />
      </div>

      <AutomotiveInsights types={types} industry={industry} />
      <ClientTestimonials />
      <Talkus />
      <Footer />
    </div>
  );
};

export default RevUpYourStrategy;
