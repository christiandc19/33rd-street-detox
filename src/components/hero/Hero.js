import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'


const Hero = () => {
    return (
<>        
<div className='sample'>

<section className='sampleSection'>
  <div class="sampleContainer">
    
    <div class="sample-left"></div>
    <div class="sample-right">
      <div class="content">
      <div className="content">
            
            <Fade right>
                <h1 className="animate-charcter">20TH STREET RECOVERY</h1>
                </Fade>
            <Fade left>
                <h2 className='subtitle'>Substance Abuse Addiction and Mental Health Treatment Facility</h2>
            </Fade>
                <br />
                <div className='hero-button'>
                <Link to="/contact">
                <button>GET AN APPOINTMENT</button>
            </Link>
            </div>
            <br />
            <Fade bottom>
                <p>Find your happiness and learn to put it first.</p>
            </Fade>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</>

    )
}

export default Hero