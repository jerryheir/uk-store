import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CartItemAtom from '../Atoms/CartItemAtom';

const CartList = ({value}) => {
    const { cart } = value;
    console.log(value, cart);
  return (
    <div className="container-fluid">
        {cart.map((val, key)=>{
            return (
                <CartItemAtom 
                key={key}
                item={val}
                value={value}
                />
            )
        })}
    </div>
  )
}

export default CartList;