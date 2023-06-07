import React from 'react'
import CharactersAndConcepts from './CharactersAndConcepts'
import CharacterAndConceptsSlides from "./CharacterAndConceptsSlides"
import { NavLink } from 'react-router-dom'

//Concetps Import's:
import conceptPng1 from "./Concepts/resized/1.png"
import conceptPng2 from "./Concepts/resized/2.png"
import conceptPng3 from "./Concepts/resized/3.png"
import conceptPng4 from "./Concepts/resized/4.png"
import conceptPng5 from "./Concepts/resized/5.png"
import conceptPng6 from "./Concepts/resized/6.png"
import conceptPng7 from "./Concepts/resized/7.png"
import conceptPng8 from "./Concepts/resized/8.png"
import conceptPng9 from "./Concepts/resized/9.png"
import conceptPng10 from "./Concepts/resized/10.png"
import conceptPng11 from "./Concepts/resized/11.png"
import conceptPng12 from "./Concepts/resized/12.png"
import conceptPng13 from "./Concepts/resized/13.png"
import conceptPng14 from "./Concepts/resized/14.png"
import conceptPng15 from "./Concepts/resized/15.png"
import conceptPng16 from "./Concepts/resized/16.png"
import conceptPng17 from "./Concepts/resized/17.png"
import conceptPng18 from "./Concepts/resized/18.png"
import conceptPng19 from "./Concepts/resized/19.png"
import conceptPng20 from "./Concepts/resized/20.png"
import conceptPng21 from "./Concepts/resized/21.png"
import conceptPng22 from "./Concepts/resized/22.png"
import conceptPng23 from "./Concepts/resized/23.png"
import conceptPng24 from "./Concepts/resized/24.png"
import conceptPng25 from "./Concepts/resized/25.png"
import conceptPng26 from "./Concepts/resized/26.png"
import conceptPng27 from "./Concepts/resized/27.png"
import conceptPng28 from "./Concepts/resized/28.png"
import conceptPng29 from "./Concepts/resized/29.png"
import conceptPng30 from "./Concepts/resized/30.png"
import conceptPng31 from "./Concepts/resized/31.png"

const Concepts = () => {
  const conceptsSlides = [
    {
      url: conceptPng1
    },
    {
      url: conceptPng2
    },
    {
      url: conceptPng3
    },
    {
      url: conceptPng4
    },
    {
      url: conceptPng5
    },
    {
      url: conceptPng6
    },
    {
      url: conceptPng7
    },
    {
      url: conceptPng8
    },
    {
      url: conceptPng9
    },
    {
      url: conceptPng10
    },
    {
      url: conceptPng11
    },
    {
      url: conceptPng12
    },
    {
      url: conceptPng13
    },
    {
      url: conceptPng14
    },
    {
      url: conceptPng15
    },
    {
      url: conceptPng16
    },
    {
      url: conceptPng17
    },
    {
      url: conceptPng18
    },
    {
      url: conceptPng19
    },
    {
      url: conceptPng20
    },
    {
      url: conceptPng21
    },
    {
      url: conceptPng22
    },
    {
      url: conceptPng23
    },
    {
      url: conceptPng24
    },
    {
      url: conceptPng25
    },
    {
      url: conceptPng26
    },
    {
      url: conceptPng27
    },
    {
      url: conceptPng28
    },
    {
      url: conceptPng29
    },
    {
      url: conceptPng30
    },
    {
      url: conceptPng31
    }
  ]
  
  return (
    <>  
      <div className='FastTravelMenuCC'>
        <NavLink className="NavLinkDecoration" to="/about"><p className='FastTravelMenuLinksCC'>About</p></NavLink>
        <NavLink className="NavLinkDecoration" to="/concepts"><p className='FastTravelMenuLinksCC current'>Concepts</p></NavLink>
        <NavLink className="NavLinkDecoration" to="/charactersPage"><p className='FastTravelMenuLinksCC'>Characters</p></NavLink>
      </div>

      <div className='picturesContainer'>
          <CharacterAndConceptsSlides slides={conceptsSlides}/>
      </div>
      <CharactersAndConcepts/>
    </>
  )
}

export default Concepts