import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import logo from '../../assets/nav-logo-2.png'
import './FooterStyles.css'
import {Link} from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'

const Footer = () => {
    return (

<>
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                    <img src={logo} alt="33rd Street Detox Logo" loading="lazy"/>
                    </div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='footer-icon' />
                    </LinkRoll>

                </div>
                <div className="col-container">


                    <div className="col">
                        <h3>Navigation</h3>
                        
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'><p>Home</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/insurance'><p>Insurance</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/about-us'><p>About Us</p></Link>
                        </LinkRoll>
                    </div>


                    <div className="col">
                        <h3>SERVICES</h3>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/detox'><p>Programs</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/substance-abuse'><p>Substance Abuse Program</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/jobs'><p>Employment Assistance</p></Link>
                        </LinkRoll>
                    </div>


                    <div className="col">
                        <h3>Location</h3>
                        <p>1018 33rd St, Los Angeles CA 90011</p>
                        <p> info@33rdstreetdetox.com</p>
                        <p>  +1 (323) 443-9913</p>

                    </div>


                </div>
                <p className='copyright'><p>&copy; 2023 33rd Street Detox. All rights reserved.</p></p>


            </div>

        </div>
</>
    )
}

export default Footer
