import React, { Component } from "react";
import { locations } from "./locations";
import Child from "./Child";

export default class Location extends Component {
  state = {
    newLocations: locations,
  };
  deleteLocation = (location_id) => {
    let newLocations = [...this.state.newLocations];

    newLocations = newLocations.filter(
      (product) => product.location_id !== location_id
    );

    this.setState({
      newLocations,
    });
  };
  updateLocation = (index) => {
    let newLocations = [...this.state.newLocations];

    newLocations[index].country = "";

    this.setState({
      newLocations,
    });
  };

  render() {
    return (
      <>
        <div className="bg-dark">
          <h1 className="text-center p-5 fw-bold text-light">PRODUCTS</h1>
          <div className="d-flex flex-wrap gap-3 p-2 justify-content-center">
            {this.state.newLocations.map((location, index) => (
              <Child
                productInfo={location}
                key={index}
                index={index}
                delete={this.deleteLocation}
                update={this.updateLocation}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}
