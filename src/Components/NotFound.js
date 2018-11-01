import React, { Component } from 'react';


class NotFound extends Component {
  render() {
    return (
      <div className="wrapper not-found">
        <h1>Whoops! Can't find that one...</h1>
        <p>Looks like you've navigated to a page that I can't find. Are you sure the URL is correct?</p>
      </div>
    );
  }
}

export default NotFound;