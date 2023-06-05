import React from 'react'
import "./CharacterSlides.css"

//We take give a prop called "slides" wich is going to read the array of objects "slides"
const CharacterSlides = ({slides}) => {
    
    //Here we will check in wich slide we are in, updating it with the useState Hook  
    const [currentIndex, setCurrentIndex] = React.useState(0);
  
    const characterAndConceptsSlidesStyle = {
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${slides[currentIndex].url})`,
        transition: "all ease 0.3s",
        zIndex: "3",
    }
   

    // To advance in the slider
    const nextPicture = () => {
        //Check the condition, gives a bollean
        const isLastPicture = currentIndex === slides.length -1;
        // If the currentIndex reaches the max lenght of the array "slides" he swaps the value of the "currentIndex" to 0
        if (currentIndex === slides.length - 1){
            setCurrentIndex(0);
        }
        //if the condition of the var "isLastPicture" is false, he will add plus one to the new var "newIndex" having the current index in "currentIndex" because we cant swap values in a const
        else if (isLastPicture === false){
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
        }
        
        //or
        /* const newIndex = isLastPicture ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);*/
    }

    
    // To go back in the slider
    const backPicture = () => {
        //Check the condition
        const isFirstPicture = currentIndex === 0;
        //this will change the position of the index, doing the same thing as the function "nextPicture" but in reverse, instead of adding one, removes one or goes back to the last in case we go under  index "0"
        const newIndex = isFirstPicture ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    return (
        <>
            <div className='boxHeight'>
                <div className='arrowRight' onClick={nextPicture}></div>
                <div className='arrowLeft' onClick={backPicture}></div>
                <div style={characterAndConceptsSlidesStyle}></div>   
            </div>
        </>
    )
}

export default CharacterSlides

