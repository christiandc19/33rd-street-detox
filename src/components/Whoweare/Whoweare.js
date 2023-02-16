import React from 'react'
import './Whoweare.css'
import Fade from 'react-reveal/Fade';

import Services from "../../components/servicesCards/Cards"

import WhatWeDoImg from '../../assets/slider3.jpg'
import WhatWeDoImg2 from '../../assets/whatwedo2.jpg'

import Icon1 from '../../assets/icon1.png'
import Icon2 from '../../assets/icon2.png'
import Icon3 from '../../assets/icon3.png'


const Whoweare = () => {
  return (
<>


{/* WRAP 1 */}

    <div className='wrap'>
        <Fade left>
            <div className="box left">
                <h1 className='header'>WHO WE ARE</h1><br/>
                <h1 className='header2'>At <span>33rd Street Recovery,</span> we provide safe and comfortable medical detox services for those struggling with addiction.</h1>
                <br/>
                <p>To ensure that those who attend our rehab facility receive tailored care to meet their individual needs, we conduct a series of evaluations before you begin treatment at our drug and alcohol detox center. <br/> <br/> These evaluations allow us to understand your active addictions, history of substance abuse, mental health disorders, co-occurring disorders, prior drug and alcohol treatment, and how our detox center can help you overcome your substance use disorder.</p>
                <br />
            </div>
        </Fade>

        <Fade right>
            <div className="box-right">
                <img src={WhatWeDoImg} alt="Conselling Session with a patient" loading="lazy" />
            </div>
        </Fade>
    </div>


<Services />


<div className='wrap'>
        <Fade left>
        
        <div className='Whoweare-icon'>

                <Fade left>
                    <div className='icons'>
                        <img src={Icon1}  alt="Conselling Session with a patient" loading="lazy" />
                        <p><span>DEDICATED STAFF</span> <br/> The medical professionals on our team are completely dedicated to your recovery. </p>
                    </div>
                </Fade>

                <Fade right>
                    <div className='icons'>
                        <img src={Icon2} alt="Conselling Session with a patient" loading="lazy" />
                        <p><span>PROVEN METHODS</span> <br/> Our treatment methods are solely based on proven research and science-based evidence.</p>
                    </div>
                </Fade>

                <Fade left>
                    <div className='icons'>
                        <img src={Icon3} alt="Conselling Session with a patient" loading="lazy" />
                        <p><span>24/7 SUPPORT</span> <br/> Guidance and support are always in reach. We provide care for you whenever needed.</p>
                    </div>
                </Fade>
            </div>
        </Fade>

        <Fade right>
            <div className="box-right">
                <img src={WhatWeDoImg2} alt="Conselling Session with a patient" loading="lazy" />
            </div>
        </Fade>
    </div>

</>
  )
}

export default Whoweare