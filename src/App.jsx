import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Search } from "./components/Search";
import './index.css';
import "./lib/font-awesome/css/all.min.css";


function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/watchlist" element={<Watchlist />} />

          <Route path="/watched" element={<Watched />} />

          <Route path="/search" element={<Search />} />

        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
