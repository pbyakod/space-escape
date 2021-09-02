import api from "../../utils/api";
import { useEffect, useState } from "react";
import "./charProto.scss";

export default function CharProtoStats() {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});
  
  async function getCharacters() {
    setCharacters(await api.getCharPrototypes());
  }
  function changeCharacter(e) {
    console.log(e.target.id)
    setCharacter(characters[e.target.id]);
  }

  useEffect(() => {
    getCharacters();
  }, [])
   
  
  return (
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
                      onMouseOver={changeCharacter}
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
    </div>
  )
}
