import React, { useRef, useEffect } from 'react';
import "./AsteroidsGame.css";
import { shipMovement } from "./ShipMovement";
import { dealWithBorder } from "./helper";
import data from "./data";

const Canvas = () => {

  const canvasRef = useRef(null);
  
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      let { shipObj } = data;

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      dealWithBorder(shipObj, canvas.width, canvas.height);
      shipMovement(ctx, shipObj);

      
      requestAnimationFrame(render);
    }

    render();
  })

  return <canvas ref={canvasRef} width="700" height="500"/>;
}

export default Canvas;