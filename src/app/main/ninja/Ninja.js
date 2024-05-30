"use client"

import {useEffect} from 'react'

const Ninja = ({setAAction, setBAction, position, index, activeContent}) => {

    const aAction = () => {
        window.open('/game/ninja')
    }

    useEffect(() => {
        if(index != activeContent) return
        setAAction(() => aAction)
    },[activeContent])

    return(
        <div className='social_container' data-position={position}>
            <img className='social_icon' src={'/ninja-trump-cover.jpg'} />
            <p className="social_text">Ninja Trump</p>
        </div>
    )
}

export default Ninja