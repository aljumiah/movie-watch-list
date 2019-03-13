import React, { Component } from "react";

import * as actions from "./store/actions";
import { connect } from "react-redux";

class AddMovie extends Component {
  state = {
    query: ""
  };

  handleChange = event => {
    this.saveValue(event.target.value);
  };
  saveValue = query => {
    let value = (query += this.state.query);
    this.setState({ query: value });
  };

  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group my-3">
          <input type="text" onChange={this.handleChange} />
          <div className="input-group-append">
            <button
              onClick={() => this.props.addMovie(this.state.query)}
              className="btn btn-success"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMovie: movie => dispatch(actions.addMovie(movie))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddMovie);
