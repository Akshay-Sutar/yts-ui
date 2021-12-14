import { combineReducers } from "redux";
import { moviesReducer, selectedMovieReducer } from "./movieReducer";

const reducers = combineReducers({
  allMovies: moviesReducer,
  movie: selectedMovieReducer,
});

export default reducers;
