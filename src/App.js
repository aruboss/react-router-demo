import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu */}
          <nav className="navbar navbar-inverse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/" activeClassName="selected">Trang chủ</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="selected" >Giới thiệu</NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="selected">Liên hệ</NavLink>
              </li>
            </ul>
          </nav>
          {/* Nội dung */}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
