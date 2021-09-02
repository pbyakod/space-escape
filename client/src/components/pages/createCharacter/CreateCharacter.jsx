// import CharProtoStats from "../charProto/CharProto"
import { Link } from "react-router-dom"
import api from "../../../utils/api"
import { useEffect, useState } from "react";
import "./charProto.scss";
import "./createCharacter.scss";
import { useGameContext } from '../../../utils/Game/GlobalState';
import { CREATE_GAME } from '../../../utils/Game/actions';
import jeff from "./charProto/JeffBezosFace.gif"
import elon from "./charProto/ElonMuskFace.gif"
import rich from "./charProto/RichardBransonFace.gif"
import j from "./charProto/JeffBezos.gif"
import e from "./charProto/ElonMusk.gif"
import r from "./charProto/RichardBranson.gif"
import bar from "./charProto/placeholderbargraph.png"

export default function CreateCharacter() {
  const source = [jeff, elon, rich];
  const s = [j, e, r];
  const [state, dispatch] = useGameContext();
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

      dispatch({
        type: CREATE_GAME,
        ...newGameState
      })

      localStorage.setItem('game_state', JSON.stringify(newGameState));
      api.createGame(newGameState);

    } 
  }

  useEffect(() => {
    getCharacters();
  }, [])
  return (
    <div>
      <div>
        <section className="main-container fix">
          <Link to="/"><button className="stop-btn">Back</button></Link>
      <h1 className="title">Choose Your Character</h1>
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
                          <img id={i} className="faces" src={source[i]} alt="face" />
                          <p className="names">{character.name}</p>
                      </div>
                   )
                  })}
                </div>
              </div>
      
              <div className="grid-item">
                <span className="avatardiv">
                  <img className="avatarpic" src={s[character.id-1]} alt="" />
                  {/* <h3 className="title">{character.name}</h3> */}
                  </span>
                <div className="character-stats">
                  {/* <h3 className="title">{character.name}</h3> */}
                  <img className="bar" src={bar} alt="" />
                  <h3 className="title">{character.name}</h3>
                  <div className="character-prop">Health: {character.health}</div>
                  <div className="character-prop">Gold: {character.gold}</div>
                  <div className="character-prop">Ship: {character.ship}</div>
                </div>
              </div>
        <Link to="story">
        <button className="go-btn" onClick={handleSubmit}>submit</button>
        </Link>
        </section>
      </div>
    </div>
  )
}
