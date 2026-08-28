import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieContext from "../context/MovieContext";
import MovieList from "../components/MovieList";

function Home() {

    const { movies, setMovies } = useContext(MovieContext);

    const [search, setSearch] = useState("");
    const [genre, setGenre] = useState("all");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);

                const response = await fetch(
                    "https://fooapi.com/api/movies/"
                );

                const data = await response.json();

                setMovies(data.data);
            } catch (error) {
                console.log("Error fetching movies:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [setMovies]);

    const searchMovie = movies.filter((movie) => {
        const matchedSearch = movie.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchedGenre =
            genre === "all" ||
            movie.genre
                .split(",")
                .map((g) => g.trim())
                .includes(genre);

        return matchedSearch && matchedGenre;
    });

    return (
        <div>
            <input
                type="text"
                placeholder="Search Movies"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            >
                <option value="all">Select Genre</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Animation">Animation</option>
                <option value="Biography">Biography</option>
                <option value="Comedy">Comedy</option>
                <option value="Crime">Crime</option>
                <option value="Drama">Drama</option>
                <option value="Family">Family</option>
                <option value="Fantasy">Fantasy</option>
                <option value="History">History</option>
                <option value="Horror">Horror</option>
                <option value="Music">Music</option>
                <option value="Mystery">Mystery</option>
                <option value="Romance">Romance</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Thriller">Thriller</option>
                <option value="War">War</option>
                <option value="Western">Western</option>
            </select>

            {loading ? (
                <p>Loading movies...</p>
            ) : searchMovie.length > 0 ? (
                searchMovie.map((movie) => (
                    <Link
                        to={`/movies/${movie.id}`}
                        key={movie.id}
                    >
                        <MovieList movie={movie} />
                    </Link>
                ))
            ) : (
                <p>No movies found.</p>
            )}
        </div>
    );
}

export default Home;
