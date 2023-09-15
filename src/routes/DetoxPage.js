import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Detox from '../components/detox/Detox'
import DetoxSection from '../components/detox/DetoxSection'
import ContactForm from '../components/contact/ContactForm';

import Footer from '../components/footer/Footer'

const MethodPage = () => {
    return (
        <>
           <Navbar /> 
           <Detox />
           <DetoxSection />
           <ContactForm />
           <Footer />
        </>
    )
}

export default MethodPage
