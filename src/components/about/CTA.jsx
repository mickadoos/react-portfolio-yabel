import React from 'react'
import CV from '../../assets/CV-Yabel-Rodriguez-EN.pdf' 
import {BsBoxArrowInUpRight} from 'react-icons/bs'
 
function CTA() {
  return (
    <div className='cta'>
        <a href={CV} target="_blank" rel='noreferrer' className='btn'>Resume <BsBoxArrowInUpRight/></a> 
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA