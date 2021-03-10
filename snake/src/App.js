
import './App.css';
import React,{Component, Fragment} from 'react'

function App() {

  let grid = document.querySelector(".grid"); 
  let popup = document.querySelector(".popup"); 
  let playAgain = document.querySelector(".playAgain"); 
  let scoreDisplay = document.querySelector(".scoreDisplay"); 
  let left = document.querySelector(".left");
  let bottom = document.querySelector(".bottom"); 
  let right = document.querySelector(".right"); 
  let up = document.querySelector(".top"); 
  let width=15; 
  let currentIndex = 0 
  let appleIndex=0 
  let currentSnake=[2,1,0] 
  let direction =1 
  let score = 0 
  let speed = 0.8 
  let intervalTime =0 
  let interval =0


  





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
