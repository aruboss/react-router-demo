import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Products extends Component {
  render() {
    var products = [
      {
        id: 1,
        name: 'Iphone X',
        price: 350000
      },
      {
        id: 2,
        name: 'Iphone Xs',
        price: 3150000
      },
      {
        id: 3,
        name: 'Iphone Xp',
        price: 1350000
      }
    ];
    var { match } = this.props;
    console.log(match);
    var result = products.map((product, index) => {
      return (
        <NavLink to="" key={index}>
          <li className="list-group-item">
            {product.id}-{product.name}-{product.price}
          </li>
        </NavLink>
      );
    });
    return (
      <div className="container">
        <h1>Doanh sách sản phẩm</h1>

        <div className="row">
          <ul className="list-group">
            {result}
          </ul>
        </div>

      </div>
    );
  }
}

export default Products;
