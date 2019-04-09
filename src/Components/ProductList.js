import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ProductConsumer } from "../config/context";
import "../Styles/ProductList.css";
import Product from './Product';

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <h3 className="heading">FLOWERS LIST</h3>
            <div className="row">
              <ProductConsumer>
                {(value)=>{
                  return value.products.map((val, key)=>{
                    return <Product value={val} key={key} />
                  })
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
