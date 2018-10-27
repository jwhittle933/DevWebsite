import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="item-large">Jonathan Whittle</div>
        <Link className="item active" to="/">Welcome</Link>
        <Link className="item" to="/about">About</Link>
        <Link className="item" to="/developer">Developer</Link>
        <Link className="item" to="/projects">Projects</Link>
        <Link className="item" to="/contact">Contact</Link>
      </div>
    );
  }
}

export default Header;