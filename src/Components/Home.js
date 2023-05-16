import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div>Home</div>
        <nav> 
            <NavLink to="/about">About</NavLink> 
            <NavLink to="/charactersAndConcepts">CharactersAndConcepts</NavLink> 
        </nav>
    </>
  )
}

export default Home