import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const NavItem = ({ currentPage, icon, location, navToFunc }) => {
  return (
    <Link
      className={'item ' + (currentPage === location ? 'active' : '')}
      to={`${location}`}
      onClick={() => navToFunc(location)}
    >
      <i
        className={`fas ${icon}`}
        style={{ color: '#51718C', 'font-size': '1.5em' }}
      ></i>
    </Link>
  )
}

const HeaderFunc = () => {
  const [currentPage, setCurrentPage] = useState(window.location.pathname)

  return (
    <div className="header-wrapper">
      <p className="item-large">JW</p>
      <div>
        <NavItem
          currentPage={currentPage}
          icon="fa-home"
          location="/"
          navToFunc={setCurrentPage}
        />
        <NavItem
          currentPage={currentPage}
          icon="fa-portrait"
          location="/about"
          navToFunc={setCurrentPage}
        />
        <NavItem
          currentPage={currentPage}
          icon="fa-laptop-code"
          location="/developer"
          navToFunc={setCurrentPage}
        />
        <NavItem
          currentPage={currentPage}
          icon="fa-thumbtack"
          location="/projects"
          navToFunc={setCurrentPage}
        />
        <NavItem
          currentPage={currentPage}
          icon="fa-envelope"
          location="/contact"
          navToFunc={setCurrentPage}
        />
      </div>
      <div>stuff</div>
    </div>
  )
}

export default withRouter(HeaderFunc)
