import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
      var active = match ? 'active abc' : '';
      return (
        <li className={active}>
          <Link to={to} activeClassName="selected">
            {label}
          </Link>
        </li>
      )
    }}
    />
  )
}

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          <MenuLink label="Trang chủ" to="/" activeOnlyWhenExact={true}></MenuLink>
          <MenuLink label="Giới thiệu" to="/about" activeOnlyWhenExact={false}></MenuLink>
          <MenuLink label="Liên hệ" to="/contact" activeOnlyWhenExact={false}></MenuLink>
        </ul>
      </nav>
    );
  }
}

export default Menu;
