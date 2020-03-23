import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const HeaderFunc = () => {
  const [currentPage, setCurrentPage] = useState(window.location.pathname)

  return (
    <div className="header-wrapper">
      <div className="item-large">Jonathan Whittle</div>
      <Link
        className={'item ' + (currentPage === '/' ? 'active' : '')}
        to="/"
        onClick={() => setCurrentPage('/')}
      >
        Welcome
      </Link>
      <Link
        className={'item ' + (currentPage === '/about' ? 'active' : '')}
        to="/about"
        onClick={() => setCurrentPage('/about')}
      >
        About
      </Link>
      <Link
        className={'item ' + (currentPage === '/developer' ? 'active' : '')}
        to="/developer"
        onClick={() => setCurrentPage('/developer')}
      >
        Developer
      </Link>
      <Link
        className={'item ' + (currentPage === '/projects' ? 'active' : '')}
        to="/projects"
        onClick={() => setCurrentPage('/projects')}
      >
        Projects
      </Link>
      <Link
        className={'item ' + (currentPage === '/contact' ? 'active' : '')}
        to="/contact"
        onClick={() => setCurrentPage('/contact')}
      >
        Contact
      </Link>
    </div>
  )
}

export default withRouter(HeaderFunc)
