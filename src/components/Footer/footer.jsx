import React from 'react'
import './footer.css'
import {FaTwitterSquare} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>THANK YOU!</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://twitter.com/MohanishShevde" target="_blank"><FaTwitterSquare /></a>
        <a href="https://www.instagram.com/mohanish_1901/" target="_blank"><AiFillInstagram /></a>
        <a href="https://www.linkedin.com/in/mohanish-shevde-008067222/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Mohanish19/" target="_blank"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mohanish Shevde. All rights reserved</small>
      </div>
    </footer>

  )
}

export default footer