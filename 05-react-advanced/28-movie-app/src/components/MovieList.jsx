function MovieList({ movie }) {

    return (
    <div>
        <img src={movie.poster} alt={movie.title} />
        <h1>{movie.title}</h1>
        <h3>{movie.year}</h3>
        <h4>{movie.rated}</h4>
        <h5>{movie.released}</h5>
        <p>{movie.genre}</p>
    </div>
    )
}

export default MovieList;