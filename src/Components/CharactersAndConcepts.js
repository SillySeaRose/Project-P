import React from 'react'
import { NavLink } from 'react-router-dom'
import './CharactersAndConcepts.css'
// import imageHands from "./Sprites/BackGroundImages/ConceptCharacterPage/PageImageHands.png"
// import imageLight from "./Sprites/BackGroundImages/ConceptCharacterPage/PageImageLightBox.png"
// import frameLight from "./Sprites/BackGroundImages/ConceptCharacterPage/CharacterImageFrame.png"
import pageImage from "./Sprites/BackGroundImages/ConceptCharacterPage/Pagev2Image.png"

const CharactersAndConcepts = () => {
  /*
    Logic to make a carousel:
      -need a jsx with a array of objects or i can make that inside the .js file where i will use the objects
      -the condicion for moving can be a "id", to know what id we are at, the "next arrow" can add +1 to the variavel that would act as the source to know the id, and the "back arrow" remove 1 ( using a 
      document.queryselector(".nextArrow").addeventlister("click", () =>{
        let variavel = 0 (it starts with 0, but in reality it is 1, because of the next line of code)
        variavel++  
        if (variavel === arrayObject.id){
              varImage.style.background-image = arrayObject.image; This, in javaScript, can swap the image
      }
      }))
      - Now, for the "back arrow" is the same logic, but instead of adding we remove
      - With this it should work.
  */ 
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
  return (
    <>
      <div className='background'></div>
      <NavLink className="NavLinkDecoration" to="/home"><div className='backButtonCharactersAndConcepts'>Back</div></NavLink>

      {/* Menu para mover as imagens */}
        {/* <div className='arrowRight'></div>
        <div className='arrowLeft'></div> */}
        <img src={pageImage} alt='pageImage' className='pageImage'></img>
        <div className='imageCarousel'></div>
    </>
  )
}

export default CharactersAndConcepts