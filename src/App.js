import React, { useState } from 'react';
import './App.css'
const App = () => {

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
      setyellowActive(false)
      setredActive(false)
      setgreenActive(true)
    }, 4000);
  }

  return (
    <div>
      <div className='main-light'>
        <div className={redActive ? "red-on" : 'red'}></div>
        <div className={yellowActive ? "yellow-on" : 'yellow'}></div>
        <div className={greenActive ? "green-on" : 'green'}></div>
      </div>
      <button onClick={toggleClass} className='traffic-btn'>Start</button>
    </div>
  );
}

export default App;


