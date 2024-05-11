"use client"

const ButtonsContainer = ({startAction, upAction, rightAction, downAction, leftAction, aAction, bAction}) => {
    return(
        <div id="buttons_container">
            <div id="start_button">
                <button onClick={() => startAction?.()}>START</button> 
            </div>
            <div id="d_pad">
                <button onClick={() => upAction?.()}><img style={{transform: 'rotate(180deg)'}} src={'/pixel-arrow.svg'}/></button>
                <button onClick={() => leftAction?.()}><img style={{transform: 'rotate(90deg)'}} src={'/pixel-arrow.svg'}/></button>
                <button onClick={() => rightAction?.()}><img style={{transform: 'rotate(-90deg)'}} src={'/pixel-arrow.svg'}/></button>
                <button onClick={() => downAction?.()}><img src={'/pixel-arrow.svg'}/></button>
            </div>
            <div id="action_buttons">
                <button onClick={() => aAction?.()}>A</button>
                <button onClick={() => bAction?.()}>B</button>
            </div>
        </div>
    )
}

export default ButtonsContainer