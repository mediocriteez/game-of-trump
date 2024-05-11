"use client"

import {useEffect} from 'react'

const Lambo = ({setAAction, setBAction, position, index, activeContent}) => {

    const aAction = () => {
        window.open('/game/lambo')
    }

    useEffect(() => {
        if(index != activeContent) return
        setAAction(() => aAction)
    },[activeContent])

    return(
        <div className='social_container' data-position={position}>
            <img className='social_icon' src={'/lambo-trump-cover.png'} />
            <p className="social_text">Lambo Trump</p>
        </div>
    )
}

export default Lambo