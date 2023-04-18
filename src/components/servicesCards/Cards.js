import React from 'react'
import './Cards.css'

import { Link } from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'

import Fade from 'react-reveal/Fade';

import Card2 from '../../assets/card2-2.jpg'
import Card3 from '../../assets/card2-3.jpg'


const Cards = () => {
  return (
    <>

    <div className="cards-header container">
            <div className='cards-header-left'>
                <h1>WE OFFER VARIOUS SERVICES </h1>
                <h3>The Best Possible Care. The Best Possible People.</h3>
            </div>

            <div className='cards-header-right'>
                <p>At <span>33rd Street Recovery Treatment Center</span>, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment. </p>
            </div>
    </div>

<div class="card-wrap">


<div class="tile tile1"> 
<Fade top>
<img src={Card2} alt="Substance Use" loading="lazy"/>
</Fade>
  <div class="text">
  <h1>SUBSTANCE ABUSE TREATMENT</h1>
  <p class="animate-text">No matter what type of addiction or mental health condition you are dealing with, there’s something for everyone at 33rd Street Rehab.</p>
  <div class="animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/substance-abuse">
        <div className='tile-btn'>
              <button>Learn More</button>
        </div>      
          </Link>
    </LinkRoll>
    </div>

  </div>
 </div>
  
  <div class="tile"> 

  <Fade right>
  <img src={Card3} alt="Warehouse Employees" loading="lazy"/>
  </Fade>
  <div class="text">
  <h1>EMPLOYMENT ASSISTANCE</h1>
  <p class="animate-text">We offer a variety of employment tools and resources to help you land on your feet and get hired at a great company in recovery.</p>
  <div class="animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/jobs">
        <div className='tile-btn'>
              <button>Learn More</button>
        </div>      
        </Link>
    </LinkRoll>

    </div>
  </div>
 </div>
</div>
  
    </>
  )
}

export default Cards
