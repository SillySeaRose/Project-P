import React from 'react'
import { NavLink } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <>
    <nav>
      <NavLink to="/"><li className='backButtonAbout'></li></NavLink>
      <h1 className='tittlePage'>About</h1>
    </nav> 
    
     </>
  )
}

export default About