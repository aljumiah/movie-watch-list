import { watchlist, watched } from "../data";

const initialState = {
  watchlist: watchlist,
  watched: watched
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        watchlist: state.watchlist.concat({ title: action.payload })
      };
    case "WATCHED_MOVIE":
      return {
        ...state,
        watched: state.watched.concat(action.payload),
        watchlist: state.watchlist.filter(movie => movie !== action.payload)
      };
    case "UNWATCHED_MOVIE":
      return {
        ...state,
        watchlist: state.watchlist.concat(action.payload),
        watched: state.watched.filter(movie => movie !== action.payload)
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        watchlist: state.watchlist.filter(movie => movie !== action.payload),
        watched: state.watched.filter(movie => movie !== action.payload)
      };

    default:
      return state;
  }
};

export default reducer;
