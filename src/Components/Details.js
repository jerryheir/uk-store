import React, { Component } from 'react';
import { ProductConsumer } from "../config/context";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { ButtonAtom } from "../Atoms/ButtonAtom";
import EmptyAtom from '../Atoms/EmptyAtom';

export default class Details extends Component {
  state = {
    show: true,
    details: []
  }
  render() {
    return (
      <ProductConsumer>
        {(value)=>{
          const { id, title, img, price, info, inCart, company } = value.details;
          if (value.details && id){
          return (
            <div className="container">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h2>{title}</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={require(`../${img}`)} alt="Product" className="img-fluid"/>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h3>Flower name: {title}</h3>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Sold by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue" style={{ color: '#FF69B4' }}>
                    <strong>
                    Price: <span className="text-uppercase">{'\u20A6'}</span>
                    {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Description:
                  </p>
                  <p className="text-muted lead">
                  {info}
                  </p>
                  <div className="row">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      <ButtonAtom>Back to Home</ButtonAtom>
                    </Link>
                    <ButtonAtom
                    cart
                    disabled={inCart ? true : false}
                    onClick={()=>{
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                    >
                      {inCart ? 'In Cart' : 'Add to Cart'}
                    </ButtonAtom>
                  </div>
                </div>
              </div>
            </div>
          )
          } else {
            return (
              <EmptyAtom text={"YOU DID NOT SELECT ANY FLOWERS"} />
            )
          }
        }}
      </ProductConsumer>
    )
  }
}
