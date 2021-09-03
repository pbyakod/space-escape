import React, { useRef, useLayoutEffect, useState } from 'react';
import "./AsteroidsGame.css";
import { TURN_SPEED, FPS, LASER_EXPLODE_DUR } from "./constVaraibles";
import { Ship, shipMovement, explodeShip, drawLaser, moveLaser, shootLaser } from "./ShipMovement";
import { drawAsteroids, createAsteroids, moveAsteroids, destroyAsteroid } from "./AstroidMovement";
import { dealWithBorder, distBetweenPoints } from "./helper";

const Canvas = () => {
  let soundOn = true;

  let level = 3
  const canvasRef = useRef(null);
  const roids = useRef([]);
  const ship = new Ship();
  const keyDown = (e) => {
    if (ship.dead) {
      return;
    }
    switch(e.keyCode) {
      case 32 : // space bar (shoot the laser)
        shootLaser(ship, soundOn);
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

      if (!ship.exloding && ship.blinkNum === 0 && !ship.dead) {
        for (let i = 0; i < roids.current.length; i++) {
          if (distBetweenPoints(ship.x, ship.y, roids.current[i].x, roids.current[i].y) < ship.r + roids.current[i].r) {
            explodeShip(ship, soundOn);
            destroyAsteroid(i, roids, {}, soundOn, level);
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
        for (let j = ship.lasers.length - 1; j >= 0; j--) {
          // grab the laser properties
          lx = ship.lasers[j].x;
          ly = ship.lasers[j].y;

          // detect hits
          if (distBetweenPoints(ax, ay, lx, ly) < ar) {        

            // destroy the asteroid and activate the laser explosion
            destroyAsteroid(i, roids, {}, soundOn, level);
            ship.lasers[j].explodeTime = Math.ceil(LASER_EXPLODE_DUR * FPS);

            break;
          }
        }
      }
      
      if (roids.current.length === 0) {
        createAsteroids(level, ship, canvas, roids);
      }
      // use r going forward
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawAsteroids(ctx, roids);
      moveAsteroids(ctx, roids.current);
      dealWithBorder(ship, canvas.width, canvas.height);
      shipMovement(ctx, ship);
      drawLaser(ctx, ship);
      moveLaser(canvas, ship);

      animationId = requestAnimationFrame(myRender);
    };
    animationId = requestAnimationFrame(myRender);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}/>;
}

export default Canvas;