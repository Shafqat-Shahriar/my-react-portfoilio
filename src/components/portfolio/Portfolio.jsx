import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/big.jpg'
import IMG2 from '../../assets/tetris.jpeg'
import IMG3 from '../../assets/car.jpg'
import IMG4 from '../../assets/space.jpg'
import IMG5 from '../../assets/portfolio1.jpeg'
import IMG6 from '../../assets/education.jpeg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Big Data Analysis',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20008481-CHASE-Bank-Website-Re-design'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Tetris Arcade Game',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20008481-CHASE-Bank-Website-Re-design'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Vehicle Parking App',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20008481-CHASE-Bank-Website-Re-design'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Space Shooter',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20008481-CHASE-Bank-Website-Re-design'
  },
  {
    id: 5,
    image: IMG5,
    title: 'User interface visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20008481-CHASE-Bank-Website-Re-design'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Education',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20008481-CHASE-Bank-Website-Re-design'
  }
]


const Portfolio = () => {
  return (
    <section id ='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target="_blank">Github</a> 
                <a href={demo} className='btn btn-primary' target="_blank">Live demo</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio