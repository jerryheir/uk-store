import React, { Component } from 'react';
import styled from 'styled-components';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ProductConsumer } from '../config/context';
import { ButtonAtom } from '../Atoms/ButtonAtom';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
          {(value)=>{
              const { modalOpen, closeModal, modalProduct: { img, title, price } } = value;

              if (!modalOpen){
                  return null
              } else {
                  return (
                      <ModalContainer>
                          <div className="container">
                            <div className="row">
                                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                    <h5>Item added to the cart</h5>
                                    <img src={require(`../${img}`)} alt="Product" className="img-fluid"/>
                                    <h5>{title}</h5>
                                    <h5 className="text-muted">
                                    Price: {'\u20A6'} {price}
                                    </h5>
                                    <Link to="/">
                                        <ButtonAtom
                                        onClick={()=>closeModal()}
                                        >
                                            Buy another
                                        </ButtonAtom>
                                    </Link>
                                    <Link to="/cart">
                                        <ButtonAtom
                                        cart
                                        onClick={()=>closeModal()}
                                        >
                                            Continue to Cart
                                        </ButtonAtom>
                                    </Link>
                                </div>
                            </div>
                          </div>
                      </ModalContainer>
                  )
              }
          }}
      </ProductConsumer>
    )
  }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;

    #modal {
        background: #FFF;
    }
`;
