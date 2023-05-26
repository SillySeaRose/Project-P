import React from 'react'
import { NavLink } from 'react-router-dom'
import './CharactersAndConcepts.css'
import pageImage from "./Sprites/BackGroundImages/ConceptCharacterPage/Pagev2Image.png"
import CharacterSlides from "./CharacterSlides"

// Images imports: 
import CharacterPng1 from "./Characters/resized/1.png"
import CharacterPng2 from "./Characters/resized/2.png"
import CharacterPng3 from "./Characters/resized/3.png"
import CharacterPng4 from "./Characters/resized/4.png"

const CharactersAndConcepts = () => {
  const slides = [
    {
      id: 1,
      url: CharacterPng1
    },
    {
      id: 2,
      url: CharacterPng2
    },
    {
      id: 3,
      url: CharacterPng3
    },
    {
      id: 4,
      url: CharacterPng4
    }
  ]

  return (
    <>
      
      <div className='background'></div>
      <NavLink className="NavLinkDecoration" to="/home"><div className='backButtonCharactersAndConcepts'>Back</div></NavLink>

      {/* Menu para mover as imagens */}
        {/* <div className='arrowRight'></div>
        <div className='arrowLeft'></div> */}
        <div className='picturesContainer'>
          <CharacterSlides slides={slides}/>
        </div>
        <img src={pageImage} alt='pageImage' className='pageImage'></img>
    </>
  )
}

export default CharactersAndConcepts