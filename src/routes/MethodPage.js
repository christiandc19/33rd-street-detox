import React from 'react'

import Navbar from '../components/navbar/Navbar'
import METHOD from '../components/method/Method'
import METHODSECTION from '../components/method/MethodSection'
import ContactForm from '../components/contact/ContactForm';

import Footer from '../components/footer/Footer'

const MethodPage = () => {
    return (
        <>
           <Navbar /> 
           <METHOD />
           <METHODSECTION />
           <ContactForm />
           <Footer />
        </>
    )
}

export default MethodPage
