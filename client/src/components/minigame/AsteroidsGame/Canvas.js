import React, { useRef, useLayoutEffect, useState } from 'react';
import "./AsteroidsGame.css";
import { TURN_SPEED, FPS, LASER_EXPLODE_DUR } from "./constVaraibles";
import { shipMovement, explodeShip, drawLaser, moveLaser } from "./ShipMovement";
import { drawAsteroids, createAsteroids, moveAsteroids, destroyAsteroid } from "./AstroidMovement";
import { dealWithBorder, distBetweenPoints, shootLaser } from "./helper";
import data from "./data";

const Canvas = () => {
  let bg = document.getElementsByClassName("stars");
  //console.log(bg.innerHTML);
   bg.innerHTML = "";
  let level = 3
  const canvasRef = useRef(null);
  const roids = useRef([]);
  const shipInitialState = { ...data.shipObj };
  const shipObj = shipInitialState;
  const keyDown = (e) => {
    if (shipObj.dead) {
      return;
    }
    switch(e.keyCode) {
      case 32 : // space bar (shoot the laser)
        shootLaser(shipObj);
        break;
      case 37 : // left arrow (rotate ship left)
        shipObj.rot = TURN_SPEED / 180 * Math.PI / FPS;
      break;
      case 38 : // up arrow (rotate ship forward)
        shipObj.thrusting = true;  
        break;
      case 39 : // right arrow (rotate ship right)
        shipObj.rot = -TURN_SPEED / 180 * Math.PI / FPS;
        break;
      default :
  
    }
  };
  const keyUp = (e) => {
    if (shipObj.dead) {
      return;
    }
    switch(e.keyCode) {
      case 32 : // space bar (allow shooting again)
        shipObj.canShoot = true;;
        break;
      case 37 : // left arrow (stop rotating left)
        shipObj.rot = 0;
        break;
      case 38 : // up arrow (rotate ship forward)
        shipObj.thrusting = false;  
        break;
      case 39 : // right arrow (rotate ship right)
        shipObj.rot = 0;
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

      if (!shipObj.exloding && shipObj.blinkNum === 0 && !shipObj.dead) {
        for (let i = 0; i < roids.current.length; i++) {
          if (distBetweenPoints(shipObj.x, shipObj.y, roids.current[i].x, roids.current[i].y) < shipObj.r + roids.current[i].r) {
            explodeShip(shipObj, true, "file");
            destroyAsteroid(i, roids, {}, true, "file", level);
            break;
          }
        }
      }

      let ax, ay, ar, lx, ly;
      for (let i = roids.current.length - 1; i >= 0; i--) {

        // grab the asteroid properties
        ax = roids.current[i].x;
        ay = roids.current[i].y;
        ar = roids.current[i].r;

        // loop over the lasers
        for (let j = shipObj.lasers.length - 1; j >= 0; j--) {
          // grab the laser properties
          lx = shipObj.lasers[j].x;
          ly = shipObj.lasers[j].y;

          // detect hits
          if (distBetweenPoints(ax, ay, lx, ly) < ar) {        

            // destroy the asteroid and activate the laser explosion
            destroyAsteroid(i, roids, {}, true, "file", level);
            shipObj.lasers[j].explodeTime = Math.ceil(LASER_EXPLODE_DUR * FPS);

            break;
          }
        }
      }
      
      if (roids.current.length === 0) {
        createAsteroids(level, shipObj, canvas, roids);
      }
      // use r going forward
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawAsteroids(ctx, roids);
      moveAsteroids(ctx, roids.current);
      dealWithBorder(shipObj, canvas.width, canvas.height);
      shipMovement(ctx, shipObj);
      drawLaser(ctx, shipObj);
      moveLaser(canvas, shipObj);

      animationId = requestAnimationFrame(myRender);
    };
    animationId = requestAnimationFrame(myRender);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}/>;
}

export default Canvas;