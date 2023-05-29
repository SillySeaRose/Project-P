import React from 'react'
import "./CharacterSlides.css"
// import CharactersAndConcepts from './CharactersAndConcepts';
//We take give a prop called "slides" wich is going to read the array of objects "slides"
const CharacterSlides = ({slides}) => {
    //Here we will check in wich slide we are in, updating it with the useState Hook  
    const [currentIndex, setCurrentIndex] = React.useState(0);
  
    const characterSlidesStyle = {
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
        //Check the last position of the Id
        const isLastPicture = currentIndex === slides.lenght -1;
        //
        const newIndex = isLastPicture ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    // To go back in the slider
    const backPicture = () => {
        //this will check the first position of the Id
        const isFirstPicture = currentIndex === 0;
        //this will change the position of the index, checking if the lenght of the current is less then the minimun possible and return to the last one. Or simply going back, removing one from the currentIndex
        const newIndex = isFirstPicture ? slides.lengh -1 : currentIndex - 1;
        // here we set the New Id we got in the useState
        setCurrentIndex(newIndex);
    }

    return (
        <>
            <div className='boxHeight'>
                <div className='arrowRight' onClick={nextPicture}></div>
                <div className='arrowLeft' onClick={backPicture}></div>
                <div style={characterSlidesStyle}></div>   
            </div>
        </>
    )
}

export default CharacterSlides


//----------------------

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

