import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import { fetchMovies } from "../../redux/actions/movieActions";

const AllMovies = () => {
  const movies = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchMoviesOverAPI = () => {
    fetch(`https://yts.mx/api/v2/list_movies.json`)
      .then((res) => res.json())
      .then(({ data }) => {
        const { limit, movie_count, page_number, movies } = data;
        dispatch(fetchMovies(movies));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMoviesOverAPI();
  }, []);

  return (
    <div className="container">
      <MovieList />
    </div>
  );
};

export default AllMovies;
