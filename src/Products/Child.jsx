/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { Component } from "react";

export default class Child extends Component {
  state = {};
  render() {
    let { id, name, description, price, category, stock } =
      this.props.productInfo;
    return (
      <>
        <div className="card " style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Name: {name}</h5>
            <p className="card-text">Description: {description}</p>
            <p className="card-text">Price: {price}</p>
            <p className="card-text">Category: {category}</p>
            <p className="card-text">Stock: {stock}</p>
            <button
              className="btn btn-outline-danger w-100"
              onClick={() => this.props.delete(id)}
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
