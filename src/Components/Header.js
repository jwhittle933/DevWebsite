import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  state = {
    selected: 'welcome'
  }
  makeActive(choice) {
    this.setState({selected: choice})
  }
  isActive(value) {
    return 'item ' + ((value === this.state.selected) ? 'active' : '')
  }
  render() {
    return (
      <div className="header-wrapper">
        <div className="item-large">Jonathan Whittle</div>
        <Link className={ this.isActive('welcome') } to="/" onClick={this.makeActive.bind(this, 'welcome')}>Welcome</Link>
        <Link className={ this.isActive('about')} to="/about" onClick={this.makeActive.bind(this, 'about')}>About</Link>
        <Link className={ this.isActive('developer') } to="/developer" onClick={this.makeActive.bind(this, 'developer')}>Developer</Link>
        <Link className={ this.isActive('projects') } to="/projects" onClick={this.makeActive.bind(this, 'projects')}>Projects</Link>
        <Link className={ this.isActive('contacts') } to="/contact" onClick={this.makeActive.bind(this, 'contacts')}>Contact</Link>
      </div>
    );
  }
}

export default Header;