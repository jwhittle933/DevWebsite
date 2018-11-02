import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'


class Header extends Component {
  constructor(){
    super()
    this.state = {
      currentPage: 'welcome',
      navPath: this.props.location.pathname
    }
  }
  makeActive(click) {
    this.setState({currentPage: click})
  }
  isActive(value) {
    return 'item ' + ((value === this.state.currentPage) ? 'active' : '')
  }
  render() {
    const { location } = this.props
    // eslint-disable-next-line
    let path = location.pathname
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

export default withRouter(Header);
