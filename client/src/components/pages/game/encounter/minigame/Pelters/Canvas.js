import React, { useRef, useLayoutEffect } from 'react';
import { Ship } from "./ShipMovement";
import { drawAsteroids, createAsteroids, moveAsteroids, makeAsteroidsMoveLeft } from "./PelterMovement";
import { detectExploding, detectHit, drawShipLives, drawShipHealth, drawTimer, gameOver, drawGameText } from "./helper";
import { useGameContext } from '../../../../../../utils/Game/GlobalState';

const Canvas = ({ setGameProcess, setGameResult }) => {
  let soundOn = false;
  const [state, dispatch] = useGameContext();

  let level = 8
  const canvasRef = useRef(null);
  const roids = useRef(null);
  const ship = new Ship();
  const text = useRef("");
  const textAlpha = useRef(0);
  ship.setXPos(window.innerWidth / 12);// set to left side of screen
  
  const keyDown = (e) => {
    if (ship.dead) {
      return;
    }
    switch(e.keyCode) {
      case 32 : // space bar (shoot the laser)
        ship.shootLaser(soundOn);
        break;
      case 38 : // up arrow (rotate ship forward)
        ship.thrusting = true; 
        ship.setNoseDirection((1/2) * Math.PI); 
        break;
      case 40:
        ship.thrusting = true;
        ship.setNoseDirection((3/2) * Math.PI);
        break;
      default :
  
    }
  };
  const keyUp = (e) => {
    if (ship.dead) {
      return;
    }
    switch(e.keyCode) {
      case 32 : // space bar (allow shooting again)
        ship.canShoot = true;;
        break;
      case 38 : // up arrow (rotate ship forward)
        ship.thrusting = false;  
        break;
      case 40:
        ship.thrusting = false;
        break;
      default :
  
    }
  };

  window.removeEventListener("keydown", keyDown);
  window.addEventListener("keydown", keyDown);
  window.removeEventListener("keyup", keyUp);
  window.addEventListener("keyup", keyUp);

  let timeLeft = 30;
  let shipLives = 10;
  let score = 0;
  setInterval(() => {
    timeLeft -= 1;
  }, 1000);
  useLayoutEffect(() => {

    
    var animationId = 0;
    var didGameOver = false;
    const myRender = () => {
      
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!roids.current) {
        createAsteroids(level, ship, canvas, roids);
        makeAsteroidsMoveLeft(roids.current);
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      score = detectExploding(ship, roids, soundOn, level);
      detectHit(ship, roids, soundOn, level);
      moveAsteroids(ctx, roids.current, 1, 1);
      drawAsteroids(ctx, roids);
      drawTimer(ctx, timeLeft, canvas);
      // drawShipLives(ctx, shipLives)
      drawShipHealth(ctx, ship);
      drawGameText(text, textAlpha, ctx, canvas);
      ship.move(canvas);
      ship.draw(ctx);
      animationId = requestAnimationFrame(myRender);
      if (score > 0) {
        shipLives--;
      }
      if (timeLeft <= 0 || shipLives <= 0 ) {
        console.log('game over')
        setGameProcess({
          renderHome: false,
          renderRules: false,
          renderPrepare: false,
          renderCanvas: false,
          renderResult: true,
          displayCharacter: false
        })

        setGameResult({
          ship: (2 - shipLives) * 50,
          health: (1 - shipLives/2) * 50,
          gold: 0 
        })
      }
      if (ship.health === 0 || roids.current.length === 0) {
        if (!didGameOver) {
          didGameOver = true;
          setGameResult( {
            shipHealth: ship.health,
            score: score.current
          });
          gameOver(text, textAlpha, score.current, ship, soundOn, setGameProcess);
        }
      }
    };
    animationId = requestAnimationFrame(myRender);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}/>;
}

export default Canvas;