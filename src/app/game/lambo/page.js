"use client"

import { useState, useEffect, useRef } from "react"

const Lambo = () => {

    const iframeRef = useRef()

        const [buttonShow, setButtonShow] = useState(true)
  
        const enterFullscreen =() => {
            const elem = iframeRef.current; // This could also be any other element you wish to fullscreen.
            
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
        }

    return(
        <>
            <button style={{background:'black', color: 'white', display: buttonShow ? 'block' : 'none', position: 'fixed', zIndex: 2, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '2rem', padding: '7px 12px', borderRadius: '1000px', fontFamily:'Arcade Classic'}} onClick={enterFullscreen}>Enter Full Screen</button>
            <iframe ref={iframeRef} src={'https://663edfd8e261e58d2476a8a3--glistening-tartufo-5af5f5.netlify.app/'} style={{position: 'fixed', zIndex: 1, width:'100vw', height: '100vh'}}></iframe>
        </>
    )
}

export default Lambo