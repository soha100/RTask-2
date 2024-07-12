import React, { Component } from "react";
import { products } from "./products";
import Child from "./Child";

export default class Product extends Component {
  state = {
    newProducts: products,
  };
  deleteProduct = (id) => {
    let newProducts = [...this.state.newProducts];

    newProducts = newProducts.filter((product) => product.id !== id);

    this.setState({
      newProducts,
    });
  };
  updateProduct = (index) => {
    let newProducts = [...this.state.newProducts];

    newProducts[index].price = newProducts[index].price + 100;

    this.setState({
      newProducts,
    });
  };

  render() {
    return (
      <>
        <div className="bg-dark">
          <h1 className="text-center p-5 fw-bold text-light">PRODUCTS</h1>
          <div className="d-flex flex-wrap gap-3 p-2 justify-content-center">
            {this.state.newProducts.map((x, index) => (
              <Child
                productInfo={x}
                key={index}
                index={index}
                delete={this.deleteProduct}
                update={this.updateProduct}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}
