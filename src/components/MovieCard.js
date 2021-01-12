import React from "react";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img
        src={`${movie.Poster}`}
        alt={`${movie.Title} Poster`}
      />

      <MovieControls type={type} movie={movie} />
    </div>
  );
};
