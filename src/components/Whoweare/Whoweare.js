import React from 'react'
import './Whoweare.css'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'
import { FaCheck } from 'react-icons/fa';

import WRAP3 from '../../assets/wrap3.jpg'

import PROPS from './offersProps';

import { BsCheck2Circle } from 'react-icons/bs';

import ALCOHOL from '../../assets/offers-alcohol.jpg'
import COCAINE from '../../assets/offers-cocaine.jpg'
import FENTANYL from '../../assets/offers-fentanyl.jpg'
import KRATOM from '../../assets/offers-kratom.jpg'
import MDMA from '../../assets/offers-mdma.jpg'
import METH from '../../assets/offers-meth.jpg'




const Whoweare = () => {
  return (
<>
{/* WRAP 1 */}

    <div className='wrap1'>
            <div className="left">
                <div className='left-content'>
                <Fade left>
                <h1 className='header'>WHO WE ARE</h1>
                <h2>Quality Care from Quality Experts.</h2>
                </Fade>

                <Fade left>
                <p className='header2'>At <span>33rd Street Recovery,</span> we provide safe and comfortable medical detox services for those struggling with addiction.
                </p>
                </Fade>

                <Fade left>
                <p>
                To ensure that those who attend our rehab facility receive tailored care to meet their individual needs, we conduct a series of evaluations before you begin treatment at our drug and alcohol detox center. <br/> <br/> These evaluations allow us to understand your active addictions, history of substance abuse, mental health disorders, co-occurring disorders, prior drug and alcohol treatment, and how our detox center can help you overcome your substance use disorder.
                </p>
                </Fade>
                 <br />
                <ul>
                    <Fade left>
                    <li>
                    <p><span><BsCheck2Circle/></span> A comprehensive medical assessment by a doctor to create an individualized treatment plan.</p>
                    </li>
                    </Fade>
                    <Fade left>
                    <li>
                    <p><span><BsCheck2Circle/></span> Urine tests and other lab tests.</p>
                    </li>
                    </Fade>
                    <Fade left>
                    <li>
                    <p><span><BsCheck2Circle/></span> The doctor prescribes a series of personalized medications to reduce the severity of withdrawal symptoms, slowly tapering off over time.
                    </p>
                    </li>
                    </Fade>
                </ul>
                </div>
            </div>


        <div className="right"></div>

    </div>



{/* WRAP 2 */}

<div className='wrap2'>


        <Fade left>
            <div className="header">
                <br/>
                <p>                
                <h1 className='header'>WHAT WE OFFER</h1>
                <h2>Getting you back in shape.</h2>  
                </p>
                <br />
            </div>
        </Fade>

            <div className='offers'>

                <div className='addiction-thumbnail'>
                    <Fade bottom>
                            <div className='addiction-img'>
                            <PROPS Image={ALCOHOL}/>
                            </div>
                            <div className='addiction-caption'>
                            <h1>Alcohol Addiction</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                            </div>
                            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                                <Link to="/alcohol">
                                    <div className='thumbnail-btn'>
                                        <button>Learn More</button>
                                    </div>
                                </Link>
                            </LinkRoll>
                    </Fade>
                </div>

                <div className='addiction-thumbnail'>
                    <Fade bottom>
                            <div className='addiction-img'>
                            <PROPS Image={COCAINE}/>
                            </div>
                            <div className='addiction-caption'>
                            <h1>Cocaine Addiction</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                            </div>                    
                            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                                <Link to="/cocaine">
                                    <div className='thumbnail-btn'>
                                        <button>Learn More</button>
                                    </div>
                                </Link>
                            </LinkRoll>
                    </Fade>
                </div>

                <div className='addiction-thumbnail'>
                    <Fade bottom>
                            <div className='addiction-img'>
                            <PROPS Image={FENTANYL}/>
                            </div>
                            <div className='addiction-caption'>
                            <h1>Fentanyl Addiction</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                            </div>                    
                            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                                <Link to="/fentanyl">
                                    <div className='thumbnail-btn'>
                                        <button>Learn More</button>
                                    </div>
                                </Link>
                            </LinkRoll>
                            </Fade>
                </div>

                <div className='addiction-thumbnail'>
                    <Fade bottom>
                            <div className='addiction-img'>
                            <PROPS Image={KRATOM}/>
                            </div>
                            <div className='addiction-caption'>
                            <h1>Kratom Addiction</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                            </div>                    
                            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                                <Link to="/kratom">
                                    <div className='thumbnail-btn'>
                                        <button>Learn More</button>
                                    </div>
                                </Link>
                            </LinkRoll>
                    </Fade>
                </div>

                <div className='addiction-thumbnail'>
                    <Fade bottom>
                            <div className='addiction-img'>
                            <PROPS Image={MDMA}/>
                            </div>
                            <div className='addiction-caption'>
                            <h1>MDMA Addiction</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                            </div>                    
                            <LinkRoll activeClass="active" to="top" spy={true} smooth={true}    duration={500}>
                                <Link to="/mdma">
                                    <div className='thumbnail-btn'>
                                        <button>Learn More</button>
                                    </div>
                                </Link>
                            </LinkRoll>
                            </Fade>
                </div>

                <div className='addiction-thumbnail'>
                    <Fade bottom>
                            <div className='addiction-img'>
                            <PROPS Image={METH}/>
                            </div>
                            <div className='addiction-caption'>
                            <h1>Meth Addiction</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                            </div>                    
                            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                                <Link to="/meth">
                                    <div className='thumbnail-btn'>
                                        <button>Learn More</button>
                                    </div>
                                </Link>
                            </LinkRoll>
                            </Fade>
                </div>

            </div>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/substance-abuse">
                        <div className='thumbnail-btn viewAll'>
                            <button>View All</button>
                        </div>
                    </Link>
                </LinkRoll>
    </div>




{/* wrap 3 */}

<div className='wrap3'>
<Fade right>
            <div className="left">
                <h3>WHY CHOOSE US</h3>
                <h1>Focusing on you, with the best therapeutic care.</h1>
                <p> 
                <ul>
                    <li>
                        <FaCheck className='star'/> DEDICATED STAFF.
                        The medical professionals on our team are completely dedicated to your recovery.


                    </li><br />
                    <li>
                        <FaCheck className='star'/> PROVEN METHODS. Our treatment methods are solely based on proven research and science-based evidence.


                    </li><br />
                    <li>
                        <FaCheck className='star'/> 24/7 SUPPORT. Guidance and support are always in reach. We provide care for you whenever needed.


                    </li><br />
                </ul>
                </p>
            </div>
        </Fade>

        <Fade left>
            <div className="right">
                <img src={WRAP3}  alt="Conselling Session with a patient" loading="lazy" />
            </div>
        </Fade>
</div>



{/* wrap 3 */}

<div className='wrap4'>

    <div className="wrap4-container">
        <Fade right>
            <div className="content">
                <p>
                <h1>A healthier choice for a healthier you. </h1>
                </p><br />
                <p>
 
                We have staff on site 24 hours a day to monitor and help you through this difficult process. To learn more about treatment, contact us today.
                </p> <br />
                </div>
                
        </Fade>
        </div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/contact">
                        <div className='thumbnail-btn'>
                            <button>Contact Us</button>
                        </div>
                    </Link>
                </LinkRoll>
    </div>

</>


  )
}

export default Whoweare