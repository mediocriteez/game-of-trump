"use client"

import {useState, useEffect, useRef} from 'react'

import css from './css.module.css'

const Scene = ({setAAction, setCurrentContent}) => {

    const [titleFade, setTitleFade] = useState(false)
    const sceneVideoRef = useRef()

    const aAction = () => {
        setCurrentContent('main')
        setAAction(null)
    }

    useEffect(() => {
        setAAction(() => aAction)
        // setTimeout(() => setTitleFade(true), 2000)
        const sceneVideo = sceneVideoRef.current
        if(!sceneVideo) setCurrentContent('main')

        // const fadeAudio = () => {
        //     let volume = 0;
        //     video.volume = volume;
        //     const interval = 50;
        //     const step = interval / duration;

        //     const intervalId = setInterval(() => {
        //         if (volume >= 1.0) {
        //         clearInterval(intervalId);
        //         } else {
        //         volume += step;
        //         video.volume = Math.min(volume, 1.0);
        //         }
        //     }, interval);
        // }

        const handleCanPlayThrough = () => {
            setTitleFade(true)
            sceneVideo.play()
        }

        const handleEnded = () => {
            setCurrentContent('main')
        }

        sceneVideo.addEventListener('canplaythrough', handleCanPlayThrough)
        sceneVideo.addEventListener('ended', handleEnded)

        return () => {
            sceneVideo.removeEventListener('canplaythrough', handleCanPlayThrough)
            sceneVideo.removeEventListener('ended', handleEnded)
        }
    }, [])

    return(
        <div className={css.sceneContainer}>
            <div className={css.titleCard} data-fade-out={titleFade}>
                <span>Washington D.C. , 2019</span>
            </div>
            <video ref={sceneVideoRef} playsinline className={css.sceneVideo} src={'/scene.mp4'}></video>
            <div onClick={aAction} className={css.buttonDescription} style={{fontSize: '1.5rem', cursor: 'pointer'}}><span style={{display:'inline-grid', placeItems: 'center', width: '30px', aspectRatio: '1/1', borderRadius: '50%', background: 'white', color: 'black', marginRight: '5px'}}>A</span> skip</div>
        </div>
    )
}

export default Scene