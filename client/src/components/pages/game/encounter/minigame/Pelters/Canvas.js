import React, { useRef, useLayoutEffect } from 'react';
import { Ship } from "./ShipMovement";
import { drawAsteroids, createAsteroids, moveAsteroids, makeAsteroidsMoveLeft } from "./PelterMovement";
import { detectExploding, detectHit, drawShipLives, drawTimer, gameOver } from "./helper";

const Canvas = ({ setGameProcess, setGameResult }) => {
  let soundOn = false;

  let level = 8
  const canvasRef = useRef(null);
  const roids = useRef(null);
  const ship = new Ship();
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

  let timeLeft = 30;
  let shipLives = 4;
  let score = 0;
  setInterval(() => {
    timeLeft -= 1;
  }, 1000);
  useLayoutEffect(() => {

    
    var animationId = 0;
    const myRender = () => {
      
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      window.addEventListener("keydown", keyDown);
      window.addEventListener("keyup", keyUp);

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
      drawShipLives(ctx, shipLives)
      ship.move(canvas);
      ship.draw(ctx);
      animationId = requestAnimationFrame(myRender);
      if (score > 0) {
        shipLives--;
      }
      if (timeLeft <= 0 || shipLives <= 0 ) {
        console.log('game over')
        // setGameProcess({
        //   renderHome: false,
        //   renderRules: false,
        //   renderPrepare: false,
        //   renderCanvas: false,
        //   renderResult: true,
        //   displayCharacter: false
        // })

        // setGameResult({
        //   ship: (2 - shipLives) * 50,
        //   health: (1 - shipLives/2) * 50,
        //   gold: 0 
        // })
      }
    };
    animationId = requestAnimationFrame(myRender);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
    }
  }, []);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}/>;
}

export default Canvas;