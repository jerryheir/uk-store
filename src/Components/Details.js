import React, { Component } from 'react';
import { ProductConsumer } from "../config/context";
import { Link, Redirect } from 'react-router-dom';
import { ButtonAtom } from "../Atoms/ButtonAtom";
import { products } from "../config/data";

export default class Details extends Component {
  state = {
    show: true,
    details: []
  }
  render() {
    return (
      <ProductConsumer>
        {(value)=>{
          const { id, title, img, price, info, inCart, company } = value.details[0];
          console.log(value)
          return (
            <div className="container">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
