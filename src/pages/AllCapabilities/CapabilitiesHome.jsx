import React from 'react'
import Navbar from '../../components/Navbar'
import CapabilitiesHeroSection from '../../components/CapabilitiesComponent/CapabilitiesHeroSection'
import ExploreCapabilities from '../../components/CapabilitiesComponent/ExploreCapabilities'
import Discoverbussiness from '../../components/industries_component/Discoverbussiness'
import ClientTestimonials from '../../components/Clienttestimonails'
import Talkus from '../../components/Talkus'
import Footer from '../../components/Footer'

const CapabilitiesHome = () => {
  return (
    <div>
      <Navbar/>
      <CapabilitiesHeroSection/>
      <ExploreCapabilities/>
      <Discoverbussiness/>
      <ClientTestimonials/>
      <Talkus/>
      <Footer/>
    </div>
  )
}

export default CapabilitiesHome