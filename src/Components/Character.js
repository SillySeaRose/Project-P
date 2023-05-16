import React from 'react'
import './Components.css'

const Character = () => {
    let topMove = 50 
    //let leftMove = 50 
    let movementSpeed = 2;
   
    document.querySelector("#character")?.addEventListener("keypress", (e) => {
        if (e.key === 'w'){
            topMove-= movementSpeed;
            e.style.top = topMove + "%";
        }
    } )
  
    return (
        <>
            <p className='text'>Personagem:</p>
            <div id = "character"></div>
        </>
  )
}

export default Character