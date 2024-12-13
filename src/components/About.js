import React from 'react'
import aboutIcon from "../assets/aboutIcon.jpg";
import cursorIcon from "../assets/cursorIcon.png";
import serverIcon from "../assets/serverIcon.png";

function About() {
  return <section className="about__container" id = "about">
    <h2 className="about__title">About</h2>
    <div className="about__content">
        <img src={aboutIcon} className="about__img" alt="" />
        <ul className="about__items">
          <li className="about__item">
            <img src= {cursorIcon} alt="" />
            <div>
               <h3>Frontend Developer</h3>
               <p>i m Frontend Developer with experience in building responsive and optimal website</p>
            </div>
          </li>
          <li className="about__item">
            <img src= {serverIcon} alt="" />
            <div>
               <h3>backend Developer</h3>
               <p>i have experience developing fast and optimized </p>
            </div>
          </li>
          <li className="about__item">
            <img src= {cursorIcon} alt="" />
            <div>
               <h3>Frontend ui</h3>
               <p>i m ui developer in sri lanka how to njjjijiv fjiig j </p>
            </div>
          </li>
            

        </ul>
    </div>
  </section>
    
  
}

export default About
