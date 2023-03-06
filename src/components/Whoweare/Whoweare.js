import React from 'react'
import './Whoweare.css'
import Fade from 'react-reveal/Fade';

import { FaRegStar } from 'react-icons/fa';

import Whoweare1 from '../../assets/whoweare-1.jpg'
import Whoweare2 from '../../assets/slider3.jpg'
import Whoweare3 from '../../assets/slider5.jpg'

import WhatWeDoImg3 from '../../assets/whatwedo2.jpg'

import Icon1 from '../../assets/icon1.png'
import Icon2 from '../../assets/icon2.png'
import Icon3 from '../../assets/icon3.png'
import Cards from '../../components/servicesCards/Cards';


const Whoweare = () => {
  return (
<>


{/* WRAP 1 */}

    <div className='wrap wrap1'>
        <Fade left>
            <div className="left">
                <p>
                <h1 className='header'>WHO WE ARE</h1><br/>
                <h2 className='header2'>At <span>33rd Street Recovery,</span> we provide safe and comfortable medical detox services for those struggling with addiction.</h2>
                <br/>
                To ensure that those who attend our rehab facility receive tailored care to meet their individual needs, we conduct a series of evaluations before you begin treatment at our drug and alcohol detox center. <br/> <br/> These evaluations allow us to understand your active addictions, history of substance abuse, mental health disorders, co-occurring disorders, prior drug and alcohol treatment, and how our detox center can help you overcome your substance use disorder.</p>
                <br />
            </div>
        </Fade>

        <Fade right>
            <div className="right">
                <img src={Whoweare1} alt="Conselling Session with a patient" loading="lazy" />
            </div>
        </Fade>
    </div>



{/* WRAP 2 */}

<div className='wrap reverse-wrap wrap2'>

        <Fade right>
            <div className="right">
                <img src={Whoweare2} alt="Conselling Session with a patient" loading="lazy" />
            </div>
        </Fade>

        <Fade left>
            <div className="left">
                <br/>
                <p>                
                <h1 className='header'>EVALUATION INCLUDES:</h1><br/>

                    <ul>
                    <li>
                        <FaRegStar className='star'/> A comprehensive medical assessment by a doctor to create an individualized treatment plan.
                    </li>
                    <li>
                        <FaRegStar className='star'/> Urine tests and other lab tests.
                    </li>
                    <li>
                        <FaRegStar className='star'/> The doctor prescribes a series of personalized medications to reduce the severity of withdrawal symptoms, slowly tapering off over time.
                    </li>
                </ul>
                </p>
                <br />
                <p>
                Once a client is assessed, the drug detox process will occur under stringent medical supervision at our treatment facility. Medical supervision and guidance help clients feel safe and comfortable while the body rids itself of drugs and alcohol and provides physical and mental support throughout the withdrawal process. We have staff on site 24 hours a day to monitor and help you through this difficult process. To learn more about treatment, contact us today.
                </p>
            </div>
        </Fade>
    </div>

<Cards />

{/* WRAP 3 */}
<div className='wrap reverse-wrap wrap3'>
        <Fade right>
            <div className="right3">
                <img src={WhatWeDoImg3} alt="Conselling Session with a patient" loading="lazy" />
            </div>
        </Fade>

        <Fade left>
            <div className="left left2">
                <div>
                <h1 className='header'>THE BEST OUTPATIENT TREATMENT CENTER IN LOS ANGELES CALIFORNIA</h1><br/>
                <p>You may have lost your way but here you won’t get lost in the crowd. 23rd Street Recovery is an inviting, home-like environment where compassionate clinicians and staff members work collaboratively with you to address your unique needs. Rooted in the 12-step philosophy and a trauma-informed, evidence-based approach, we’ll show you how to manage and live with addiction, co-occurring disorders and other underlying issues, like anxiety or depression. Surrounded by a supportive recovery community, you’ll heal internally and, in turn, heal your relationships. Find your footing here and get ready for the next phase of your life.</p>
                </div>
                <br />
            </div>
        </Fade>
    </div>




{/* WRAP 4 */}
<div className='wrap wrap4'>
        <Fade left>
        
        <div className='left'>
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
        </div>
        </Fade>

        <Fade right>
            <div className="right">
                <img src={Whoweare3} alt="Conselling Session with a patient" loading="lazy" />
            </div>
        </Fade>
    </div>


</>
  )
}

export default Whoweare