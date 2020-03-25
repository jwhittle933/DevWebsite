import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import {
  FacebookOption,
  Twitter,
  Instagram,
  LinkedinOption,
  Github,
} from 'grommet-icons'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const NavItem = ({ title, currentPage, icon, location, navToFunc }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      className={'item ' + (currentPage === location ? 'active' : '')}
      to={`${location}`}
      onClick={() => navToFunc(location)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {(!isHovered && (
        <i className={`fas ${icon}`} style={{ fontSize: '1.5em' }}></i>
      )) || <i>{title}</i>}
    </Link>
  )
}

const HeaderFunc = () => {
  const [currentPage, setCurrentPage] = useState(window.location.pathname)

  return (
    <div className="menu-wrapper">
      <div className="item-large">
        <Link to="/" onClick={() => setCurrentPage('/')}>
          jw
        </Link>
      </div>
      <div className="menu-nav">
        <NavItem
          title="Home"
          currentPage={currentPage}
          icon="fa-home"
          location="/"
          navToFunc={setCurrentPage}
        />
        <NavItem
          title="About"
          currentPage={currentPage}
          icon="fa-portrait"
          location="/about"
          navToFunc={setCurrentPage}
        />
        <NavItem
          title="Skills"
          currentPage={currentPage}
          icon="fa-laptop-code"
          location="/skills"
          navToFunc={setCurrentPage}
        />
        <NavItem
          title="Work"
          currentPage={currentPage}
          icon="fa-code-branch"
          location="/work"
          navToFunc={setCurrentPage}
        />
        <NavItem
          title="Contact"
          currentPage={currentPage}
          icon="fa-envelope"
          location="/contact"
          navToFunc={setCurrentPage}
        />
      </div>
      <div className="menu-social">
        <a
          className="logo-link"
          href="https://github.com/jwhittle933"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size="medium" color="rgb(255,255,255)" />
        </a>
      </div>
    </div>
  )
}

export default withRouter(HeaderFunc)
