import "../App.scss"
import Home from "./Home"


export default function main() {
  let stars = []
  for (let i = 0; i < 2800; i++) {
    stars.push("")
  }

  let shootingStars = []
  for (let i = 0; i < 50; i++) {
    shootingStars.push("")
  }

  return (
    <div className = "main">
      <section className="stars">
        {stars.map((star, id) =><div key={id}></div>)}
      </section>
      {/* <section className="shootingStars">
        {shootingStars.map((shootingStar, id) =><div key={id}></div>)}
      </section> */}
      <Home/>
      
    </div>
  )
}
