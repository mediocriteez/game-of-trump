"use client"

import React, {useState, useEffect, useMemo} from 'react'
import WalletAddress from './contract-address/ContractAddress'
import Socials from './socials/Socials'
import Telegram from './telegram/Telegram'
import X from './x/X'
import DEX from './dex/DEX'
import DEXScreener from './dex-screener/DEXScreener'
import ButtonDescription from './ButtonDescription'
import Lambo from './lambo/Lambo'
import Duck from './duck/Duck'

import css from './css.module.css'

const MainContent = ({
    aAction,
    bAction,
    setStartAction,
    setAAction,
    setBAction,
    setUpAction,
    setRightAction,
    setDownAction,
    setLeftAction,
}) => {
    const content = useMemo(() => {
        return [
            {
                title: 'lambo trump',
                activeButtons: {
                    A: 'launch game'
                },
                ele: Lambo
            },
            {
                title: 'trump jump',
                activeButtons: {
                    A: 'launch game'
                },
                ele: Duck
            },
            {
                title: 'contract address',
                activeButtons: {
                    A: 'copy address',
                    // B: 'copy address'
                },
                ele: WalletAddress
            },
            {
                title: 'dex tools',
                activeButtons: {
                    A: 'go to dextools',
                    B: 'copy url'
                },
                ele: DEX
            },
            {
                title: 'dex screener',
                activeButtons: {
                    A: 'go to screener',
                    B: 'copy url'
                },
                ele: DEXScreener
            },
            {
                title: 'telegram',
                activeButtons: {
                    A: 'go to telegram',
                    B: 'copy link'
                },
                ele: Telegram
            },
            {
                title: 'x.com',
                activeButtons: {
                    A: 'go to  x',
                    B: 'copy link'
                },
                ele: X
            }
        ]
    }, [])

    const [activeContent, setActiveContent] = useState(0)
    const [contentTitle, setContentTitle] = useState(null)
    const [activeButtons, setActiveButtons] = useState(null)

    const activeButtonsDescription = useMemo(() => {
        if(!activeButtons) return []
        let result = []
        for(const buttonName in activeButtons){
            const buttonDescription = activeButtons[buttonName]
            result.push({
                buttonName,
                buttonDescription
            })
        }
        return result
    },[activeButtons])

    useEffect(() => {
        setContentTitle(content[activeContent].title)
        setActiveButtons(content[activeContent].activeButtons)
    }, [activeContent])

    const downAction = () => {
        const newActiveContent = activeContent + 1
        if(newActiveContent >= content.length) return
        setActiveContent(newActiveContent)
    }

    const upAction = () => {
        const newActiveContent = activeContent - 1
        console.log(newActiveContent)
        if(newActiveContent < 0) return
        setActiveContent(newActiveContent)
    }

    useEffect(() => {
        setDownAction(() => downAction)
        setUpAction(() => upAction)
    }, [activeContent])

    return(
        <div className={css.mainContentContainer}>
            <h2 className={css.contentTitle}>{contentTitle}</h2>
            <div>{activeContent != 0 && <img src='/pixel-arrow.svg' className={css.indicatorArrow} onClick={upAction} style={{display: 'block', margin: '0 auto', height: '90%', transform: 'rotate(180deg)', cursor: 'pointer'}}/>}</div>
            <div className={css.contentReel}>
                {
                content.map((c, index) => {
                    let position
                    if(index === activeContent){
                        position = 'active'
                    }else if(index > activeContent){
                        position = 'below'
                    }else if(index < activeContent){
                        position = 'above'
                    }
                    return React.createElement(c.ele, {
                        key: c.title,
                        index,
                        position,
                        setAAction: setAAction,
                        setBAction: setBAction,
                        activeContent
                    })
                })
                }
            </div>
            <div>{activeContent != content.length -1 && <img className={css.indicatorArrow} onClick={downAction} src='/pixel-arrow.svg' style={{display: 'block', margin: '0 auto', height: '90%', cursor: 'pointer'}}/>}</div>
            <div className={css.activeButtonsContainer}>   
                {activeButtonsDescription.map((b, index) => <ButtonDescription onClick={(index === 0 ? () => aAction?.() : () => bAction?.())} key={b.buttonName} buttonName={b.buttonName} buttonDescription={b.buttonDescription} />)}
            </div>
        </div>
    )
}

export default MainContent