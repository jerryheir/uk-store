import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CartColumnAtom from '../Atoms/CartColumnAtom';
import EmptyAtom from '../Atoms/EmptyAtom';
import { ProductConsumer } from '../config/context';
import CartList from './CartList';
import CartTotal from './CartTotal';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value)=>{
            const { cart } = value;
            if (cart && cart.length){
              return (
                <React.Fragment>
                  <h1 className="text-center">YOUR CART</h1>
                  <CartColumnAtom />
                  <CartList value={value} />
                  <CartTotal value={value} />
                </React.Fragment>
              )
            } else {
              return (
                <EmptyAtom text={"YOUR CART IS CURRENTLY EMPTY"} />
              )
            }
          }}
        </ProductConsumer>
      </section>
    )
  }
}
