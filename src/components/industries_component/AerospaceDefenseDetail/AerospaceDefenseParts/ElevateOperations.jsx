import React from 'react';
import Navbar from '../../../Navbar';
import AutomotiveHerosection from '../../AutomotiveDetail/AutomotiveHerosection';
import AutomotiveNavbar from '../../AutomotiveDetail/AutomotiveNavbar';
import ExploreAutomotive from '../../AutomotiveDetail/ExploreAutomotive';
import HelpIndustries from '../../HelpIndustries';
import AutomotiveHelpClient from '../../AutomotiveDetail/AutomotiveHelpClient';
import AutoIndustryTeam from '../../AutomotiveDetail/AutoIndustryTeam';
import AutomotiveInsights from '../../AutomotiveDetail/AutomotiveInsights';
import ClientTestimonials from '../../../Clienttestimonails';
import Talkus from '../../../Talkus';
import Footer from '../../../Footer';

const ElevateOperations = ({ name, image, image2, types, industry }) => {
  return (
    <div>
      <Navbar />
      <AutomotiveHerosection title={name} backgroundImage={image} />
      <AutomotiveNavbar name={name} />

      <div id="overview">
        <ExploreAutomotive name={name} expoimage={image2} />
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

export default ElevateOperations;
