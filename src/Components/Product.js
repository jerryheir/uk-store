import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../config/context';

export default class Product extends Component {
  
  render() {
    const { title, img, company, info, price, inCart, id } = this.props.value;
    console.log(inCart)
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5" onClick={()=>console.log('You clicked on the Image Container')}>
            <Link to="/details">
              <img src={require(`../${img}`)} alt="Product" className="card-image-top"/>
            </Link>
            <button 
            className="cart-btn" 
            disabled={inCart} 
            onClick={()=>console.log('Added to the cart')}>
            {inCart ? 
              (<p className="text-capitalize mb-0" disabled>In Cart</p>) : 
              (<i className="fa fa-cart-plus" />)}
            </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
              <p className="align-self-center mb-0">
                {title}
              </p>
              <h5 className="text-blue font-italic mb-0">
                <span className="mr-1">U+20A6</span>
                {price}
              </h5>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear; 
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0,0,0,0.2);
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2)
    }
    .card-footer {
      background: rgba(247, 247, 247)
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
`;
