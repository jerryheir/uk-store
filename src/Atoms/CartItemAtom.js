import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const CartItemAtom = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
      <img 
      src={require(`../${img}`)} 
      style={{ width: '5rem', height: '5rem' }}
      alt="Product" 
      className="img-fluid"
      />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">
        Product: 
        </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">
        Price: 
        </span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="d-flex justify-content-center">
          <div>
            <span 
            className="btn btn-black mx-1"
            onClick={()=>decrement(id)}
            >
            -
            </span>
            <span 
            className="btn btn-black mx-1"
            >
            {count}
            </span>
            <span 
            className="btn btn-black mx-1"
            onClick={()=>increment(id)}
            >
            +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={()=>removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>Item total: {'\u20A6'} {total}</strong>
      </div>
    </div>
  )
}

export default CartItemAtom;