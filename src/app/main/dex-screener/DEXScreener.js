"use client"

import {useEffect} from 'react'

const DEX = ({setAAction, setBAction, position, index, activeContent}) => {

    const aAction = () => {
        window.open(process.env.NEXT_PUBLIC_DEXSCREENER_URL)
    }

    const bAction = () => {
        navigator.clipboard.writeText(process.env.NEXT_PUBLIC_DEXSCREENER_URL)
    }

    useEffect(() => {
        if(index != activeContent) return
        setAAction(() => aAction)
        setBAction(() => bAction)
    },[activeContent])

    return(
        <div className='social_container' data-position={position}>
            <img className="social_icon" src={'/dexscreener-logo.svg'} />
            <a className="social_text" href={process.env.NEXT_PUBLIC_DEXSCREENER_URL}><span className={'social_text'}>{process.env.NEXT_PUBLIC_DEXSCREENER_URL}</span></a>
        </div>
    )
}

export default DEX