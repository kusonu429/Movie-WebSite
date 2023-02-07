

const Movie = (props) => {
  return (
    <div className="movie-header">
       
       <img src={props.img}  alt="s" />
       <p className="imdb_Id">{props.imdb}</p>
        <h2>{props.title}</h2> 
        <p>Year:{props.year}</p> 
       
    </div>
  )
}

export default Movie;
