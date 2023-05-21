import React from 'react'
import { NavLink } from 'react-router-dom'
import './CharactersAndConcepts.css'
const CharactersAndConcepts = () => {
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
  // // Leitor das imagens
  // const showImages = imagesForTheCharacters.map((imageShowing) => {
  //   <div key={imageShowing.alt}>
  //     <img src={imageShowing.image} alt={imageShowing.alt}></img>
  //     <p className='imageLabel'>{imageShowing.label}</p>
  //   </div>
  // });

  return (
    <>
    
      <NavLink to="/home"><div className='backButtonCharactersAndConcepts'></div></NavLink>

      {/* Menu para mover as imagens */}
        <div className='arrowRight'></div>
        <div className='arrowLeft'></div>
        <div className='imageCarousel'></div>
    </>
  )
}

export default CharactersAndConcepts