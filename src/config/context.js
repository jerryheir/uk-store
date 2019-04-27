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

    this.setState({ products: tempProducts, cart: [...this.state.cart, product]},
      ()=>{
        this.addTotals()
      })
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
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(val => val.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState({
      cart: [...tempCart],
      products: [...tempProducts]
    },()=>{
      this.addTotals()
    })
  }

  clearCart = () => {
    this.setState({ cart: [] },
      ()=>{
        this.setProducts();
        this.addTotals();
      });
  }

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((val)=>(
      subTotal += val.total
    ))
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState({
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total
    })
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
