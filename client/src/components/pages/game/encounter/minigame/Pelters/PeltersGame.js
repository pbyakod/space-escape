import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './pelters.css';
import PeltersHome from './PeltersHome';
import PeltersRules from './PeltersRules';
import PeltersPrepare from './PeltersPrepare';
import Canvas from './Canvas';
import PeltersResult from './PeltersResult';
import Result from '../../result/Result';

function PeltersGame() {
  const initialState = {
    renderHome: true,
    renderRules: false,
    renderPrepare: false,
    renderCanvas: false,
    renderResult: false,
    displayCharacter: false
  }

  const gameState = {
    shipLives: 0,
    score: 0
  }

  const [gameProcess, setGameProcess] = useState({ ...initialState });
  const [gameResult, setGameResult] = useState({ ...gameState });

  

  // status of character can be calc here with global status and game result
  // the status can be used for character page
  
  return (
    <div className="pelters">
      {gameProcess.renderHome && <PeltersHome setGameProcess = { setGameProcess }/>}
      {gameProcess.renderRules && <PeltersRules setGameProcess = { setGameProcess }/>}
      {gameProcess.renderPrepare && <PeltersPrepare setGameProcess = { setGameProcess }/>}
      {gameProcess.renderCanvas && <Canvas setGameProcess = { setGameProcess } setGameResult = { setGameResult }/>}
      {gameProcess.renderResult && <PeltersResult setGameProcess = { setGameProcess } gameResult={ gameResult }/>}
      {gameProcess.displayCharacter && <Result/>}
    </div>
  )
}

export default PeltersGame;