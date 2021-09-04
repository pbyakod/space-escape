import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './asteroids.css';
import Canvas from './Canvas'
import AsteroidsHome from './AsteroidsHome';
import AsteroidsRules from './AsteroidsRules';
import AsteroidsPrepare from './AsteroidsPrepare';

function AsteroidsGame() {
  const initialState = {
    renderHome: true,
    renderRules: false,
    renderPrepare: false,
    renderCanvas: false
  }
  const [gameProcess, setGameProcess] = useState(initialState);
  return (
    <div className="asteroids">
      {gameProcess.renderHome && <AsteroidsHome setGameProcess = { setGameProcess }/>}
      {gameProcess.renderRules && <AsteroidsRules setGameProcess = { setGameProcess }/>}
      {gameProcess.renderPrepare && <AsteroidsPrepare setGameProcess = { setGameProcess }/>}
      {gameProcess.renderCanvas && <Canvas setGameProcess = { setGameProcess }/>}
    </div>
  )
}

export default AsteroidsGame