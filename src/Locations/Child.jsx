/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { Component } from "react";

export default class Child extends Component {
  state = {};
  render() {
    let { location_id, name, description, country, city } =
      this.props.productInfo;
    return (
      <>
        <div className="card " style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Name: {name}</h5>
            <p className="card-text">Description: {description}</p>
            <p className="card-text">Country: {country}</p>
            <p className="card-text">City: {city}</p>
            <button
              className="btn btn-outline-danger w-100"
              onClick={() => this.props.delete(location_id)}
            >
              Delete
            </button>

            <button
              className="btn btn-outline-success w-100 mt-3"
              onClick={() => this.props.update(this.props.index)}
            >
              Update
            </button>
          </div>
        </div>
      </>
    );
  }
}
