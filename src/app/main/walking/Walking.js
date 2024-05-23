"use client"

import {useEffect} from 'react'

const Walking = ({setAAction, setBAction, position, index, activeContent}) => {

    const aAction = () => {
        window.open('/game/walking')
    }

    useEffect(() => {
        if(index != activeContent) return
        setAAction(() => aAction)
    },[activeContent])

    return(
        <div className='social_container' data-position={position}>
            <img className='social_icon' src={'/walking-trump-cover.png'} />
            <p className="social_text">The Walking Trump</p>
        </div>
    )
}

export default Walking