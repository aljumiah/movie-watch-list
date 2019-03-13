import React, { Component } from "react";
//import logo from "./logo.svg";
//import { Table } from "react-bootstrap";
import "./App.css";
import MovieList from "./MovieList";
//import SearchBar from "./SearchBar";
import AddMovie from "./AddMovie";

import { connect } from "react-redux";

class App extends Component {
  filterMovieWatched = query => {
    let newlist = this.state.filteredWatched.filter(movie => {
      return `${movie.title}`.toLowerCase().includes(query);
    });

    this.setState({
      filteredWatched: newlist
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AddMovie addMovie={this.addMovie} />

          <MovieList
            is_watchlist={true}
            watchlist={this.props.watchlist}
            addMovieToWatched={this.addMovieToWatched}
          />
          <MovieList
            is_watchlist={false}
            watched={this.props.watched}
            unWatchMovie={this.unWatchMovie}
          />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    watchlist: state.watchlist,
    watched: state.watched
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
