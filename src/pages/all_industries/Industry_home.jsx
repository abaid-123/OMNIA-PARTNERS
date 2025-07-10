import React from 'react'
import Navbar from '../../components/Navbar'
import Industries_herosection from '../../components/industries_component/Industries_herosection'
import Explore_industries from '../../components/industries_component/Explore_industries'

const Industry_home = () => {
  return (
    <div>
      <Navbar/>
      <Industries_herosection/>
      <Explore_industries/>
    </div>
  )
}

export default Industry_home