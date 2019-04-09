import React, { Component } from 'react';
import { products, details } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  componentDidMount(){
    this.setProducts();
  }
  state = {
    products: [],
    details: details
  }

  setProducts = () => {
    let array = [];
    products.forEach((item)=>{
      const singleItem = {...item};
      array = [...array, singleItem]
    })
    this.setState({
      products: array
    })
  }
  
  handleDetail = () =>{
    console.log('Hello from detail');
  }

  addToCart = () =>{
    console.log('Hello from add to cart');
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        value: "Hello from context...",
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
