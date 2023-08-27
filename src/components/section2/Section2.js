import React from 'react'
import './Section2.css'

import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";


import FlexItem1 from '../../assets/flexItem1.jpg'
import FlexItem2 from '../../assets/flexItem2.jpg'
import FlexItem3 from '../../assets/flexItem3.jpg'
import FlexItem4 from '../../assets/flexItem4.jpg'


const Section2 = () => {
  return (
    <div className='section2'>

        <div className='section2-header'>
            <h1>Conditions We Treat</h1>
            <p><i>"The Best Possible Care. The Best Possible People."</i></p>
        </div>

        <div className='section2-content container'>
            <div className='flexItem overlay'>
                <img src={ FlexItem2 } alt="Woman seating on a bench" loading="lazy"/>
                <div className='info1'>
                    <h1>01</h1>
                    <h2>Alcohol Addiction</h2>
                    <p>Alcoholism can negatively impact career goals, personal relationships, and responsibilities, not to mention your physical health.</p>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/alcohol">
                        <button>Learn More</button>   
                    </Link>
                    </LinkRoll>
                    </div>
                
            </div>
            <div className='flexItem overlay'>
                <img src={ FlexItem1 } alt="Woman seating on a bench" loading="lazy"/>
                <div className='info2'>
                    <h2>Cocaine Addiction</h2>
                    <p>According to Addiction Center, more people are admitted to emergency rooms for cocaine use than any other drug.</p>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/cocaine">
                    <button>Learn More</button>   
                    </Link>
                    </LinkRoll>
                    <h1>02</h1>
                </div>
            </div>
        </div>


        <div className='section2-content container'>
            <div className='flexItem overlay'>
                <img src={ FlexItem3 } alt="Woman seating on a bench" loading="lazy"/>
                <div className='info3'>
                    <h1>03</h1>
                    <h2>Fentanyl Addiction</h2>
                    <p>A highly addictive stimulant that affects the brain by elevating levels of dopamine (a chemical associated with reward or pleasure).</p>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/fentanyl">
                    <button>Learn More</button>   
                    </Link>
                    </LinkRoll>
                </div>

            </div>
            <div className='flexItem overlay'>
                <img src={ FlexItem4 } alt="Woman seating on a bench" loading="lazy"/>
                <div className='info4'>
                    <h2>Kratom Addiction</h2>
                    <p>Kratom use cite both mental and physical health reasons for taking the drug, ranging from anxiety and depression to pain management.</p>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/kratom">
                    <button>Learn More</button>   
                    </Link>
                    </LinkRoll>
                    <h1>04</h1>
                </div>
            </div>
        </div>


            <div className='viewAllBtn'>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/substance-abuse">
                        <div className='thumbnail-btn viewAll'>
                            <button>View All</button>
                        </div>
                    </Link>
                </LinkRoll>
            </div>

    </div>
  )
}

export default Section2