// import CharProtoStats from "../charProto/CharProto"
import { Link } from "react-router-dom"
import api from "../../../utils/api"
import { useEffect, useState } from "react";
import "./createCharacter.scss";
import { useGameContext } from '../../../utils/Game/GlobalState';
import { CREATE_GAME } from '../../../utils/Game/actions';
import jeff from "./charProto/JeffBezosFace.gif"
import elon from "./charProto/ElonMuskFace.gif"
import rich from "./charProto/RichardBransonFace.gif"
import j from "./charProto/JeffBezos.gif"
import e from "./charProto/ElonMusk.gif"
import r from "./charProto/RichardBranson.gif"
import { Bar } from 'react-chartjs-2';

export default function CreateCharacter() {
  const source = [jeff, elon, rich];
  const s = [j, e, r];
  const [charSelected, setChart] = useState(false);
  const [state, dispatch] = useGameContext();
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});

  async function getCharacters() {
    setCharacters(await api.getCharPrototypes());
  }
  
  function changeCharacter(e) {
    setChart(true)
    setCharacter(characters[e.target.id]);
  }

  function handleSubmit() {
    if (!charSelected) return;

    if (character) {
      const gameState = JSON.parse(localStorage.getItem('game_state'));
      const newGameState = {
        ...gameState,
        char_id: character.id,
        health: character.health,
        ship: character.ship,
        gold: character.gold,
        game_id: 1,
      }
     
      api
        .createGame(newGameState)
        .then(data => {
          const game_id = data.id;
          newGameState.game_id = game_id;
          dispatch({
            type: CREATE_GAME,
            ...newGameState
          })
          localStorage.setItem('game_state', JSON.stringify(newGameState));
        });
    } 
  }

  useEffect(() => {
    getCharacters();
  }, [])

  const chartstate = {
    labels: ['Health', "Gold", "Ship"],
    datasets: [
      {
        label: 'Stats',
        backgroundColor: '#4bc0c0',
        borderColor: '#000001',
        borderWidth: 2,
        data: [character.health, character.gold, character.ship]
      }
    ]
  }

  const chartoptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'white',
          font: {
            family: 'Joystix, sans-serif'
          }
        }
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'white',
          font: {
            family: 'Joystix, sans-serif'
          }
        }
      }
    },
    maintainAspectRatio: false
  }

  return (
    <div>
      <div>
        <section className="main-container">
      <h3 className="title">Choose Your Character</h3>
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
      {charSelected? 
              <div className="grid-item stats">
                <span className="avatardiv">
                  <img className="avatarpic" src={s[character.id-1]} alt="" />
                  </span>
                <div className="character-stats">
                  <Bar data={chartstate} height="fit-content" options={chartoptions}/>            
                </div>
              </div>: false}
        <div className="btn-row">
        {charSelected? 
          <Link to="/game"><button className="go-btn" onClick={handleSubmit}>submit</button></Link>
          : false}
          <Link to="/"><button className="stop-btn">Back</button></Link></div>
        </section>
      </div>
    </div>
  )
}
