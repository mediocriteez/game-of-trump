"use client"

import {useEffect} from 'react'

const Duck = ({setAAction, setBAction, position, index, activeContent}) => {

    const aAction = () => {
        window.open('/game/duck')
    }

    useEffect(() => {
        if(index != activeContent) return
        setAAction(() => aAction)
    },[activeContent])

    return(
        <div className='social_container' data-position={position}>
            <img className='social_icon' src={'/duck-trump-cover.png'} />
            <p className="social_text">Trump Jump</p>
        </div>
    )
}

export default Duck