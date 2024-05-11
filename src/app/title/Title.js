"use client"

import {useState, useEffect} from 'react'

import css from './css.module.css'

const Title = ({setStartAction, setCurrentContent}) => {

    const [trumpDirection, setTrumpDirection] = useState(null)

    const startAction = () => {
        setCurrentContent('scene')
        setStartAction(null)
    }

    useEffect(() => {
        setStartAction(() => startAction)
        setTrumpDirection('in')
    }, [])
    
    return(
        <div className={css.titleContainer}>
            <img src={'/game-of-trump-text.png'} />
            <div className={css.trumpWalk}>
                <img src={'/trump-walk.gif'} data-direction={trumpDirection} onClick={() => setTrumpDirection('out')}/>
            </div>
            <p className={css.pressStart} style={{fontSize: '1.5rem', cursor: 'pointer'}} onClick={startAction}>press start</p>
        </div>
    )
}

export default Title