import Navbar from "../../Navbar";

import AutomotiveNavbar from "./AutomotiveNavbar";
import Clienttestimonails from "../../Clienttestimonails";
import Talkus from "../../Talkus";
import Footer from "../../Footer";
import ExploreAutomotive from "./ExploreAutomotive";
import HelpIndustries from "../HelpIndustries";
import AutomotiveHelpClient from "./AutomotiveHelpClient";
import AutoIndustryTeam from "./AutoIndustryTeam";
import AutomotiveInsights from "./AutomotiveInsights";
import AutomotiveHerosection from "./AutomotiveHerosection";

const AutomotiveHome = ({ name, backgroundImage, expoimage,types,industry }) => {
  return (
    <div>
      <Navbar />
      <AutomotiveHerosection title={name} backgroundImage={backgroundImage} />
      <AutomotiveNavbar name={name} />

      <div id="overview">
        <ExploreAutomotive />
      </div>

      <div id="how-we-can-help">
        <HelpIndustries />
      </div>

      <div id="case-studies"></div>
      <AutomotiveHelpClient />
      <div id="our-teams">
        <AutoIndustryTeam />
      </div>
      <AutomotiveInsights types={types} industry={industry} />
      <Clienttestimonails />
      <Talkus />
      <Footer />
    </div>
  );
};

export default AutomotiveHome;
