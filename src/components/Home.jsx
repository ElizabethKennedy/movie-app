import React, { useState, useEffect } from "react";
import { Movie } from "./Movie";


//The Movie DB API key //
const API_KEY = "b2d5db98eea2647aecffb2ba011067a6";


//... and url address//
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;


export const Home = () => {



    const [ movies, setMovies ] = useState([]);
    useEffect(() => {
        getMovies(FEATURED_API);
    }, []);
    const getMovies = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
            setMovies(data.results);
        });
    }

    return (
        <div>
        <div>
        <h1 className="page-heading">Featured Movies</h1>
         </div>
            <div className="movie-container">
                {movies.length > 0 && movies.map(movie =>
                <Movie key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}
