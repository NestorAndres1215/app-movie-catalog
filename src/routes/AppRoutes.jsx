// src/routes/AppRoutes.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import Search from "../pages/Search/Search";
import Favorites from "../pages/Favorites/Favorites";

import Trending from "../pages/Trending/Trending";
import Upcoming from "../pages/Upcoming/Upcoming";
import Genres from "../pages/Genres/Genres";
import Actors from "../pages/Actor/Actor";
import Movies from "../pages/Movies/Movies";
import Series from "../pages/Series/Series";

import Navbar from "../components/Navbar/Navbar";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />

        {/* Nuevas rutas */}
        <Route path="/trending" element={<Trending />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes; // ✅ SOLO UNO
