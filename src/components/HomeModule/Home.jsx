import React, { Component } from "react";
import { connect } from "react-redux";

import Checkout from "../CheckoutModule/Checkout";
import {
  get_products,
  incrProduct,
  dcrProduct,
  updateCheckoutPrice,
  removeProduct,
} from "../../actions/ProductsActionService";

export class Home extends Component {
  state = {
    finalProducts: [],
    checkoutPrice: 0,
  };

  IncrementItem = async (product) => {
    await Promise.all([
      this.props.incrProduct(product),
      this.props.get_products(),
      this.props.updateCheckoutPrice(),
    ]);

    this.setState({
      finalProducts: this.props.products,
      checkoutPrice: this.props.checkoutPrice,
    });
  };

  DecrementItem = async (product) => {
    await Promise.all([
      this.props.dcrProduct(product),
      this.props.get_products(),
      this.props.updateCheckoutPrice(),
    ]);

    this.setState({
      finalProducts: this.props.products,
      checkoutPrice: this.props.checkoutPrice,
    });
  };

  RemoveItem = async (product) => {
    await Promise.all([
      this.props.removeProduct(product),
      this.props.get_products(),
      this.props.updateCheckoutPrice(),
    ]);

    this.setState({
      finalProducts: this.props.products,
      checkoutPrice: this.props.checkoutPrice,
    });
  };

  componentDidMount() {
    this.props.get_products();
    this.setState({
      finalProducts: this.props.products,
      checkoutPrice: this.props.checkoutPrice,
    });
  }

  render() {
    console.log();
    return this.state.finalProducts ? (
      <Checkout
        finalProducts={this.state.finalProducts}
        IncrementItem={this.IncrementItem}
        DecrementItem={this.DecrementItem}
        CheckoutPrice={this.state.checkoutPrice}
        RemoveItem={this.RemoveItem}
      />
    ) : (
      <p>Data not available</p>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  checkoutPrice: state.products.CheckoutPrice,
});

export default connect(mapStateToProps, {
  get_products,
  incrProduct,
  dcrProduct,
  updateCheckoutPrice,
  removeProduct,
})(Home);
