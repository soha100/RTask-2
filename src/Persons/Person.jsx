import React, { Component } from "react";
import { persons } from "./persons";
import Child from "./Child";

export default class Person extends Component {
  state = {
    newPersons: persons,
  };
  deletePerson = (id) => {
    let newPersons = [...this.state.newPersons];
    newPersons = newPersons.filter((person) => person.id !== id);

    this.setState({
      newPersons,
    });
  };

  updatePerson = (index) => {
    let newPersons = [...this.state.newPersons];

    newPersons[index].phone = "000 000";

    this.setState({
      newPersons,
    });
  };
  render() {
    return (
      <div className="bg-dark">
        <h1 className="text-center p-5 fw-bold text-light">PERSONS</h1>
        <div className="d-flex flex-wrap gap-3 p-2 justify-content-center">
          {this.state.newPersons.map((person, index) => (
            <Child
              personInfo={person}
              key={index}
              index={index}
              delete={this.deletePerson}
              update={this.updatePerson}
            />
          ))}
        </div>
      </div>
    );
  }
}
