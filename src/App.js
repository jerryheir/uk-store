import React, { Component } from 'react';
import './App.css';
import { Switch,Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Default from './Components/Default';
import Modal from './Components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
