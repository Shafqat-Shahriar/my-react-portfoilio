import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar1.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Nazmus Saqib',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veritatis nesciunt eum repellat porro atque quis libero quod neque molestiae tenetur, rem quibusdam harum in itaque similique ab molestias eos?'
  },
  {
    avatar: AVTR2,
    name: 'NM Sijan',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veritatis nesciunt eum repellat porro atque quis libero quod neque molestiae tenetur, rem quibusdam harum in itaque similique ab molestias eos?'
  },
  {
    avatar: AVTR3,
    name: 'Fabliha',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veritatis nesciunt eum repellat porro atque quis libero quod neque molestiae tenetur, rem quibusdam harum in itaque similique ab molestias eos?'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials 






/*
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="avatar one"/>
          </div> 
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veritatis nesciunt eum repellat porro
              atque quis libero quod neque molestiae tenetur, rem quibusdam harum in itaque similique ab molestias eos?
          </small> 
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="avatar one"/>
          </div> 
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veritatis nesciunt eum repellat porro
              atque quis libero quod neque molestiae tenetur, rem quibusdam harum in itaque similique ab molestias eos?
          </small> 
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="avatar one"/>
          </div> 
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veritatis nesciunt eum repellat porro
              atque quis libero quod neque molestiae tenetur, rem quibusdam harum in itaque similique ab molestias eos?
          </small> 
        </article>
      </div>
    </section>
  )
}

export default Testimonials */