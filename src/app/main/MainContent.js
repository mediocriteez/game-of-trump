"use client"

import React, {useState, useEffect, useMemo} from 'react'
import WalletAddress from './contract-address/ContractAddress'
import Socials from './socials/Socials'
import ButtonDescription from './ButtonDescription'

import css from './css.module.css'

const MainContent = ({
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
                title: 'contract address',
                activeButtons: {
                    A: 'copy address',
                    B: 'copy address'
                },
                ele: WalletAddress
            },
            {
                title: 'telegram',
                activeButtons: {
                    A: 'go to telegram'
                },
                ele: Socials
            },
            {
                title: 'x',
                activeButtons: {
                    A: 'go to  x'
                },
                ele: Socials
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
                        position
                    })
                })
                }
            </div>
            <div className={css.activeButtonsContainer}>   
                {activeButtonsDescription.map(b => <ButtonDescription key={b.buttonName} buttonName={b.buttonName} buttonDescription={b.buttonDescription} />)}
            </div>
        </div>
    )
}

export default MainContent