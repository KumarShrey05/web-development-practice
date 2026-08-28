import { createContext } from "react"
import { useState } from "react";


const MovieContext = createContext()

export function MovieProvider ({children}){

    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);

    return(
        <MovieContext.Provider value ={{movies, setMovies, favourites, setFavourites}}>
            {children}
        </MovieContext.Provider>
    );


}

export default MovieContext;
