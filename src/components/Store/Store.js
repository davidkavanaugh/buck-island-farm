import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from 'react-router-dom';
import StoreNav from './StoreNav/StoreNav';
import Product from './Product/Product';
import ProductList from './ProductList/ProductList';


import './Store.css';

class Store extends Component {
  render() {
    return (
      <div id="store">
        <StoreNav />
        <Router>
          <Switch>
            <Route path="/product" exact component={ProductList} />
            <Route path="/product/:id" component={Product} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Store;
