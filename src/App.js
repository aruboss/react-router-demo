import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/about">Giới thiệu</Link>
              </li>
              <li>
                <Link to="/contact">Liên hệ</Link>
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
