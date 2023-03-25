import React from 'react'
import './Nav.css'
// import {AiOutlineHome} from 'react-icons/ai' // 10. import all the react icons to use it on the anchor links
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react' // 12.0 import useState to manage the change the class of the anchor tag based on the click state


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#') // 12.1 set a state variable to track the anchor link that is active
  return (
    <div>
    <nav>
      {/* // 10.1 create an anchor tag for every section and use the react icons imported */}
      {/* // 10.1 also refer to the id of every section (that is about to create) */}
      {/* <a href='# ' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>  // 12.2 set attribute onClick that when the anchor is clicked calls the useState function to change the state variable and use a ternary to change the classname of the anchor depeneding on the state */}
      <a href='# ' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BiBook/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
    </div>
  )
}

export default Nav