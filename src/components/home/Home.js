import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
// import WhatWeDo from '../whatWeDo/Whatwedo';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';
import Cards from '../../components/servicesCards/Cards';



const home = () => {
  return (
    <>
    <Cards />
    {/* <WhatWeDo /> */}
    <Whoweare />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
