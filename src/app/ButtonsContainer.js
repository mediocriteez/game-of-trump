"use client"

const ButtonsContainer = ({startAction, upAction, rightAction, downAction, leftAction, aAction, bAction}) => {
    return(
        <div id="buttons_container">
            <div id="start_button">
                <button onClick={() => startAction?.()}>START</button> 
            </div>
            <div id="d_pad">
                <button onClick={() => upAction?.()}>U</button>
                <button onClick={() => leftAction?.()}>L</button>
                <button onClick={() => rightAction?.()}>R</button>
                <button onClick={() => downAction?.()}>D</button>
            </div>
            <div id="action_buttons">
                <button onClick={() => aAction?.()}>A</button>
                <button onClick={() => bAction?.()}>B</button>
            </div>
        </div>
    )
}

export default ButtonsContainer