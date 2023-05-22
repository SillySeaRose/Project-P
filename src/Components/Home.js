import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import menuImage from "./Sprites/BackGroundImages/menu/MenuImage.png"

const Home = () => {
  return (
    <>
        <div className='background'></div>
        {/* Menu */}
        <nav id="navegationBar"> 
            <NavLink className="menuLink" to="/about"><li id='buttonAbout'>About</li></NavLink> 
            <NavLink className="menuLink" to="/charactersPage"><li id="buttonCharacters" >Characters</li></NavLink>
            <NavLink className="menuLink" to="/concepts"><li id="buttonConcepts">Concepts</li></NavLink>
        </nav>
        <img src={menuImage} alt='MenuImage' className='menuImage'></img>
    </>
  )
}

export default Home