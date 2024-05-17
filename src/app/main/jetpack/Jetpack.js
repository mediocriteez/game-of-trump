"use client"

import {useEffect} from 'react'

const Jetpack = ({setAAction, setBAction, position, index, activeContent}) => {

    const aAction = () => {
        window.open('/game/jetpack')
    }

    useEffect(() => {
        if(index != activeContent) return
        setAAction(() => aAction)
    },[activeContent])

    return(
        <div className='social_container' data-position={position}>
            <img className='social_icon' src={'/jetpack-trump-cover.png'} />
            <p className="social_text">Jetpack Trump</p>
        </div>
    )
}

export default Jetpack