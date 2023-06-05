import React from 'react'
import { NavLink } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <>
    <div className='AboutOverlay'></div>

    <div className='FastTravelMenu'>
      <NavLink className="NavLinkDecoration" to="/charactersPage"><p className='FastTravelMenuLinks'>Characters</p></NavLink>
      <NavLink className="NavLinkDecoration" to="/concepts"><p className='FastTravelMenuLinks'>Concepts</p></NavLink>
    </div>

    <div className='Aboutbackground'></div>
    <NavLink className="NavLinkDecoration" to="/home"><div className='backHome'>Back</div></NavLink>
    
    <div className='upBoxEye'></div>
    <div className='textBox'>
      <p className='aboutText'>Hi, im <span className='textMark'>Adriano Moreira</span>, right now with the age of 24.</p>
      <p className='aboutText'>This is my art portefolio, under my artist name,<span className='textMark'> SillySeaRose "SSR"</span>, i made this as a final project for the college <span className='textMark'>"FLAG"</span> in <span className='textMark'>"Especializado em Front-End Development"</span>. Here i used HTML5, CSS, JavaScript and the framework: React to produce this final product.</p>
      <p className='aboutText'>Now that you know what this project is about, i will talk a bit about my course to get here. I did <span className='textMark'>"Belas Artes" = Art</span> in school, there i develop a sence of having to work to achive some kind of good skill, i had to learn that takes time and persistence to learn anything, in this case, to be able to draw something just a bit good. I finished with<span className='textMark'> 13 out of 20 values</span>. </p>
      <p className='aboutText'> After, i went to university, i did <span className='textMark'>"Design de Jogos Digitais" = Game Design</span>, i have a huge love for games, so i decided to give a try in this huge world, this made me be opened to new subjects more easier. Why do i say that it made me more open? Well, as someone that wanted to learn about the Art part of the games i had to learn every single topic in what it takes to make a game, i had the phylosophy of selling a produc, programmation in Python and C#, 3d modelation, animation in 2d and 3d, OpenGL, sound design, how to manage a team and budget, and much more, but what i am trying to say is, that i had much more stuff out of my confort area and even tho it wasnt what i initialy was trying to look for, i realy enjoyed the process of learning and making games each half semester and be part of gamejams. I ended with <span className='textMark'>15 of 20 values</span>. </p>
    </div>

    </>
  )
}

export default About