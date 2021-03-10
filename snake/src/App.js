
import './App.css';
import React from 'react'

function App() {
  return (
    <React.Fragment>
    <h1>Snake Game</h1>
    <div class="scoreDisplay"></div>
    <div class="grid"></div>
    <div class="button">
        <button class="top">Top</button>
        <button class="bottom">Bottom</button>
        <button class="left">Left</button>
        <button class="right">Right</button>
    </div>
    <div class="popup">
        <button class="playAgain">Play Again</button>
    </div>
    </React.Fragment>
    
  );
}

export default App;
