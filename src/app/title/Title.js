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
        <div>
            <div className={css.trumpWalk}>
                <img src={'/trump-walk.gif'} data-direction={trumpDirection} onClick={() => setTrumpDirection('out')}/>
            </div>
        </div>
    )
}

export default Title