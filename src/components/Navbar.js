import React, { useState } from 'react';
import closeIcon from '../assets/closeIcon.png'
import menuIcon from '../assets/menuIcon.png'

function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);

  return (
  <nav className="navbar">
     <a href="/" className="navbar__title">TPlan</a>
     <div className="navbar__menu">
        <img
          className="navbar__menuBtn"
          src={menuOpen ? closeIcon : menuIcon}
          alt=""
          onClick={() => setMenuOpen(!menuOpen)}
          />
        <ul className={`navbar__menuItems ${menuOpen && "navbar__menuOpen"}`} onClick={() => setMenuOpen(false)}>
          <li>
             <a href="#about">About</a>
          </li>
          <li>
             <a href="#services">Services</a>
          </li>
          <li>
             <a href="#block">Block</a>
          </li>
          <li>
             <a href="#contacts">Contacts</a>
          </li>        
        </ul>
     </div>
  </nav>
  ); 
}

export default Navbar;
