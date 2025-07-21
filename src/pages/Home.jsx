import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import CapabilitiesSection from "../components/CapabilitiesSection";
import Trending from "../components/Trending";
import Talkus from "../components/Talkus";
import Footer from "../components/Footer";
import Clienttestimonails from "../components/Clienttestimonails";
import Industries from "../components/Industries";

const Home = () => {
  return (
    <div className="  ">
      <Navbar />
      <main>
        <Herosection />
        <CapabilitiesSection />
        <Trending />
        <Industries />
        <Clienttestimonails />
        <Talkus />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
