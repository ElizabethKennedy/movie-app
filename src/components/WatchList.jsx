import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { WatchCard } from "./WatchCard";
export const Watchlist = () => {
    const {watchlist} = useContext(GlobalContext);

    return (
        <div>
            <div>
                <h1 className="page-heading">My Watchlist</h1>
            </div>
            {watchlist.length > 0 ? (
                <div className="movie-container">
                    {watchlist.map((movie) => (
                        <WatchCard
                            key={movie.id}
                            movie={movie}
                            type="watchlist"
                        />
                    ))}
                </div>
            ) : (
                <h2 className="no-movies">There are no movies in your watchlist, <a className="empty-link" href="/search">search here to add something!</a>!</h2>
            )}
        </div>
    );
};
