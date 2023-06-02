import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import menuImage from "./Sprites/BackGroundImages/menu/MenuImage.png"

const Home = () => {
  return (
    <>
        <div className='homeOverlay'></div>


        <div className='background'></div>
        {/* Menu */}
        <nav id="navegationBar"> 
            <li><NavLink className="menuLink" to="/about">About</NavLink> </li>
            <li><NavLink className="menuLink" to="/charactersPage">Characters</NavLink></li>
            <li><NavLink className="menuLink" to="/concepts">Concepts</NavLink></li>
        </nav>
        <img src={menuImage} alt='MenuImage' className='menuImage'></img>
    </>
  )
}

export default Home