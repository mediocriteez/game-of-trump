"use client"

import { useState, useEffect, useRef } from "react"

const Player = ({gameURL}) => {

    const iframeRef = useRef()

    const [buttonShow, setButtonShow] = useState(false)

    useEffect(() => {

        const elem = iframeRef.current

        if(
            elem?.requestFullscreen ||
            elem?.mozRequestFullScreen ||
            elem?.webkitRequestFullscreen ||
            elem?.msRequestFullscreen
        ){
            setButtonShow(true)
        }

    }, [])

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

        setButtonShow(false)
    }

    return(
        <>
            <div onClick={enterFullscreen} style={{placeItems: 'center', background:'black', color: 'white', display: buttonShow ? 'grid' : 'none', position: 'fixed', zIndex: 2, inset: 0, fontSize: '2rem', padding: '7px 12px', fontFamily:'Arcade Classic', border: 'none', outline: 'none', textAlign: 'center'}}>
                <div>Click / Tap<br /> to Start</div>
            </div>
            <iframe ref={iframeRef} src={gameURL} style={{position: 'fixed', zIndex: 1, inset: 0, width: '100vw', height: '100vh', '-webkit-user-select': none}}></iframe>
        </>
    )
}

export default Player