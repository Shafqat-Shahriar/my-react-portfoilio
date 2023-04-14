import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2> 

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Agile approach to UX/UI</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Deep design expertise</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Personal commitment</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Regular reporting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Client engagement</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cross-functional team</p>
            </li>
          </ul>
        </article>
        {/*Endo of UI/UX */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Sitemap and Wireframing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design Layouts</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content Writing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Coding</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Testing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Maintenace</p>
            </li>
          </ul>
        </article>
        {/*End of Web development */}
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ideates</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creates</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Revisies</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimizes</p>
            </li>
          </ul>
        </article>
        {/*end of content*/}
      </div>
    </section>
  )
}

export default Services
