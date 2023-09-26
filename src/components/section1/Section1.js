import React from 'react'
import './Section1.css'
import IMG1 from '../../assets/section1-1.webp'

const Section1 = () => {
  return (

    <>
            <div className='section1'>

                <div className='section1-content container'>
                    <div className='section1-left'>
                        <h1>WHO WE ARE</h1>
                        <h2>Quality Care from Quality Experts.</h2>
                        <p>At 33rd Street Recovery, we provide safe and comfortable medical detox services for those struggling with addiction. To ensure that those who attend our rehab facility receive tailored care to meet their individual needs, we conduct a series of evaluations before you begin treatment at our drug and alcohol detox center.
                        <br/><br/>
                        These evaluations allow us to understand your active addictions, history of substance abuse, mental health disorders, co-occurring disorders, prior drug and alcohol treatment, and how our detox center can help you overcome your substance use disorder.
                        </p>

                    </div>
                    <div className='section1-right'>
                        <img src={ IMG1 } alt="Woman seating on a bench" loading="lazy"/>
                    </div>
                </div>
              
            </div>

    </>
  )
}

export default Section1