"use client"

import {useEffect} from 'react'

const Telegram = ({setAAction, setBAction, position, index, activeContent}) => {

    const aAction = () => {
        window.open(process.env.NEXT_PUBLIC_TELEGRAM_LINK)
    }

    const bAction = () => {
        navigator.clipboard.writeText(process.env.NEXT_PUBLIC_TELEGRAM_LINK)
    }

    useEffect(() => {
        if(index != activeContent) return
        setAAction(() => aAction)
        setBAction(() => bAction)
    },[activeContent])

    return(
        <div className='social_container' data-position={position}>
            <img className="social_icon" src={'/telegram-logo.svg'} />
            <p className="social_text">{process.env.NEXT_PUBLIC_TELEGRAM_LINK}</p>
        </div>
    )
}

export default Telegram