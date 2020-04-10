import React from 'react'
import { Unlink } from 'grommet-icons'

const NotFound = () => {
  return (
    <div className="wrapper not-found">
      <h1>Whoops! Not able to find that one...</h1>
      <p>The navigation buttons up top should help you find your way.</p>
      <div className="computer-div">
        <Unlink size="xlarge" color="black" />
      </div>
    </div>
  )
}

export default NotFound
