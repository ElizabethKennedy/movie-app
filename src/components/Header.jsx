import React from "react";
import { Link } from "react-router-dom";
import logo from "./cinematrix-logo-reels-white.png"

export const Header = () => {
  return (
 <header>
<div className="container">
<div className="inner-content">
<img src={logo} alt="CineMatrix-Logo" />
<ul className="nav-links">
<li>
 <Link to="/">Home</Link>
    </li>
    <li>
<Link to="/watchlist">Watchlist</Link>
    </li>
    <li>
<Link to="/watched">Watched</Link>
    </li>
    <li>
<Link to="/search">Search</Link>
    </li>
    </ul>


    </div>
   </div>
</header>
  )
}
