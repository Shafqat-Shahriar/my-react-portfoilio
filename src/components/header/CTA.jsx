import React from 'react'
import ReS from '../../assets/ReS.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={ReS} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA