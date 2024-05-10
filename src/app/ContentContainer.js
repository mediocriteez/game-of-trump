"use client"

import {useState, useMemo} from 'react'

import Title from './title/Title'
import Scene from './scene/Scene'
import MainContent from './main/MainContent'
import { Cuprum } from 'next/font/google'

const ContentContainer = ({
    setStartAction,
    setAAction,
    setBAction,
    setUpAction,
    setRightAction,
    setDownAction,
    setLeftAction,    
}) => {
    const [currentContent, setCurrentContent] = useState('title')
    return(
        <div id="content_container">
            {currentContent === 'title' && <Title setStartAction={setStartAction} setCurrentContent={setCurrentContent}/>}
            {currentContent === 'scene' && <Scene setAAction={setAAction} setCurrentContent={setCurrentContent}/>}
            {currentContent === 'main' && 
                <MainContent 
                    setStartAction={setStartAction}
                    setAAction={setAAction}
                    setBAction={setBAction}
                    setUpAction={setUpAction}
                    setRightAction={setRightAction}
                    setDownAction={setDownAction}
                    setLeftAction={setLeftAction}
                />
            }
        </div>
    )
}

export default ContentContainer