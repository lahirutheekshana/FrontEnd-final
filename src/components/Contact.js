import React from 'react'
import emailIcon from "../assets/emailIcon.png";
import linkedinIcon from "../assets/linkedinIcon.png";
import githubIcon from "../assets/githubIcon.png";

function Contact() {
  return <footer className='contact__container' id="contact">
    <div className='contact__text'>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
    </div>
    <ui className="contact__links">
        <li className='contact__link'>
            <img src={emailIcon} alt="" />
            <a href='mailto:TPlan@gmail.com'>Ouremail@gmail.com</a>
        </li>
        <li className='contact__link'>
            <img src={linkedinIcon} alt="" />
            <a href='https:TPlan@gmail.com'>linedin.com</a>
        </li>
        <li className='contact__link'>
            <img src={githubIcon} alt="" />
            <a href='https://www.github.com'>github.com</a>
        </li>
    </ui>
  </footer>
}

export default Contact
