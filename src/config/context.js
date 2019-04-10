import React, { Component } from 'react';
import { products, details } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  componentDidMount(){
    this.setProducts();
  }
  state = {
    products: [],
    details: details,
    cart: []
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

  getItem = (id) => {
    const products = this.state.products.find(item => item.id === id);
    return products;
  }
  
  handleDetail = (id) =>{
    const product = this.getItem(id);
    this.setState({
      details: product
    })
  }

  addToCart = (id) =>{
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState({ products: tempProducts, cart: [...this.state.cart, product]})
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
