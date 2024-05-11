"use client"

import { useEffect, useRef } from "react"

const Lambo = () => {

    const iframeRef = useRef()

    useEffect(() => {
        function enterFullscreen() {
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
        enterFullscreen
    }, [])

    return(
        <>
            <button style={{background:'black'}}></button>
            <iframe ref={iframeRef} src={'https://663edfd8e261e58d2476a8a3--glistening-tartufo-5af5f5.netlify.app/'} style={{position: 'fixed', width:'100vw', height: '100vh'}}></iframe>
        </>
    )
}

export default Lambo