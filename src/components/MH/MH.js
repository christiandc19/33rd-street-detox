import React from 'react'
import Fade from 'react-reveal/Fade';

import './MH.css'
import Wave from '../../assets/waves.svg'


const MH = () => {
    return (
        <>
        <div className='mh submenu'>
        <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="mh-content">
                    <Fade top>
                    <h1>MENTAL HEALTH PROGRAMS</h1>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default MH
