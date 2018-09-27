import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";

const menu = [
  {
    name: 'Trang Chủ',
    to: '/',
    exact: true
  },
  {
    name: 'Giới Thiệu',
    to: '/about',
    exact: false
  },
  {
    name: 'Liên Hệ',
    to: '/contact',
    exact: false
  },
  {
    name: 'Sản Phẩm',
    to: '/products',
    exact: false
  },
  {
    name: 'Login',
    to: '/login',
    exact: false
  }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
      var active = match ? 'active abc' : '';
      return (
        <li className={active}>
          <Link to={to}>
            {label}
          </Link>
        </li>
      )
    }}
    />
  )
}

class Menu extends Component {

  showMenu = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          ></MenuLink>
        )
      });
    }
    return result;
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          {this.showMenu(menu)}
        </ul>
      </nav>
    );
  }
}

export default Menu;
