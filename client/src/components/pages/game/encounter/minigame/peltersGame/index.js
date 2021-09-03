import React from "react";
import "./style.css";
import "./app.js"

const PeltersGame = () => {
  return (
    <>
      <div id="container">
      <div id="canvas">
        <p>Use WASD to move grey square</p>
        <h1>
          Distance Travelled: <span className="distance"></span> light years
        </h1>
        <h1>
          {" "}
          Ship-Status: <span className="shipStatus"></span>
        </h1>
        </div>
      </div>

      <script src="./app.js"></script>

    </>
  );
};

export default PeltersGame;
