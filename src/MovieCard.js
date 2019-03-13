import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

import * as actions from "./store/actions";
import { connect } from "react-redux";

class MovieCard extends Component {
  render() {
    let watchlist = this.props.watchlist;
    let watched = this.props.watched;

    return (
      <ListGroup.Item variant="light">
        {watchlist ? <h1>{watchlist.title}</h1> : <h1>{watched.title}</h1>}

        {watchlist ? (
          <button
            onClick={() => this.props.deleteMovie(watchlist)}
            className="btn btn-danger"
          >
            {" "}
            Delete
          </button>
        ) : (
          <button
            onClick={() => this.props.deleteMovie(watched)}
            className="btn btn-danger"
          >
            {" "}
            Delete
          </button>
        )}

        {watchlist ? (
          <button
            onClick={() => this.props.addMovieToWatched(this.props.watchlist)}
            className="btn btn-info"
          >
            watched
          </button>
        ) : (
          <button
            onClick={() => this.props.unWatchMovie(watched)}
            className="btn btn-info"
          >
            unwatched
          </button>
        )}
      </ListGroup.Item>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMovie: movie => dispatch(actions.addMovie(movie)),
    unWatchMovie: movie => dispatch(actions.unWatchMovie(movie)),
    addMovieToWatched: movie => dispatch(actions.addMovieToWatched(movie)),
    deleteMovie: movie => dispatch(actions.deleteMovie(movie))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MovieCard);
