import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "./Movie";
import classes from "./MovieList.module.css";

const MovieList = (props) => {
  const movies = useSelector((state) => state.allMovies.movies);

  if (movies.length === 0) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="col-12">
      {movies.length &&
        movies.map((movie, idx) => (
          <Movie
            key={idx}
            id={movie.id}
            title={movie.title_english}
            cover_image={movie.medium_cover_image}
            torrents={movie.torrents}
          />
        ))}
    </div>
  );
};

export default MovieList;
