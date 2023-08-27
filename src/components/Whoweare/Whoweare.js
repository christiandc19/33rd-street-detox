import React from 'react'
import './Whoweare.css'
import Fade from 'react-reveal/Fade';
import { FaCheck } from 'react-icons/fa';

const Whoweare = () => {
  return (
<>
{/* WRAP 1 */}

    <div className='wrap1'>
        <div className='wrap1-content'>
            <div className="left">
                <div className='left-content'>
                <Fade left>
                <h1 className='header'>WHY CHOOSE US</h1>
                <h2>Focusing on you, with the best therapeutic care.</h2>
                </Fade>

                 <br />
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
                </div>
            </div>
        <div className="right"></div>
    </div>
</div>

</>


  )
}

export default Whoweare