import ActionTypes from "../action-types/actionTypes";

const initialState = {
  movies: [],
};

export const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_MOVIES:
      return { ...state, movies: payload };

    default:
      return state;
  }
};

export const selectedMovieReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECT_MOVIE:
      return { ...state, ...payload };

    case ActionTypes.REMOVE_SELECTED_MOVIE:
      return {};

    default:
      return state;
  }
};
