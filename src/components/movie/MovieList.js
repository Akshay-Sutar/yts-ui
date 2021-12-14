import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../ui/Pagination";
import Movie from "./Movie";
import classes from "./MovieList.module.css";

const MovieList = (props) => {
  const movies = useSelector((state) => state.allMovies.movies);

  if (movies.length === 0) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className={classes.MovieList}>
      <div className="row">
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
      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};

export default MovieList;
