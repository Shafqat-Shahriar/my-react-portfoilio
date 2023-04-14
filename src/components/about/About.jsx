import React from 'react'
import './about.css'
import MEs from '../../assets/me2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MEs} alt="About Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h3>9th</h3>
              <small>Kickoff Programming Contest-CUB</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h4>Clients</h4>
              <small>50 + Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h4>Projects</h4>
              <small>67+ Completed</small>
            </article>
          </div>
          <p>
          I am 23 year Old Web developer and junior software engineer with 2 years of experience speacializing 
          in javascript and python. Who is  seeking to pursue an opportunity with a growing organization that will 
          utilize and enhance my knowledge in software development, and that will provide me with essential growth 
          opportunities. I love to think outside the box and like to work in the most efficient way as much as possible.
          </p>

          <a href='#contact' className='btn btn-primary'> Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About