import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
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
          href="https://www.facebook.com/jonathan.whittle.39"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook logo-link facebook"></i>
        </a>
        <a
          href="https://twitter.com/JonathanWhittle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter logo-link twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/jwhittl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-instagram logo-link instagram"
            style={{
              background:
                '-webkit-linear-gradient(rgb(76,93,204), rgb(183,58,162), rgb(253,82,66), rgb(241,78,85))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          ></i>
        </a>
        <a
          href="http://www.linkedin.com/in/jonathan-whittle-161590169"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-linkedin logo-link linkedin"
            style={{
              color: 'rgb(1,119,181)',
            }}
          ></i>
        </a>
        <a
          className="logo-link github"
          href="https://github.com/jwhittle933"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github logo-link github"></i>
        </a>
      </div>
    </div>
  )
}

export default withRouter(HeaderFunc)
