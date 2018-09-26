import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product  from './Product';

class Products extends Component {
  render() {
    var products = [
      {
        id: 1,
        slug: 'iphone',
        name: 'Iphone X',
        price: 350000
      },
      {
        id: 2,
        slug: 'samsung',
        name: 'Iphone Xs',
        price: 3150000
      },
      {
        id: 3,
        slug: 'oppo',
        name: 'Iphone Xp',
        price: 1350000
      }
    ];
    var { match } = this.props; //coi match nhu 1 props
    var url = match.url;

    var result = products.map((product, index) => {
      return (
        <NavLink to={`${url}/${product.slug}`} key={index}>
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

      
      <div className="row">
        <Route path="/products/:name" component={Product}/>
      </div>
      
      </div>
    );
  }
}

export default Products;
