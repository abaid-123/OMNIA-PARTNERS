import React from 'react';
import Navbar from '../../Navbar';
import Automotive_herosection from './Automotive_herosection';
import Automotive_navbar from './Automotive_navbar';
import Clienttestimonails from '../../Clienttestimonails';
import Talkus from '../../Talkus';
import Footer from '../../Footer';
import Explore_automotive from './Explore_automotive';
import HelpIndustries from '../HelpIndustries';

const Automotive_home = () => {
  return (
    <div>
      <Navbar />
      <Automotive_herosection />
      <Automotive_navbar />

      <div id="overview">
        <Explore_automotive />
      </div>

      <div id="how-we-can-help">
        <HelpIndustries />
      </div>

      <div id="case-studies">
        <Clienttestimonails />
      </div>

      <div id="our-teams">
        <Talkus />
      </div>

      <Footer />
    </div>
  );
};

export default Automotive_home;
