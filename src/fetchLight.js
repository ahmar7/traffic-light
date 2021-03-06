
import React, { useState, useEffect } from 'react';
import App from './App';
const FetchLight = () => {
    const [redActive, setredActive] = useState(false);
    const [yellowActive, setyellowActive] = useState(false);
    const [greenActive, setgreenActive] = useState(true);

    let toggleClass = () => {

        if (redActive == false) {
            setyellowActive(true);
        }

        setgreenActive(false);
        let Timer = setInterval(() => {
            setredActive(
                true
            );
            setyellowActive(false);

        }, 2000

        )

        setTimeout(() => {
            clearInterval(Timer)
            setredActive(false)
            setyellowActive(false)
            setgreenActive(true)
        }, 4000);
    }
    return (
        <div>
            <App activeLight={toggleClass} />
        </div>
    );
}

export default FetchLight;
