import ActionTypes from "../action-types/actionTypes";

export const fetchMovies = (movies) => {
  return {
    type: ActionTypes.FETCH_MOVIES,
    payload: movies,
  };
};

export const getMovie = (movie) => {
  return {
    type: ActionTypes.SELECT_MOVIE,
    payload: movie,
  };
};

export const removeSelectedMovie = (movie) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_MOVIE,
    payload: movie,
  };
};
