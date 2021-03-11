import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Home from "./components/HomeModule/Home";
import Checkout from "./components/CheckoutModule/Checkout";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
