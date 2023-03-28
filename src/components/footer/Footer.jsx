// 16.0 copy paste the footer component
// 3.0 create all components folders with .jsx file and .css --- then on .jsx file type racfe, press tab and import the .css file 
import React from 'react'
import './Footer.css'
// import './Footer2.css'
// import {FaFacebookF} from 'react-icons/fa'
// import {FiInstagram} from 'react-icons/fi'
// import {IoLogoTwitter} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="# " className='footer__logo'>YABEL</a>

      <ul className="permalinks">
        {/* <li><a href="# ">About</a></li> */}
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
      </ul>

      <div className="footer__socials">
        {/* <a href="https://facebook.com" target='_blank' rel='noreferrer'><FaFacebookF/></a> */}
        {/* <a href="https://instagram.com" target='_blank' rel='noreferrer'><FiInstagram/></a> */}
        {/* <a href="https://twitter.com" target='_blank' rel='noreferrer'><IoLogoTwitter/></a> */}
        <a href="https://www.linkedin.com/in/yabel-rodriguez/" target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/mickadoos" target='_blank' rel='noreferrer'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Yabel Web Portfolio. All rigths reserved.</small>
      </div>
    </footer>
  )
}

export default Footer