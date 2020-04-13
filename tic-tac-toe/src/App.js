import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  const [wins, setWins] = useState(0)
  const [loses, setLoses] = useState(0)
  const [rounds, setRounds] = useState(1)

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];


  const game = event =>{
    console.log(event)

  }

  return (
    
    <div className="Board">
      <div className="square" id="0" onClick={game}></div>
      <div className="square" id="1" onClick={game}></div>
      <div className="square" id="2" onClick={game}></div>
      <div className="square" id="3" onClick={game}></div>
      <div className="square" id="4" onClick={game}></div>
      <div className="square" id="5" onClick={game}></div>
      <div className="square" id="6" onClick={game}></div>
      <div className="square" id="7" onClick={game}></div>
      <div className="square" id="8" onClick={game}></div>
      <h3 className="scores">Round:{rounds}  Win: {wins}  Lost: {loses}  Tied:{rounds-wins-loses-1}</h3>
    </div>
  );
}

export default App;
