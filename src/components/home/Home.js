import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';
// import Cards from '../../components/servicesCards/Cards';
import Section1 from '../section1/Section1';
import Section2 from '../section2/Section2';



const home = () => {
  return (
    <>
    <Section1 />
    <Section2 />
    {/* <Cards /> */}
    <InsuranceSection />
    <Whoweare />
    <ContactForm />
    </>
  )
}

export default home
