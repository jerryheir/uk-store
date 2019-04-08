import React, { Component } from 'react';
import { ProductConsumer } from "../config/context";
import "../Styles/ProductList.css";
import Product from './Product';

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3 className="heading">FLOWERS LIST</h3>
        <div>
          <ProductConsumer>
            {(value)=>{
              return value.products.map((val, key)=>{
                return <Product value={val} key={key} />
              })
            }}
          </ProductConsumer>
        </div>
      </div>
    )
  }
}
