import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/NavBar.css";
import lovey from "../logo.svg";
import love from "../Images/love.png"


export default class NavBar extends Component {
  render() {
    return (
      <header>
        <Link to="/" className="logo-link">
          <img src={lovey} alt="Logo" className={"Logo"} />
          <span className="logo-text">Lavender</span>
        </Link>
        <Link to="/cart" className="cart">
          <div>
            <img src={love} alt="cart" className="cart-logo" />
            <span className="my-cart">My Cart</span>
          </div>
        </Link>
      </header>
    )
  }
}
