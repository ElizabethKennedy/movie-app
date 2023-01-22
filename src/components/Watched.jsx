import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { WatchCard } from "./WatchCard";
export const Watched = () => {
    const {watched} = useContext(GlobalContext);
    return (
        <div>
            <div>
                <h1 className="page-heading">Watched Movies</h1>
            </div>
            {watched.length > 0 ? (
                <div className="movie-container">
                    {watched.map((movie) => (
                        <WatchCard
                            key={movie.id}
                            movie={movie}
                            type="watched"
                        />
                    ))}
                </div>
            ) : (
                <h2 className="no-movies">There are no movies here, <a className="empty-link" href="/watchlist">go get some popcorn and select a movie to watch!</a>!</h2>
            )}
        </div>
    )
}
