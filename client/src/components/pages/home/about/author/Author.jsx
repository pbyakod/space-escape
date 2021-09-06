import "./author.scss"
import sound from "../../../../../utils/sound";

export default function Author(author) {

  return (
    <div>
      {/* used a table here to align the three columns */}    
      <table className={author.author.id%2===0 ? "bg": ""}>
        <tr>
          <td><p className="author-name">{`${author.author.name}`}</p></td>
          <th><a className="author-text" onMouseEnter={sound.PlayHover} href={`http://www.${author.author.portfolio}`}>Portfolio</a></th>
          <th><a className="author-text" onMouseEnter={sound.PlayHover} href={`http://www.${author.author.github}`}>Github</a></th>
        </tr>
      </table>
    </div>
  )
}
