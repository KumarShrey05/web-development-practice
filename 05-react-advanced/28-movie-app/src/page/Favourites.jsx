import { useContext } from "react";
import MovieContext from "../context/MovieContext";

function Favourites() {

    const { favourites, setFavourites } = useContext(MovieContext);

    const removeFavourite = (id) => {
        setFavourites(
            favourites.filter((movie) => movie.id !== id)
        );
    };

    if (favourites.length===0) {
        return <h2>No movie in favourites!</h2>;
    }

    return (
        <div>
            {
                favourites.map((movie) => (
                    <div key={movie.id}>
                        <img src={movie.poster} alt={movie.title} />
                        <h1>{movie.title}</h1>
                        <h3>{movie.year}</h3>
                        <h4>{movie.rated}</h4>
                        <h5>{movie.released}</h5>
                        <p>{movie.genre}</p>
                        <button onClick={() => removeFavourite(movie.id)}>
                            Remove from Favourites
                        </button>
                    </div>
                ))}
        </div>
    );
}

export default Favourites;