import React, { Component } from "react";
import MovieCard from "./MovieCard";
//import * as actions from "./store/actions";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";

class MovieList extends Component {
  state = {
    query: ""
  };

  updateQuery = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    let movies;
    {
      this.props.is_watchlist
        ? (movies = this.props.watchlist)
        : (movies = this.props.watched);
    }

    if (this.state.query) {
      movies = movies.filter(movie => {
        return `${movie.title}`
          .toLowerCase()
          .includes(this.state.query.toLowerCase());
      });
    }

    const watchlist = movies.map(watchlist => (
      <MovieCard key={watchlist.title} watchlist={watchlist} />
    ));

    const watched = movies.map(watched => (
      <MovieCard key={watched.title} watched={watched} />
    ));

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            {this.props.is_watchlist ? (
              <th>
                Watchlist
                <span href="#" class="badge badge-info">
                  {this.props.watchlist.length}
                </span>
              </th>
            ) : (
              <th>
                {" "}
                Watched{" "}
                <span href="#" class="badge badge-info">
                  {this.props.watched.length}
                </span>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SearchBar handleChange={this.updateQuery} />
            </td>
          </tr>
          <tr>
            {this.props.is_watchlist ? (
              <td>{watchlist}</td>
            ) : (
              <td>{watched}</td>
            )}
          </tr>
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => {
  return {
    watchlist: state.watchlist,
    watched: state.watched,
    filteredMovie: state.filteredMovie
  };
};

export default connect(
  mapStateToProps,
  null
)(MovieList);
