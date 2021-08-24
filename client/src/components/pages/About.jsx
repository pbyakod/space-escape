import { Link } from "react-router-dom"
import authors from "../../aboutAuthors/about"
import Author from "../author/Author"


export default function About() {
  return (
    <div>
      <h1>About Authors Page</h1>

      <section className="author">
      {authors.map((author, index) => <Author key={`${index}`} author={author} />)}
      </section>

      <Link to="" exact>
      <button>back</button>
      </Link>
    </div>
  )
}