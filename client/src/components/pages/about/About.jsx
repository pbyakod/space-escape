import { Link } from "react-router-dom"
import authors from "../../../aboutAuthors/about"
import Author from "../../author/Author"
import '../about/about.scss'


export default function About() {
  return (
    <div>
      {/* importing main-container from App.scss */}
      <div className="main-container">
        {/* separate divs for each item for scss styling */}
        <div className="about-title">
          <h1>About Authors Page</h1>
        </div>
        <div className="about-item">
          <section className="author">
            {authors.map((author, index) => <Author key={`${index}`} author={author} />)}
          </section>
        </div>
        <div className="about-item">
          <Link to="" exact>
            <button class="back-btn">back</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
