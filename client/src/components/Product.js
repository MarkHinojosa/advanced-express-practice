import React from 'react';

class Product extends React.Component {

  componentDidMount() {
    this.props.getProduct(this.props.match.params.productId);
  }

  render() {
    return (
      <div>
      <h1>Product Name: {this.props.product.name}</h1>
      <h1>Product Description: {this.props.product.description}</h1>  
    </div>
    )
  }
}

export default Product;