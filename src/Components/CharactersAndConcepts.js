import React from 'react'
import { NavLink } from 'react-router-dom'
import './CharactersAndConcepts.css'
import imageHands from "./Sprites/BackGroundImages/ConceptCharacterPage/PageImageHands.png"
// import imageLight from "./Sprites/BackGroundImages/ConceptCharacterPage/PageImageLightBox.png"
import frameLight from "./Sprites/BackGroundImages/ConceptCharacterPage/CharacterImageFrame.png"


const CharactersAndConcepts = () => {
  // For the carousel
  // const imagesForTheCharacters = [
  //   {
  //     label: "Magic Warrior",
  //     id: 1,
  //     alt: "Magic Warrior",
  //     image: "Characters/1.png"
  //   },
  //   {
  //     label: "Karate Girl",
  //     id: 2,
  //     alt: "Karate Girl",
  //     image: "Characters/2.png"
  //   }
  // ]
  // let showPictureBox = document.querySelector(".imageCarousel");

  // showPictureBox.style.background.image = imagesForTheCharacters.id

  return (
    <>
      <div className='background'></div>
      <NavLink className="NavLinkDecoration" to="/home"><div className='backButtonCharactersAndConcepts'>Back</div></NavLink>

      {/* Menu para mover as imagens */}
        <div className='arrowRight'></div>
        <div className='arrowLeft'></div>
        <img src={frameLight} alt="ImageFrame" className='LightFrame' ></img>
        <img src={imageHands} alt='ImageHands' className='handsImage'></img>
        {/* <img src={imageLight} alt='ImageLight' className='lightImage'></img> */}
        <div className='imageCarousel'></div>
    </>
  )
}

export default CharactersAndConcepts