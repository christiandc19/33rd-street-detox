import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {NavLink, Link} from 'react-router-dom'
import logo from '../../assets/nav-logo-2.png'
// import {FiChevronDown } from "react-icons/fi";
import { AiOutlineMobile } from 'react-icons/ai';
import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const [isMenu, setisMenu] = useState(false);


    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }


    window.onscroll = () => {
        const nav = document.querySelector('#nav');
        if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
      };


    return (
        <div name='top' className='navbar' id='nav'>


            <div className="navbarContainer">


                        <div className="navbar-logo">
                            <Link to='/'>
                            <img src={logo} alt="Palm Springs Rehab Logo" loading="lazy"/>
                            </Link>
                        </div>


            <div className='menu-container'>

                        <div className="hamburger" onClick={handleNav}>
                            {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                        </div>


                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to='/substance-abuse'> Addiction </Link>
                    <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/alcohol`}> Alcohol</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/cocaine`}> Cocaine </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/fentanyl`}> Fentanyl </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/heroin`}> Heroin</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/kratom`}> Kratom </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/mdma`}> MDMA </NavLink> </li>
                           <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/meth`}> Meth </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/opiate`}> Opiate </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/opioid`}> Opioid </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/oxycodone`}> Oxycodone </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/prescriptions`}> Prescription </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/xanax`}> Xanax </NavLink> </li>
                        </ul>
                    </li>
                    <li><Link to='/detox'>Detox Programs</Link> </li>
                    <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/about-us`}> About Us</NavLink> </li>
                    {/* <li><Link to='/residence'>Residence</Link> </li> */}
                    <li><Link to='/jobs'>Jobs Program</Link> </li>
                    <li><Link to='/insurance'>Insurance</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>

                
                <div className='navbar-number hide'>
                                    <p><AiOutlineMobile /></p>
                                    <a href="tel:3234439913"> (323) 443-9913</a>
                            </div>

</div>


            </div>
        </div>
    )
}

export default Navbar
