import React from 'react'
import CharactersAndConcepts from './CharactersAndConcepts'
import CharacterAndConceptsSlides from "./CharacterAndConceptsSlides"
// Images imports: 
import CharacterPng1 from "./Characters/resized/1.png"
import CharacterPng2 from "./Characters/resized/2.png"
import CharacterPng3 from "./Characters/resized/3.png"
import CharacterPng4 from "./Characters/resized/4.png"
import CharacterPng5 from "./Characters/resized/5.png"
import CharacterPng6 from "./Characters/resized/6.png"
import CharacterPng7 from "./Characters/resized/7.png"
import CharacterPng8 from "./Characters/resized/8.png"
import CharacterPng9 from "./Characters/resized/9.png"
import CharacterPng10 from "./Characters/resized/10.png"
import CharacterPng11 from "./Characters/resized/11.png"
import CharacterPng12 from "./Characters/resized/12.png"
import CharacterPng13 from "./Characters/resized/13.png"
import CharacterPng14 from "./Characters/resized/14.png"
import CharacterPng15 from "./Characters/resized/15.png"
import CharacterPng16 from "./Characters/resized/16.png"
import CharacterPng17 from "./Characters/resized/17.png"
import CharacterPng18 from "./Characters/resized/18.png"
import CharacterPng19 from "./Characters/resized/19.png"
import CharacterPng20 from "./Characters/resized/20.png"
import CharacterPng21 from "./Characters/resized/21.png"
import CharacterPng22 from "./Characters/resized/22.png"
import CharacterPng23 from "./Characters/resized/23.png"
import CharacterPng24 from "./Characters/resized/24.png"

const CharactersPage = () => {
  const characterSlides = [
    {
      url: CharacterPng1
    },
    {
      url: CharacterPng2
    },
    {
      url: CharacterPng3
    },
    {
      url: CharacterPng4
    },
    {
      url: CharacterPng5
    },
    {
      url: CharacterPng6
    },
    {
      url: CharacterPng7
    },
    {
      url: CharacterPng8
    },
    {
      url: CharacterPng9
    },
    {
      url: CharacterPng10
    },
    {
      url: CharacterPng11
    },
    {
      url: CharacterPng12
    },
    {
      url: CharacterPng13
    },
    {
      url: CharacterPng14
    },
    {
      url: CharacterPng15
    },
    {
      url: CharacterPng16
    },
    {
      url: CharacterPng17
    },
    {
      url: CharacterPng18
    },
    {
      url: CharacterPng19
    },
    {
      url: CharacterPng20
    },
    {
      url: CharacterPng21
    },
    {
      url: CharacterPng22
    },
    {
      url: CharacterPng23
    },
    {
      url: CharacterPng24
    }
  ]
  
  
  return (
    <>
        <div className='currentPageCharacterPage'></div>
        <div className='picturesContainer'>
          <CharacterAndConceptsSlides slides={characterSlides}/>
        </div>
        <CharactersAndConcepts/>
    </>
  )
}

export default CharactersPage