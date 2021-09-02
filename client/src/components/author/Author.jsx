import "./author.scss"
import { Howl } from 'howler';
import Hover from '../../sounds/hover.mp3';

export default function Author(author) {
  const hoverSound = new Howl({
    src: Hover
  })

  function PlayHoverSound() {
    hoverSound.play();
  }
  return (
    <div>
      {/* used a table here to align the three columns */}
      <table>
        <tr>
          {/* fill in your portfolio and github links at ../aboutAuthors/about.js */}
          <td><h3>{`${author.author.name}`}</h3></td>
          <th><a className="author-text" onMouseEnter={PlayHoverSound} href={`http://www.${author.author.portfolio}`}>Portfolio</a></th>
          <th><a className="author-text" onMouseEnter={PlayHoverSound} href={`http://www.${author.author.github}`}>Github</a></th>
        </tr>
      </table>
    </div>
  )
}
