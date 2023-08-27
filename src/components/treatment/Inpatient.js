import React from 'react'
import "./Inpatient.css"
import { FaCheck } from 'react-icons/fa';
import TreatmentImage1 from '../../assets/treatment-1.jpg'

const Inpatient = () => {
  return (
    <>

        <div className='inpatient'>
            <div className='inpatient-header container'>
                <h1>INPATIENT PROGRAMS</h1>
            </div>

            <div className='inpatient-content container'>

                <div className='inpatient-left'>
                    <h1>DETOX</h1>
                    <ul>
                    <li> <FaCheck className='star'/> As the first step before the official treatment phase, our detox program offers immediate and intense support to get clean and stay clean</li>
                    <li> <FaCheck className='star'/> All services, monitoring, and amenities provided for the entirety of your stay: medication, followed by monitored detox care and group sessions. 
                    </li>
                    </ul>
                    <h1>RESIDENTIAL</h1>
                    <ul>
                    <li> <FaCheck className='star'/> Looking for additional structure during detox? Step into a closely monitored healing environment and stay as long as you need.</li>
                    <li> <FaCheck className='star'/> 24 hour supervision as needed from our staff. </li>
                    <li> <FaCheck className='star'/> Can be the best approach if you are prone to relapse, or your normal life involves the presence of substances that could hinder a successful ongoing recovery.</li>
                    </ul>
                    <h1 className='ts-header2'>PARTIAL HOSPITALIZATION PROGRAM</h1>

                    <ul>
                    <li> <FaCheck className='star'/> The step between full-time inpatient and outpatient, our Partial Hospitalization Program (or ‘day rehab’) helps you transition smoothly back into your normal life at your pace.</li>
                    <li> <FaCheck className='star'/> Take part in treatment and therapy during the day and spend your nights in the comfort of your own home.
                    </li>
                    </ul>


                </div>

                <div  className='inpatient-right'>
                    <img src={TreatmentImage1} alt="Conselling Session with a patient" loading="lazy" />
                </div>


            </div> 

        </div>

    </>
  )
}

export default Inpatient