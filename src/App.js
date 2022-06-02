import React, { useState } from 'react';
import './App.css'
const App = () => {
  let toggleClass = () => {
    console.log("RUnn");
  }
  return (
    <div>
      <div className='main-light'>
        <div className='red'></div>
        <div className='yellow'></div>
        <div className='green'></div>
      </div>
      <button onClick={toggleClass()} className='traffic-btn'>Start</button>
    </div>
  );
}

export default App;
