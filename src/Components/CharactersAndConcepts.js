import React from 'react'
import { NavLink } from 'react-router-dom'
import './CharactersAndConcepts.css'
import pageImage from "./Sprites/BackGroundImages/ConceptCharacterPage/Pagev2Image.png"


const CharactersAndConcepts = () => {
  
  return (
    <>
      <div className='CharacterAndConceptsOverlay'></div>
      {/* Layout of Concepts and Characters page's */}
      <div className='CharacterAndConceptsbackground'></div>
      <NavLink className="NavLinkDecoration" to="/home"><div className='backButtonCharactersAndConcepts'>Back</div></NavLink>

      {/* Menu to move "CharacterAndConceptsSlides" */}

      {/* Pixel art for the page */}
        <img src={pageImage} alt='pageImage' className='pageImage'></img>
    </>
  )
}

export default CharactersAndConcepts