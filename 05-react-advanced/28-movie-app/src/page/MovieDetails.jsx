import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const { movies, favourites, setFavourites } = useContext(MovieContext);
    const { id } = useParams();

    const movie = movies.find((movie) => movie.id === id);

    if (!movie) {
        return <h1>Movie Not Found!</h1>;
    }

    const isFavourite = favourites.find(
        (favMovie) => favMovie.id === id
    );

    const movieFavourite = () => {
        if (!isFavourite) {
            setFavourites([...favourites, movie]);
        }
    };

    return (
        <div>
            <img src={movie.poster} alt={movie.title} />

            <h1>{movie.title}</h1>
            <h3>{movie.year}</h3>
            <p>{movie.genre}</p>

            <button onClick={movieFavourite}>
                {isFavourite
                    ? "Added to Favourites"
                    : "Add to Favourites"}
            </button>

            <p>{movie.plot}</p>
            <p>Director: {movie.director}</p>
            <p>Actors: {movie.actors}</p>
            <p>IMDb: {movie.imdbRating}</p>
        </div>
    );
}

export default MovieDetails;
