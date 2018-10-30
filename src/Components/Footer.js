import React, { Component } from 'react';
import logo from '../img/logo.svg'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>Built with React</p>
        <img src={ logo } className="App-logo" alt="logo"/>
      </div>
    );
  }
}

export default Footer;