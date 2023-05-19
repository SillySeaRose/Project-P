import React from 'react'
import "./StartingPage.css"
import { NavLink } from 'react-router-dom'

const StartingPage = () => {
  return (
    <>
    <div className='StartingPageBackground'>
    <h1 id='portefolioTitle'> SillySeaRose Portfolio </h1>
    <NavLink to="/home"><div className='startWebSite'>Start</div></NavLink>
    </div>
    </>
  )
}

export default StartingPage