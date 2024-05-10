"use client"

import {useEffect} from 'react'

const X = ({setAAction, setBAction, position, index, activeContent}) => {

    const aAction = () => {
        window.open(process.env.NEXT_PUBLIC_TWITTER_LINK)
    }

    const bAction = () => {
        navigator.clipboard.writeText(process.env.NEXT_PUBLIC_TWITTER_LINK)
    }

    useEffect(() => {
        if(index != activeContent) return
        setAAction(() => aAction)
        setBAction(() => bAction)
    },[activeContent])

    return(
        <div className='social_container' data-position={position}>
            <img className='social_icon' src={'/x-logo.svg'} />
            <p className="social_text">@GameOfTrumpSOL</p>
        </div>
    )
}

export default X