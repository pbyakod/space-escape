import falling from "./img/falling.gif"
import "./end.scss"
export default function End(prop) {
  let count = 0;
  const feedback = [];

  prop.health <= 0 && feedback.push(' health')
  prop.ship <= 0 && feedback.push(' ship health')
  prop.gold < 0 && feedback.push(' gold')

  return (
    <div className="">
      <h3 className="main-title">Game Over</h3>
      <p className="title">You ran out of 
      {feedback.map((item, i) => {
        let send = item;

        if(i === 0 && i+1 === feedback.length) {send = item}
        else if (i === 0 && feedback.length > 2) {send = item.concat(" ,")}
        else if (i+2 === feedback.length) {send = item.concat(" and")}

         return send

      })}
      !</p>
      <img className="falling" src={falling} alt="astronaut falling" />
      
    </div>
  )
}
