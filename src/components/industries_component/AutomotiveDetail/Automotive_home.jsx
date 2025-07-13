import Navbar from "../../Navbar";

import Automotive_navbar from "./Automotive_navbar";
import Clienttestimonails from "../../Clienttestimonails";
import Talkus from "../../Talkus";
import Footer from "../../Footer";
import Explore_automotive from "./Explore_automotive";
import HelpIndustries from "../HelpIndustries";
import AutomotiveHelpClient from "./AutomotiveHelpClient";
import AutoIndustryTeam from "./AutoIndustryTeam";
import AutomotiveInsights from "./AutomotiveInsights";
import Automotive_herosection from "./Automotive_herosection";

const Automotive_home = ({ name, backgroundImage, expoimage,types,industry }) => {
  return (
    <div>
      <Navbar />
      <Automotive_herosection title={name} backgroundImage={backgroundImage} />
      <Automotive_navbar name={name} />

      <div id="overview">
        <Explore_automotive />
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

export default Automotive_home;
