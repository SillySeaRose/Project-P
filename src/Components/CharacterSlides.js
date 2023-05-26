import React from 'react'
import "./CharacterSlides.css"
//We take give a prop called "slides" wich is going to read the array of objects "slides"
const CharacterSlides = ({slides}) => {
    //Here we will check in wich slide we are in, updating it with the useState Hook  
    const [currentIndex, setCurrentIndex] = React.useState(0);
  
    const characterSlidesStyle = {
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
        zIndex: "3",
    }

    // To advance in the slider
    const nextPicture = () => {
        //Check the last position of the Id
        const isLastPicture = currentIndex === slides.lenght -1;
        //
        const newId = isLastPicture ? 0 : currentIndex + 1;
        setCurrentIndex(newId);
    }

    // To go back in the slider
    const backPicture = () => {
        //this will check the first position of the Id
        const isFirstPicture = currentIndex === 0;
        //this will change the position of the index, checking if the lenght of the current is less then the minimun possible and return to the last one. Or simply going back, removing one from the currentIndex
        const newId = isFirstPicture ? slides.lengh -1 : currentIndex - 1;
        // here we set the New Id we got in the useState
        setCurrentIndex(newId);
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

  // For the carousel / Array of objects
 
//   const sliders = [
//     {
//       id: 1,
//       imageSource: require ("./Characters/2.png")
//     },
//     {
//       id: 2,
//       imageSource: "./Characters/2.png"
//     }
//   ]
 
  // const imagesForTheCharacters = [
  //   {
  //     // label: "Magic Warrior",
  //     id: 1,
  //     // alt: "Magic Warrior",
  //     image: require ("./Characters/1_1.png")
  //   },
  //   {
  //     // label: "Karate Girl",
  //     id: 2,
  //     // alt: "Karate Girl",
  //     image: require ("./Characters/2.png")
  //   }
  // ]
// Functions to make the image swap to the next or back
// let contador = 0;
// let [imageShowingState, setImageShowingState] = React.useState()

// function nextImage () {
//   contador++
//   for (let image of imagesForTheCharacters){
//     // console.log("Dentro do 'for'");
//     if (contador === image.id){
//       console.log("eu sou a imagem do " + contador);
//       // document.querySelector(".imageCarousel").style.backgroundImage = image.image
//       setImageShowingState = image.image;
//     }
//   }
// }
// function backImage(){
//  contador--
//   for (let image of imagesForTheCharacters){
//     if (contador === image.id){
//       // image.image = 
//     }
//   }
// }

//----------------------