import "./author.scss"

export default function Author(author) {
  return (
    <div>
      <h3 className="title">{`${author.author.name}`}</h3>
      <a href={`http://www.${author.author.portfolio}`}>View my Portfolio</a>
      <br></br><a href={`http://www.${author.author.github}`}>View my Github</a>
    </div>
  )
}
