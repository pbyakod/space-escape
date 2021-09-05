import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './asteroids.css';
import AsteroidsHome from './AsteroidsHome';
import AsteroidsRules from './AsteroidsRules';
import AsteroidsPrepare from './AsteroidsPrepare';
import Canvas from './Canvas';
import AsteroidsResult from './AsteroidsResult';
import Result from '../../result/Result';

function AsteroidsGame() {
  const initialState = {
    renderHome: true,
    renderRules: false,
    renderPrepare: false,
    renderCanvas: false,
    renderResult: false,
    displayCharacter: false
  }

  const gameState = {
    shipHealth: 0,
    score: 0
  }

  const [gameProcess, setGameProcess] = useState({ ...initialState });
  const [gameResult, setGameResult] = useState({ ...gameState });

  

  // status of character can be calc here with global status and game result
  // the status can be used for character page
  
  return (
    <div className="asteroids">
      {gameProcess.renderHome && <AsteroidsHome setGameProcess = { setGameProcess }/>}
      {gameProcess.renderRules && <AsteroidsRules setGameProcess = { setGameProcess }/>}
      {gameProcess.renderPrepare && <AsteroidsPrepare setGameProcess = { setGameProcess }/>}
      {gameProcess.renderCanvas && <Canvas setGameProcess = { setGameProcess } setGameResult = { setGameResult }/>}
      {gameProcess.renderResult && <AsteroidsResult setGameProcess = { setGameProcess } gameResult={ gameResult }/>}
      {gameProcess.displayCharacter && <Result/>}
    </div>
  )
}

export default AsteroidsGame