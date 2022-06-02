import React, { useState } from 'react';
import './App.css'
const App = () => {
  const [redActive, setredActive] = useState(false);
  const [yellowActive, setyellowActive] = useState(false);
  const [greenActive, setgreenActive] = useState(true);
  const [btnState, setbtnState] = useState(false);

  let toggleClass = () => {
    if (redActive === false) {
      setyellowActive(true);
    }

    setgreenActive(false);
    let Timer = setInterval(() => {
      setbtnState(true);
      setyellowActive(false);
      if (yellowActive === false) {
        setredActive(true);
      }
    }, 2000);

    setTimeout(() => {
      setredActive(false);
      setyellowActive(false);
      setgreenActive(true);
      setbtnState(false);
      clearInterval(Timer);
    }, 4000);
  };

  return (
    <div>
      <div className="main-light">
        <div className={redActive ? "red-on" : "red"}></div>
        <div className={yellowActive ? "yellow-on" : "yellow"}></div>
        <div className={greenActive ? "green-on" : "green"}></div>
      </div>
      <button disabled={btnState} onClick={toggleClass} className="traffic-btn">
        Start
      </button>
    </div>
  );
};


export default App;


