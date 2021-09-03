import React, { useRef, useLayoutEffect, useState } from 'react';
import "./AsteroidsGame.css";
import { TURN_SPEED, FPS } from "./constVaraibles";
import { Ship } from "./ShipMovement";
import { drawAsteroids, createAsteroids, moveAsteroids } from "./AstroidMovement";
import { detectExploding, detectHit, drawShipHealth, drawScore, gameOver, drawGameText } from "./helper";

const Canvas = () => {
  let soundOn = true;

  let level = 3
  const canvasRef = useRef(null);
  const roids = useRef(null);
  const score = useRef(0);
  const text = useRef("");
  const textAlpha = useRef(0);
  const ship = new Ship();
  
  const keyDown = (e) => {
    if (ship.dead) {
      return;
    }
    switch(e.keyCode) {
      case 32 : // space bar (shoot the laser)
        ship.shootLaser(soundOn);
        break;
      case 37 : // left arrow (rotate ship left)
        ship.rot = TURN_SPEED / 180 * Math.PI / FPS;
        break;
      case 38 : // up arrow (rotate ship forward)
        ship.thrusting = true;  
        break;
      case 39 : // right arrow (rotate ship right)
        ship.rot = -TURN_SPEED / 180 * Math.PI / FPS;
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
      case 37 : // left arrow (stop rotating left)
        ship.rot = 0;
        break;
      case 38 : // up arrow (rotate ship forward)
        ship.thrusting = false;  
        break;
      case 39 : // right arrow (rotate ship right)
        ship.rot = 0;
        break;
      default :
  
    }
  };

  window.removeEventListener("keydown", keyDown);
  window.addEventListener("keydown", keyDown);
  window.removeEventListener("keyup", keyUp);
  window.addEventListener("keyup", keyUp);

  useLayoutEffect(() => {

    var animationId = 0;
    
    const myRender = () => {
      
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!roids.current) {
        createAsteroids(level, ship, canvas, roids);
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      score.current += detectExploding(ship, roids, soundOn, level);
      score.current += detectHit(ship, roids, soundOn, level);
      moveAsteroids(ctx, roids.current);
      drawAsteroids(ctx, roids);
      ship.move(canvas);
      ship.draw(ctx);
      drawShipHealth(ctx, ship);
      drawScore(ctx, canvas, score.current);
      drawGameText(text, textAlpha, ctx, canvas);
      if (ship.health === 0 || roids.current.length === 0) {
        gameOver(text, textAlpha, score.current, ship, soundOn);
      }

      animationId = requestAnimationFrame(myRender);
    };
    animationId = requestAnimationFrame(myRender);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}/>;
}

export default Canvas;