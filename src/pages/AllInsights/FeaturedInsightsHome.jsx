import React from 'react'
import Navbar from '../../components/Navbar'
import InsightsHerosection from '../../components/InsightsComponent/InsightsHerosection'
import InsightsTrending from '../../components/InsightsComponent/InsightsTrending'
import ClientTestimonials from '../../components/Clienttestimonails'
import Talkus from '../../components/Talkus'
import Footer from '../../components/Footer'
import SightsFromOtherFirms from '../../components/InsightsComponent/SightsFrim'
import SightsAroundWeb from '../../components/InsightsComponent/SightsAroundWeb'

const FeaturedInsightsHome = () => {
  return (
    <div>
      <Navbar/>
      <InsightsHerosection/>
      <InsightsTrending/>
      <SightsFromOtherFirms/>
      <SightsAroundWeb/>
      <ClientTestimonials/>
      <Talkus/>
      <Footer/>
    </div>
  )
}

export default FeaturedInsightsHome