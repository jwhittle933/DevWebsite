import React, { Component } from 'react';
import Computer from './SvgComponents/computer'

class NotFound extends Component {
  render() {
    return (
      <div className="wrapper not-found">
        <h1>Whoops! Can't find that one...</h1>
        <p>The navigation buttons up top should help you find your way.</p>
        <div className="computer-div">
          <Computer />
        </div>
      </div>
    );
  }
}

export default NotFound;