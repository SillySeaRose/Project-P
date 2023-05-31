import React from 'react'
import "./StartingPage.css"
import { NavLink } from 'react-router-dom'
import image from "./Sprites/BackGroundImages/characterHoldingStartButtonAndStars.png"
// import backgroundMoving from "./Sprites/BackGroundImages/starsbackgroundmoving.png"

const StartingPage = () => {
  //Transition from this page to others
  function fadeOutPage() {
    // const buttonAnimation = {
    //   animation: "clickedButton",
    //   animationInterationCount: 5,
    // }
  }
  
  return (
    <>
    {/* Animation of a Welcoming Overlay */}
    <div className='welcomeOverlay'>
        <p className='welcomeText'>Welcome</p>
    </div>

    {/* Box where all the content will be */}
    <div className='background'></div>
    <div className='StartingPageBackground'>
      <h1 id='portefolioTitle'> SillySeaRose Portfolio </h1>
      <img src={image} alt="CharacterImage" className='CharacterHoldingStart'></img>
      <NavLink to="/home"><div className='startWebSite' onClick={fadeOutPage()}>START</div></NavLink>
    </div>
    </>
  )
}

export default StartingPage