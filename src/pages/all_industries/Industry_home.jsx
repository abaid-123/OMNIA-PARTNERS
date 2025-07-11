import React from "react";
import Navbar from "../../components/Navbar";
import Industries_herosection from "../../components/industries_component/Industries_herosection";
import Discoverbussiness from "../../components/industries_component/Discoverbussiness";

import Explore_industries from "../../components/industries_component/Explore_industries";
import Clienttestimonails from "../../components/Clienttestimonails";
import Talkus from "../../components/Talkus";
import Footer from "../../components/Footer";
const Industry_home = () => {
  return (
    <div>
      <Navbar />
      <Industries_herosection />
      <Explore_industries />
      <Discoverbussiness />
      <Clienttestimonails />
      <Talkus />
      <Footer />
    </div>
  );
};

export default Industry_home;
