import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Products/Product";
import Person from "./Persons/Person";
import Location from "./Locations/Location";

export default class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Product />
        <Person />
        <Location />
      </>
    );
  }
}
