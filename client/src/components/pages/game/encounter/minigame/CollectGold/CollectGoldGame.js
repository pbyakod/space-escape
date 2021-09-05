import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './collectGold.css';
import CollectGoldHome from './CollectGoldHome';
import CollectGoldRules from './CollectGoldRules';
import CollectGoldPrepare from './CollectGoldPrepare';
import Canvas from './Canvas';
import CollectGoldResult from './CollectGoldResult';
import Result from '../../result/Result';

function CollectGoldGame() {
  const initialState = {
    renderHome: false,
    renderRules: false,
    renderPrepare: false,
    renderCanvas: true,
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
    <div className="CollectGold">
      {gameProcess.renderHome && <CollectGoldHome setGameProcess = { setGameProcess }/>}
      {gameProcess.renderRules && <CollectGoldRules setGameProcess = { setGameProcess }/>}
      {gameProcess.renderPrepare && <CollectGoldPrepare setGameProcess = { setGameProcess }/>}
      {gameProcess.renderCanvas && <Canvas setGameProcess = { setGameProcess } setGameResult = { setGameResult }/>}
      {gameProcess.renderResult && <CollectGoldResult setGameProcess = { setGameProcess } gameResult={ gameResult }/>}
      {gameProcess.displayCharacter && <Result/>}
    </div>
  )
}

export default CollectGoldGame;