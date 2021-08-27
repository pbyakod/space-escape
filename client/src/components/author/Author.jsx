import "./author.scss"

export default function Author(author) {
  	return (
    	<div className="aut">
      		<li><h3 className="title">{`${author.author.name}`}</h3></li>
    		<li><a href={`http://www.${author.author.portfolio}`}>Portfolio</a></li>
			<li><a href={`http://www.${author.author.github}`}>Github</a></li>
    	</div>
  	)
}
