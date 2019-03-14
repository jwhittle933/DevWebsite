import React, { Component } from 'react'

class NotFound extends Component {
  render() {
    return (
      <div className="wrapper not-found">
        <h1>Whoops! Not able to find that one...</h1>
        <p>The navigation buttons up top should help you find your way.</p>
        <div className="computer-div" />
      </div>
    )
  }
}

export default NotFound
