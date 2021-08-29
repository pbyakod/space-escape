import "./author.scss"

export default function Author(author) {
  return (
    <div>
      {/* used a table here to align the three columns */}
      <table>
        <tr>
          {/* fill in your portfolio and github links at ../aboutAuthors/about.js */}
          <td><h3>{`${author.author.name}`}</h3></td>
          <th><a className="author-text" href={`http://www.${author.author.portfolio}`}>Portfolio</a></th>
          <th><a className="author-text" href={`http://www.${author.author.github}`}>Github</a></th>
        </tr>
      </table>
    </div>
  )
}
