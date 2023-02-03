import React from 'react'
import './Whoweare.css'
import Fade from 'react-reveal/Fade';
import { FaRegStar } from 'react-icons/fa';


import WhatWeDoImg from '../../assets/slider3.jpg'
import WhatWeDoImg2 from '../../assets/whatwedo2.jpg'
import WhatWeDoImg3 from '../../assets/slider4.jpg'

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



{/* WRAP 2 */}

    <div className='wrap'>
        <Fade left>
            <div className="box-right hide">
                <img src={WhatWeDoImg2} alt="Conselling Session with a patient" loading="lazy" />
            </div>
        </Fade>

        <Fade right>
            <div className="box left">
            <h1 className='header'>AN EVALUATION INCLUDES:</h1><br/>
                <ul>
                    <li>
                        <FaRegStar className='star'/> A comprehensive medical assessment by a doctor to create an individualized treatment plan.
                    </li><br/>
                    <li>
                        <FaRegStar className='star'/> Urine tests and other lab tests.
                    </li><br/>
                    <li>
                        <FaRegStar className='star'/> The doctor prescribes a series of personalized medications to reduce the severity of withdrawal symptoms, slowly tapering off over time.
                    </li>
                </ul><br/><br/>
                {/* <h1 className='header'>WHAT WE DO</h1> */}
                <p>Once a client is assessed, the drug detox process will occur under stringent medical supervision at our treatment facility. Medical supervision and guidance help clients feel safe and comfortable while the body rids itself of drugs and alcohol and provides physical and mental support throughout the withdrawal process. We have staff on site 24 hours a day to monitor and help you through this difficult process. To learn more about treatment, contact us today.  </p>
                <br />
            </div>
        </Fade>
    </div>



{/* WRAP 3 */}


<div className='wrap'>
        <Fade left>
        <div className='Whoweare-icon'>
                <Fade left>
                    <div className='icons'>
                        <img src={Icon1} width="50px" height="50px" alt="Conselling Session with a patient" loading="lazy" />
                        <p><span>DEDICATED STAFF</span> <br/> The medical professionals on our team are completely dedicated to your recovery. </p>
                    </div>
                </Fade>

                <Fade right>
                    <div className='icons'>
                        <img src={Icon2} width="50px" height="50px" alt="Conselling Session with a patient" loading="lazy" />
                        <p><span>PROVEN METHODS</span> <br/> Our treatment methods are solely based on proven research and science-based evidence.</p>
                    </div>
                </Fade>

                <Fade left>
                    <div className='icons'>
                        <img src={Icon3} width="50px" height="50px" alt="Conselling Session with a patient" loading="lazy" />
                        <p><span>24/7 SUPPORT</span> <br/> Guidance and support are always in reach. We provide care for you whenever needed.</p>
                    </div>
                </Fade>
            </div>
        </Fade>

        <Fade right>
            <div className="box-right">
                <img src={WhatWeDoImg3} alt="Conselling Session with a patient" loading="lazy" />
            </div>
        </Fade>
    </div>


</>
  )
}

export default Whoweare