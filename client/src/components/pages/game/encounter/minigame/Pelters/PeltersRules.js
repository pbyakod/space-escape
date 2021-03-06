import React from "react";
import {  FaCaretUp, FaCaretDown, FaSpaceShuttle } from 'react-icons/fa';

export default function PeltersRules({ setGameProcess }) {

  function renderPrepare() {
    setGameProcess({
      renderHome: false,
      renderRules: false,
      renderPrepare: true,
      renderCanvas: false,
      renderResult: false,
      displayCharacter: false
    })
  }
  return (
    <div className="pelters-container d-block pt-5">
      <h1 className="mt-5 text-center"> How to Play </h1>
      <div className="container">

        <div className="w-50 mx-auto"><FaCaretUp />: Move ship up</div>
        <div className="w-50 mx-auto"><FaCaretDown />: Move ship  down</div>
     
        
        <div className="mt-5 mb-3 w-50 mx-auto">
          Planets come from right to left
        </div>
        
        <div className="my-3 w-50 mx-auto">
          <FaSpaceShuttle />  Ship health decreases by 100 when hit by a planet
        </div>
        <div className="my-3 w-50 mx-auto">
        <FaSpaceShuttle />Game ends when ship health hits 0, or when you have made it 30 lightyears to home.
        </div>
        <div className="mt-5 d-flex justify-content-around ">
          <button className="btn btn-info w-25" onClick={ renderPrepare }>Continue</button>
        </div>
      </div>
    </div>
  );
}