const ADD_MOVIE = "ADD_MOVIE";
const UNWATCHED_MOVIE = "UNWATCHED_MOVIE";
const DELETE_MOVIE = "DELETE_MOVIE";
const WATCHED_MOVIE = "WATCHED_MOVIE";
const FILTER_MOVIE = "FILTER_MOVIE";

export const addMovie = movie => {
  return {
    type: ADD_MOVIE,
    payload: movie
  };
};

export const addMovieToWatched = movie => {
  return {
    type: WATCHED_MOVIE,
    payload: movie
  };
};

export const unWatchMovie = movie => {
  return {
    type: UNWATCHED_MOVIE,
    payload: movie
  };
};

export const deleteMovie = movie => {
  return {
    type: DELETE_MOVIE,
    payload: movie
  };
};

export const filterMovie = query => {
  return {
    type: FILTER_MOVIE,
    payload: query
  };
};
