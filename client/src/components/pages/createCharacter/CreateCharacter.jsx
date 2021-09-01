// import CharProtoStats from "../charProto/CharProto"
import { Link } from "react-router-dom"
import api from "../../../utils/api"
import { useEffect, useState } from "react";
import "./charProto.scss";

export default function CreateCharacter() {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});
  
  async function getCharacters() {
    setCharacters(await api.getCharPrototypes());
  }
  function changeCharacter(e) {
    setCharacter(characters[e.target.id]);
  }

  function handleSubmit() {
    if (character) {
      const gameState = JSON.parse(localStorage.getItem('game_state'));
      const newGameState = {
        ...gameState,
        char_id: character.id,
        health: character.health,
        ship: character.ship,
        gold: character.gold
      }

      localStorage.setItem('game_state', JSON.stringify(newGameState));
      api.createGame(newGameState);
    } 
  }

  useEffect(() => {
    getCharacters();
  }, [])
  return (
    <div>
      <h1>Create Character Page</h1>
      <div>
        <section className="main-container">
           <div className="grid-container">
             <div className="grid-item">
               <div className="character-models">
                 {characters.map((character, i) => {
                   return ( 
                      <div 
                        key={character.id}
                        id={i} 
                        className="character-model"
                        onClick={changeCharacter}
                      >
                          {character.name}
                      </div>
                   )
                  })}
                </div>
              </div>
              <div className="grid-item">
                <div className="character-stats">
                  <div className="character-prop">Name: {character.name}</div>
                  <div className="character-prop">Health: {character.health}</div>
                  <div className="character-prop">Gold: {character.gold}</div>
                  <div className="character-prop">Ship: {character.ship}</div>
                </div>
              </div>
           </div>
        </section>
        <Link to="story">
        <button onClick={handleSubmit}>submit</button>
        </Link>
      </div>
    </div>
  )
}
