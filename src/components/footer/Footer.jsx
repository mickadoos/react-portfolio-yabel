import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="# " className='footer__logo'>YABEL</a>

      <ul className="permalinks">
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
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