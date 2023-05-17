import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <>
        <div>Home</div>
        <nav id="navegationBar"> 
            <NavLink to="/about"><li id='buttonAbout'></li> </NavLink> 
            <NavLink to="/charactersAndConcepts"><li id="buttonCharacters" ></li></NavLink>
            <NavLink to="/concepts"><li id="buttonConcepts" ></li> </NavLink>
        </nav>
    </>
  )
}

export default Home