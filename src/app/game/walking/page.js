"use client"

import Player from '../Player'
import { useState, useEffect, useRef } from "react"

const Walking = () => {

    return(
        <Player gameURL={'https://664d35d30887e95bf63b244e--snazzy-hotteok-53f632.netlify.app'} />
    )

    // const iframeRef = useRef()

    //     const [buttonShow, setButtonShow] = useState(true)
  
    //     const enterFullscreen =() => {
    //         const elem = iframeRef.current; // This could also be any other element you wish to fullscreen.
            
    //         if (elem.requestFullscreen) {
    //             elem.requestFullscreen();
    //         } else if (elem.mozRequestFullScreen) { /* Firefox */
    //             elem.mozRequestFullScreen();
    //         } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    //             elem.webkitRequestFullscreen();
    //         } else if (elem.msRequestFullscreen) { /* IE/Edge */
    //             elem.msRequestFullscreen();
    //         }

    //         setButtonShow(false)
    //     }

    // return(
    //     <>
    //         {/* <div onClick={enterFullscreen} style={{placeItems: 'center', background:'black', color: 'white', display: buttonShow ? 'grid' : 'none', position: 'fixed', zIndex: 2, inset: 0, fontSize: '2rem', padding: '7px 12px', fontFamily:'Arcade Classic', border: 'none', outline: 'none', textAlign: 'center'}}>
    //             <div>Click / Tap<br /> to Start</div>
    //         </div> */}
    //         <iframe ref={iframeRef} src={'https://663edfd8e261e58d2476a8a3--glistening-tartufo-5af5f5.netlify.app/'} style={{position: 'fixed', zIndex: 1, inset: 0, width: '100vw', height: '100vh'}}></iframe>
    //     </>
    // )
}

export default Walking