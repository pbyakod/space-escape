import React, { useRef, useLayoutEffect } from 'react';
import { GOLDS_NUM, TIME_TOTAL } from "./constVaraibles";
import { Player } from "./Player";
import { drawGolds, createGolds } from "./Gold";
import { detectCollection, drawScore, drawTimer, gameOver, drawGameText } from "./helper";

const Canvas = ({ setGameProcess, setGameResult }) => {
  let soundOn = true;

  const canvasRef = useRef(null);
  const direction = {
    left: false,
    right: false,
    up: false,
    down: false,
  }
  const score = useRef(0);
  const text = useRef("");
  const textAlpha = useRef(0);
  const player = new Player();
  const timeLeft = useRef(TIME_TOTAL);
  const golds = createGolds(player.x, player.y);

  let timeUp = false;

  const myInterval = setInterval(() => {
    if (timeLeft.current > 0) {
      timeLeft.current--;
    }
  }, 1000);

  setTimeout(() => {
    clearInterval(myInterval);
  }, 1000 * TIME_TOTAL + 500);
  
  const keyDown = (e) => {
    if (timeUp) {
      return;
    }
    switch(e.keyCode) {
      case 37 : // left arrow (move player left)
        direction.left = true;
        break;
      case 38 : // up arrow (move player up)
        direction.up = true;
        break;
      case 39 : // right arrow (move player right)
        direction.right = true;
        break;
      case 40 : // down arrow (move player down)
        direction.down = true;
        break;
      default :
  
    }
  };
  const keyUp = (e) => {
    switch(e.keyCode) {
      case 37 : // left arrow (stop player left)
        direction.left = false;
        break;
      case 38 : // up arrow (stop player up)
        direction.up = false;
        break;
      case 39 : // right arrow (stop player right)
        direction.right = false;
        break;
      case 40 : // down arrow (stop player down)
        direction.down = false;
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

    const playerSprite = new Image();
    playerSprite.src = "http://untamed.wild-refuge.net/images/rpgxp/mandalorian.png";
    const goldImages = [];
    for (let i = 0; i < GOLDS_NUM; i++) {
      const goldImage = new Image();
      goldImage.src = "https://cdn5.vectorstock.com/i/1000x1000/54/84/stack-of-gold-coins-on-transparent-background-vector-18945484.jpg";
      goldImages.push(goldImage);
    }
    //const background = new Image();
      //background.src = "./collectGoldBackground.png";
      //ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
    var didGameOver = false;

    const myRender = () => {
      
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      // const drawBackground = (() => {
      //   ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      // });
    
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // drawBackground();
      score.current += detectCollection(player, golds, soundOn, didGameOver);
      drawGolds(ctx, golds, goldImages);
      player.move(canvas, direction);
      player.draw(ctx, playerSprite);
      drawTimer(ctx, timeLeft.current);
      drawScore(ctx, canvas, score.current);
      drawGameText(text, textAlpha, ctx, canvas);
      if (timeLeft.current === 0) {
        if (!didGameOver) {
          didGameOver = true;
          setGameResult( {
            score: score.current
          });
          gameOver(text, textAlpha, score.current, player, soundOn, setGameProcess);
        }
      }
      animationId = requestAnimationFrame(myRender);
    };
    animationId = requestAnimationFrame(myRender);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}/>;
}

export default Canvas;