/* eslint-disable react/prop-types */
import React, { Component } from "react";
export default class Child extends Component {
  state = {};
  render() {
    let { id, first_name, last_name, email, phone, address } =
      this.props.personInfo;
    return (
      <>
        <div className="card " style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Name: {first_name + " " + last_name}</h5>
            <p className="card-text">Email: {email}</p>
            <p className="card-text">Phone: {phone}</p>
            <p className="card-text">Address: {address}</p>
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
