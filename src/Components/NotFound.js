import React, { Component } from 'react';
import Computer from './SvgComponents/computer'

class NotFound extends Component {
  render() {
    return (
      <div className="wrapper not-found">
        <h1>Whoops! Can't find that one...</h1>
        <p>Looks like you've navigated to a page that I don't know. Are you sure the URL is correct?</p>
        <div className="computer-div">
          <Computer />
        </div>
      </div>
    );
  }
}

export default NotFound;