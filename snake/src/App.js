
import './App.css';
import React,{Component, Fragment} from 'react'

function App() {
  return (
    // <Fragment> to render, we can use React.Fragment, Fragment or <></>
      <>
    <h1 class="title">Snake Game</h1>
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
    {/* </Fragment> */}
    </>
  );
}

export default App;
