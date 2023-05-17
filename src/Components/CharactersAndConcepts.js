import React from 'react'
import { NavLink } from 'react-router-dom'
import './CharactersAndConcepts.css'

const CharactersAndConcepts = () => {
  return (
    <>
    <nav>
      <NavLink to="/"><li className='backButtonCharactersAndConcepts'></li></NavLink>
      <h1>Characters</h1>
      <box>
        <div className='arrowLeft'></div>
        <div className='arrowRight'></div>
      </box>
    </nav> 

    <p>Leave a comment</p>
    <input type="text"></input>

    <div ></div>
    </>
  )
}

export default CharactersAndConcepts