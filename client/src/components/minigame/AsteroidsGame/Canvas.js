import React, { useRef, useEffect } from 'react';
import "./AsteroidsGame.css";
import { shipMovement } from "./ShipMovement";
import { drawAsteroids, createAsteroids, moveAsteroids } from "./AstroidMovement";
import { dealWithBorder } from "./helper";
import data from "./data";

const Canvas = () => {

  let level = 3
  const canvasRef = useRef(null);
  const roids = useRef([]);
  
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      let { shipObj } = data;

      if (roids.current.length === 0) {
        createAsteroids(level, data.shipObj, canvas, roids);
        console.log(roids.current);
      }
      // use r going forward
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawAsteroids(ctx, roids.current);
      moveAsteroids(ctx, roids.current);
      dealWithBorder(shipObj, canvas.width, canvas.height);
      shipMovement(ctx, shipObj);

      
      requestAnimationFrame(render);
    }
    render();
  })

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}/>;
}

export default Canvas;