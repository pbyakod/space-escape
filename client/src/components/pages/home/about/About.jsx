import { Link } from "react-router-dom"
import authors from "./authors"
import Author from "./author/Author"
import './about.scss'
import sound from "../../../../utils/sound";


export default function About() {
  return (
    <div>
      {/* importing main-container from App.scss */}
      <div className="main-container">
        {/* separate divs for each item for scss styling */}
        <div>
          <h1 className="main-title">Authors</h1>
        </div>
        <div className="about-item">
          <section className="author">
            {authors.map((author, index) => <Author key={`${index}`} author={author} />)}
          </section>
        </div>
        <div className="about-item">
          <Link to="" exact>
            <button class="back-btn" onMouseEnter={sound.PlayHover}>back</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
