import "./author.scss"

export default function Author(author) {
  	return (
    	<div className="author-container">
      		<div className="author-name"><h3 className="title">{`${author.author.name}`}</h3></div>
    		<div className="author-portfolio"><a href={`http://www.${author.author.portfolio}`}>Profile</a></div>
			<div className="author-github"><a href={`http://www.${author.author.github}`}>Github</a></div>
    	</div>
  	)
}
