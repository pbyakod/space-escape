import React, { useRef, useLayoutEffect } from 'react';
import { FPS } from "./constVaraibles";
import { Player } from "./Player";
import { drawGolds, createGolds, collectGold } from "./Gold";
import { detectCollection, drawScore, gameOver, drawGameText } from "./helper";

const Canvas = ({ setGameProcess, setGameResult }) => {
  let soundOn = true;

  const canvasRef = useRef(null);
  const golds = useRef(null);
  const score = useRef(0);
  const text = useRef("");
  const textAlpha = useRef(0);
  const player = new Player();
  let timeUp = false;

  const background = new Image();
  background.src = "./collectGoldBackground.png";
  
  // const keyDown = (e) => {
  //   if (timeUp) {
  //     return;
  //   }
  //   switch(e.keyCode) {
  //     case 37 : // left arrow (move player left)
  //       break;
  //     case 38 : // up arrow (move player up)
  //       break;
  //     case 39 : // right arrow (move player right)
  //       break;
  //     case 40 : // down arrow (move player down)
  //       break;
  //     default :
  
  //   }
  // };
  // const keyUp = (e) => {
  //   if (timeUp) {
  //     return;
  //   }
  //   switch(e.keyCode) {
  //     case 37 : // left arrow (stop player left)
  //       // ship.rot = 0;
  //       break;
  //     case 38 : // up arrow (stop player up)
  //       // ship.thrusting = false;  
  //       break;
  //     case 39 : // right arrow (stop player right)
  //       // ship.rot = 0;
  //       break;
  //     case 40 : // down arrow (stop player down)
  //       // ship.rot = 0;
  //       break;
  //     default :
  
  //   }
  // };

  // window.removeEventListener("keydown", keyDown);
  // window.addEventListener("keydown", keyDown);
  // window.removeEventListener("keyup", keyUp);
  // window.addEventListener("keyup", keyUp);

  useLayoutEffect(() => {

    var animationId = 0;
    // var didGameOver = false;

    const myRender = () => {
      
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!golds.current) {
        createGolds(player.x, player.y, golds);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        // score.current += detectCollection(player, golds, soundOn, level);
        drawGolds(ctx, golds);
        // player.move(canvas);
        player.draw(ctx);
        // drawTimer(ctx, canvas, timer.current);
        // drawScore(ctx, canvas, score.current);
        // drawGameText(text, textAlpha, ctx, canvas);
        // if (player.health === 0 || roids.current.length === 0) {
        //   if (!didGameOver) {
        //     didGameOver = true;
        //     setGameResult( {
        //       score: score.current
        //     });
        //     gameOver(text, textAlpha, score.current, player, soundOn, setGameProcess);
        //   }
        // }
      }
      animationId = requestAnimationFrame(myRender);
    };
    animationId = requestAnimationFrame(myRender);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}/>;
}

export default Canvas;