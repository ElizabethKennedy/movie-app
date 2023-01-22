import React from "react";
import { MovieControls } from "./MovieControls";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const default_image = "";

const setRatingClass = (rating) => {
    if(rating >= 7.5) {
        return "green"
    } else if(rating >= 5) {
        return "yellow"
    } else {
        return "red";
    }
};
export const WatchCard = ({ movie, type }) => {
    return (
        <div className="movie">
            <div className="overlay"></div>
            <img
                src={movie.poster_path ? (`${IMG_API}${movie.poster_path}`) : default_image}
                alt={`${movie.title} Poster`}
            />
            <div className="movie-info">
                <h4>{movie.title}</h4>
                <span className={
                    `rating ${setRatingClass(movie.vote_average)}`
                    }>
                    {movie.vote_average}
                </span>
            </div>
            <MovieControls type={type} movie={movie} />
        </div>
    );
};
