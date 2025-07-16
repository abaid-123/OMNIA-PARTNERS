import React from 'react'
import Navbar from '../components/Navbar'
import AboutHerosection from '../components/AboutComponents/AboutHerosection'
import OurJourney from '../components/AboutComponents/OurJourney'
import OurMission from '../components/AboutComponents/OurMission'
import AwardRecoginations from '../components/AboutComponents/AwardRecoginations'
import Talkus from '../components/Talkus'
import Footer from '../components/Footer'
import Hiring from '../components/AboutComponents/Hiring'
import FaqAbout from '../components/AboutComponents/FaqAbout'

const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutHerosection/>
      <OurJourney/>
      <OurMission/>
      <AwardRecoginations/>
      <FaqAbout/>
      <Hiring/>
      <Talkus/>
      <Footer/>
    </div>
  )
}

export default About