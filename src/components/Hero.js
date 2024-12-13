import React from 'react';
import { Link } from 'react-router-dom';
import hero from "../assets/hero.jpg"


function Hero() {
  return <section className='hero__container'>
     <div className="hero__content">
        <h1 className='hero__title'>The most ground breaking  Crypto Revolution</h1>
        <p className="hero__description">The service you have been waiting for years! 
        </p>
        <Link to="/login" className="hero__contactBtn">
          Get Started
        </Link>
     </div>
    <img src={hero} className="hero__img" alt="" />
    <div className="hero__topBlur"></div>
    <div className="hero__bottomBlur"></div>
  </section>
    
  
}

export default Hero
