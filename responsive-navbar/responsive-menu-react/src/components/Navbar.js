import React from 'react'
import {FaBars,FaTimes} from "react-icons/fa";
import { useRef } from 'react';
import "../Styles/main.css";
import {NavLink} from "react-router-dom";

export default function Navbar() {
    const navRef=useRef();

    // add or remove this classname from the classlist of the nav
    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
    <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/works'>My Work</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to ='/about'>About me</NavLink>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
            </nav>
            {/* when we are in smaller screen this button will be shown */}
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>

    </header>
   
  )
}
