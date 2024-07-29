import React from 'react'
import { about,services } from '../constant';
import './pages.css';

const About = () => {
  return (
    <div className='about-div' style={{margin:"0 1rem"}}>
      <h1 className='title-text'>{about[0].title}</h1>
      <div className='discription'>
        <p>{about[0].description}</p>
      </div>
      <div className='skills'>
        <h2 style={{margin:'5px 0'}}>Skills</h2>
        <ul>
          {about[0].skills.map((skill) => (
            <div className='skills-container'>
               <img src={skill.icon} alt={skill.name} className='skills-icon'></img>
              <li className='skill-label' key={skill.name}>{skill.name}</li>
            </div>
          
          ))}
        </ul>
      </div>
      <div className='services '>
        <h2 style={{margin:'5px 0'}}>Services</h2>
        <ul className='service-card card-container'>
          {services.map((service) => (
            <div className='card'>
              <img src={service.icon} alt={service.title} />
                   <li key={service.title}>{service.title}</li>
            </div>
         
          ))}
        </ul>
      </div>
    </div>
  )
}

export default About
