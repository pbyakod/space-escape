import React, { useRef, useLayoutEffect } from 'react';
import { FPS } from "./constVaraibles";
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
  const timeLeft = useRef(10);
  const golds = createGolds(player.x, player.y);

  let timeUp = false;

  
  
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

  // componentDidMount() {
  //   const canvas = this.refs.canvas
  //   const ctx = canvas.getContext("2d")
  //   const img = this.refs.image
  //   img.onload = () => {
  //     ctx.drawImage(img, 0, 0)
  //     ctx.font = "40px Courier"
  //     ctx.fillText(this.props.text, 210, 75)
  //   }
  // }


  useLayoutEffect(() => {

    var animationId = 0;
    // var didGameOver = false;

    const myRender = () => {
      
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
    
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const background = new Image();
      background.src = "./collectGoldBackground.png";
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

      const playerSprite = new Image();
      playerSprite.src = "./goldCollectionPlayer.png";
      playerSprite.onload = ctx.drawImage(playerSprite, 0, 0, player.width, player.height, 0, 0, player.width, player.height);
      score.current += detectCollection(player, golds, soundOn);
      drawGolds(ctx, golds);
      player.move(canvas, direction);
      player.draw(ctx);
      drawTimer(ctx, timeLeft.current);
      drawScore(ctx, canvas, score.current);
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
      animationId = requestAnimationFrame(myRender);
    };
    animationId = requestAnimationFrame(myRender);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}/>;
}

export default Canvas;