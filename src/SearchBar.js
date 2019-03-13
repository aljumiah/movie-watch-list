import React, { Component } from "react";

import { connect } from "react-redux";

class SearchBar extends Component {
  // handleChangeWatched = event => {
  //   this.props.filterMovieWatched(event.target.value);
  // };

  // handleChangeWatchlist = event => {
  //   this.props.filterMovieWhatchlist(event.target.value);
  // };

  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group my-3">
          <input
            className="form-control"
            type="text"
            onChange={this.props.handleChange}
          />

          <div className="input-group-append">
            <span className="input-group-text">search</span>
          </div>
        </div>
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
)(SearchBar);
