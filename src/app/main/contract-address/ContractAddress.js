"use client"

import {useEffect} from 'react'
const ContractAddress = ({setAAction, setBAction, position, index, activeContent}) => {
    
    // const aAction = () => {
    //     window.open(process.env.NEXT_PUBLIC_DEXTOOLS_URL)
    // }

    const aAction = () => {
        navigator.clipboard.writeText(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS)
    }

    useEffect(() => {
        if(index != activeContent) return
        setAAction(() => aAction)
        // setBAction(() => bAction)
    },[activeContent])

    return(
        <div data-position={position} className='social_container'>
            <img className="social_icon" src={'/solana-logo.svg'} />
            <p className="social_text"><span>{process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}</span></p>
        </div>
    )
}

export default ContractAddress