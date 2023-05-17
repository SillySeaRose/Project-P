import React from 'react'
import { NavLink } from 'react-router-dom'
import './CharactersAndConcepts.css'

const CharactersAndConcepts = () => {
  return (
    <>
    <nav>
      <NavLink to="/"><li className='backButtonCharactersAndConcepts'></li></NavLink>
    </nav> 
     </>
  )
}

export default CharactersAndConcepts