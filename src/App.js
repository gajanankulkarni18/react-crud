import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RowComponent from './row-component'

class App extends Component {

  state = {
    products: [],
    product: {
      name:'Sample Product',
      price: 20
    }
  }

  componentDidMount(){
    this.getProducts();
  }


  getProducts = _ => {
    fetch('http://localhost:4000/products/')
    .then(response => response.json())
    .then(response => this.setState({products: response.data}))
    .catch(err => console.error(err))
  }

  addProduct = _ => {
    const {product} = this.state;
    fetch(`http://localhost:4000/products/add?name=${product.name}&price=${product.price}`)
    .then(this.getProducts)
    .catch(err => console.log(err))
  }

  fetchSongDetails = (productInfo) => {
    console.log("Product Name:", productInfo.name);
    console.log("Product price:", productInfo.price);
  }

  render() {

    const {products, product} = this.state;

    return (
      <div>
      <table id="customers">
      <thead>
      <tr>
      <th style={{height: '50px', width: '10%'}}>Product ID</th>
      <th style={{height: '50px', width: '30%'}}>Product Name</th>
      </tr>
      </thead>
      <tbody>
      {products.map(obj => {
        return (
          <tr key={obj.product_id} onClick={this.fetchSongDetails(obj)}>
          <td style={{backgroundColor: 'white'}}>{obj.product_id}</td>
          <td style={{backgroundColor: 'white'}}>{obj.name}</td>
          </tr>
          );
        })}
        </tbody>
        </table>
        <div>
        <input value={product.name} onChange={e => this.setState({product: {...product, name: e.target.value}})} />
        <input value={product.price} onChange={e => this.setState({product: {...product, price: e.target.value}})} />
        <button onClick={this.addProduct}>Add Product</button>
        </div>
        </div>
        );
      }
    }

    export default App;
