import React from 'react'
import './Character.css'

const Character = () => {
    const mainCursor = React.useRef(null);
    const secondaryCursor = React.useRef(null);

    const positionRef = React.useRef({
        //position of the mouse
        mouseX: 0,
        mouseY: 0,
        // position where we want it to arrive
        destinationX: 0,
        destinationY: 0,
        //distance to get to the arrive place
        distanceX: 0,
        distanceY: 0,
        key: -1
    })
    React.useEffect(() => {
        document.addEventListener("mousemove", (event) => {
            // coordinates
            const {clientX, clientY} = event;
            
            const mouseX = clientX;
            const mouseY = clientY;

            positionRef.current.mouseX = mouseX - secondaryCursor.current.clientWidth / 3;
            positionRef.current.mouseY = mouseY - secondaryCursor.current.clientHeight / 3;

            //way to calculate the place where the "mainCursor" will go
            mainCursor.current.style.transform = `translate3d(${mouseX - 
                mainCursor.current.clientWidth / 4}px, ${mouseY -
                mainCursor.current.clientHeight / 3}px, 0)`;
        });

        return () => {};
    }, []);

    React.useEffect(() => {
        const followMouse = () => {

            positionRef.current.key = requestAnimationFrame(followMouse);

            const {mouseX, mouseY, destinationX,destinationY, distanceX,distanceY} = positionRef.current;

            // to position the character in the same position as the cursor
            if(!destinationX | !destinationY){
                positionRef.current.destinationX = mouseX;
                positionRef.current.destinationY = mouseY;
            } else {
                // to create delay in action of the character
                positionRef.current.distanceX = (mouseX - destinationX) * 0.07;
                positionRef.current.distanceY = (mouseY - destinationY) * 0.07;

                //condicion to make the character move or (else) make the character in the same position as the cursor
                if (Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.1){
                    positionRef.current.destinationX = mouseX;
                    positionRef.current.destinationY = mouseY;
                } else {
                    //takes the destination of the cursor and add's the distance needed to get there
                    positionRef.current.destinationX += distanceX;
                    positionRef.current.destinationY += distanceY;
                }
            }
            secondaryCursor.current.style.transform=`translate3d(${destinationX}px , ${destinationY}px, 0)`

        };
        //Makes a loop, where its calling always the function to reload
        followMouse();
        return () => {};
    }, []);

    return (
        <>
            {/* main cursor = charater in the back with low opacity / secondary cursor = yellow aura around the character */}
            <div className='main-cursor' ref={mainCursor}></div>
            <div className='secondary-cursor' ref={secondaryCursor}></div>
        </>
  )
}

export default Character