import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/mohanish-shevde-008067222/" target="_blank"><BsLinkedin className='socials_icons'/></a>
        <a href="https://github.com/Mohanish19/" target="_blank">
          <BsGithub className='socials_icons' />
          </a>
        <a href="https://twitter.com/MohanishShevde" target="_blank"><FaTwitterSquare className='socials_icons'/></a>
        <a href="https://www.instagram.com/mohanish_1901/" target="_blank"><AiFillInstagram className='socials_icons'/></a>
        
    </div>
  )
}
export default HeaderSocials;