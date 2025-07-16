import React from 'react'

import ContactHerosection from './ContactHerosection'
import Navbar from '../../Navbar'
import PersonalInformation from './PersonalInfomation'
import Footer from '../../Footer'

const ContactHome = () => {
  return (
    <div>
      <Navbar/>
      <ContactHerosection/>
      <PersonalInformation/>
      <Footer/>
    </div>
  )
}

export default ContactHome