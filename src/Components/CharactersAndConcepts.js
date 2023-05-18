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
  //Leitor das imagens
  // const showImages = imagesForTheCharacters.map((imageShowing) => {
  //   <div key={imageShowing.alt}>
  //     <img src={imageShowing.image} alt={imageShowing.alt}></img>
  //     <p className='imageLabel'>{imageShowing.label}</p>
  //   </div>
  // });

  return (
    <>
    <nav>
      <NavLink to="/"><li className='backButtonCharactersAndConcepts'></li></NavLink>
      {/* Menu para mover as imagens ou aumentar */}
      <box className="imageMenu">
        <div className='arrowRight'></div>
        <div className='fullSizeImage'></div>
        <div className='arrowLeft'></div>
      </box>
    </nav> 
    

    <label className='opinionBoxTitte'>Leave a comment</label>
    <input className='opinionBox' type="text"></input>

    <div className='imageCarousel'></div>
    </>
  )
}

export default CharactersAndConcepts