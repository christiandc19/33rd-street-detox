import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Treatment from '../components/treatment/Treatment'
import ContactForm from '../components/contact/ContactForm';
import Footer from '../components/footer/Footer'
import Inpatient from '../components/treatment/Inpatient';
import Outpatient from '../components/treatment/Outpatient';

const MethodPage = () => {
    return (
        <>
           <Navbar /> 
           <Treatment />
           <Inpatient />
           <Outpatient />
           <ContactForm />
           <Footer />
        </>
    )
}

export default MethodPage
