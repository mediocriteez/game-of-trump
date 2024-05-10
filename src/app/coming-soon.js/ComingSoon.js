"use client"

import {useState, useEffect} from 'react'

const ComingSoon = () => {

    const [timerVal, setTimerVal] = useState('00:00:00')

    const targetDate = new Date(Date.UTC(2024, 4, 10, 24, 0, 0))

    useEffect(() => {
        const timer = setInterval(() => {

            const now = new Date();
            const nowUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()));
            const difference = targetDate - nowUtc; // difference in milliseconds

            if (difference > 0) {
                // Calculate time parts
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                // Format the countdown string
                const formattedCountdown = [
                    hours.toString().padStart(2, '0'),
                    minutes.toString().padStart(2, '0'),
                    seconds.toString().padStart(2, '0')
                ].join(':');

                setTimerVal(formattedCountdown);
            } else {
                // Clear interval after the target date is reached
                clearInterval(timer);
                setTimerVal('00:00:00');
            }
        }, 1000);

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, []);

    const imgStyle = {
        width: '100%',
    }
    const textStyle = {
        textAlign: 'center',
        fontSize: '1.75rem',
        // whiteSpace: 'wrap'
    }

    return(
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1rem',
                width: '100%',
                height: '100%',
                background: 'black',
                maxWidth: '500px',
                color: 'white',
                margin: '0 auto'
            }}
        >
            <img style={imgStyle} src="/game-of-trump-text.png"/>
            <img style={{...imgStyle, maxHeight: '300px', objectFit: 'contain'}} src="/trump-walk.gif"/>
            <span style={textStyle}>Coming Soon: {timerVal}</span>
            <p style={textStyle}>
                Contract Address:<br />
                <span style={{width: '100%', wordWrap:'break-word'}}>
                    {process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}
                </span>
            </p>
        </div>
    )
}

export default ComingSoon