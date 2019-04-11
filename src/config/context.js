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
    cart: [],
    modalOpen: false,
    modalProduct: details,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
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
  
  handleDetail = (id) => {
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

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState({ modalProduct: product, modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  increment = (id) => {
    console.log('Increment clicked')
  }

  decrement = (id) => {
    console.log('Decrement clicked')
  }

  removeItem = (id) => {
    console.log('Removed clicked')
  }

  clearCart = (id) => {
    console.log('Cart was cleared');
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        value: "Hello from context...",
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
