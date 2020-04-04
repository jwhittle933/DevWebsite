import React, { useState } from 'react'
import { Golang, Node, Js, Reactjs } from 'grommet-icons'
import { ReactComponent as Vue } from './misc/Vuejs.svg'
import { ReactComponent as Rust } from './misc/rust-lang-icon.svg'
import { ReactComponent as Clang } from './misc/C-01.svg'
import { ReactComponent as Sass } from './misc/sass-1.svg'
import { ReactComponent as Csharp } from './misc/C-Sharp-01.svg'
import { ReactComponent as Erlang } from './misc/Erlang-01.svg'
import { ReactComponent as Python } from './misc/Python.svg'
import { ReactComponent as Racket } from './misc/Racket.svg'
import { ReactComponent as Bash } from './misc/Gnu-bash-logo.svg'
import { ReactComponent as IBM } from './misc/IBM-01.svg'
import { ReactComponent as Heroku } from './misc/heroku-logo-stroke-purple.svg'
import { ReactComponent as Jenkins } from './misc/Jenkins-01.svg'
import { ReactComponent as Travis } from './misc/Travis-CI-01.svg'
import { ReactComponent as Actions } from './misc/GHActions.svg'
import { ReactComponent as Jest } from './misc/Jest-01.svg'
import { ReactComponent as Mongo } from './misc/MongoDB-01.svg'
import { ReactComponent as Postgres } from './misc/PostgreSQL-01.svg'
import { ReactComponent as MySQL } from './misc/MySQL_1012821.svg'
import { ReactComponent as Couch } from './misc/apache_couchdb-icon.svg'
import { ReactComponent as Emacs } from './misc/Emacs.svg'
import { ReactComponent as Vim } from './misc/Vim.svg'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const Phoenix = () => {
  return (
    <i
      style={{
        width: '1em',
        height: '1em',
        fontSize: '10em',
        color: 'rgb(245,112,56)',
      }}
      className="icon fab fa-phoenix-framework"
    />
  )
}

const PHP = () => {
  return (
    <i
      style={{
        width: '1em',
        height: '1em',
        fontSize: '10em',
        color: 'rgb(77,88,143)',
      }}
      className="icon fab fa-php"
    />
  )
}

const Git = () => {
  return (
    <i
      style={{
        width: '1em',
        height: '1em',
        fontSize: '10em',
        color: 'rgb(240,81,51)',
      }}
      className="icon fab fa-git-square"
    />
  )
}

const AWS = () => {
  return (
    <i
      style={{
        width: '1em',
        height: '1em',
        fontSize: '10em',
        color: 'rgb(248,153,29)',
      }}
      className="icon fab fa-aws"
    />
  )
}

const History = () => {
  return (
    <div className="skills-history">
      <p>
        After gradutating from Clemson with a degree in Philosophy, I went to
        work as a musician for a church in the area. The goal at the time was to
        move to Louisville to start work on my M.Div at The Southern Baptist
        Theological Seminary. In 2015 I did just that, only several weeks after
        getting married. The purpose was to go into the pastorate or complete a
        Ph.D (or both). To make ends meet during school, I worked 30 hours a
        week in the tech office of the seminary, servicing computers and
        classroom related technology.
      </p>
      <p>
        After spending several years in technology, I decided to learn SQL in
        mid-2018 at the recommendation of a friend, Giancarlo Cusano. I started
        out using any free resource I could find on the web. I learned later
        that residents of Louisville could get a free Treehouse account through
        the public library. I completed the SQL track in a short amount of time
        and began looking for jobs, but didn't have any success. So, rather than
        wasting the free membership that I had acquired, I decided to jump into
        PHP. Another friend, Joshua Cottrell, was an enormous help at the time.
        He writes JavaScript and PHP fulltime for the seminary, and gave me
        helpful direction as I waded into the deep end. I began teetering back
        and forth between JavaScript and PHP, and started building web
        applications with Vue and Laravel. They were nothing special, but they
        solved problems that I encountered on a daily basis.
      </p>
      <p>
        After completing these tracks I started to dive into others, like C#,
        Python, and Go. As well, I spent time reading programming books and
        using other resources like Laracasts.
      </p>
    </div>
  )
}

const SkillList = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const withFilter = (...filters) => {
    return (Component, props = {}) => {
      const [isHovered, setIsHovered] = useState(false)

      if ([...filters, 'all'].includes(selectedFilter)) {
        return (
          <div
            onClick={() => setIsHovered(!isHovered)}
            className="icon-wrapper"
          >
            <Component {...props} />
            {isHovered && <p className="icon-text">Text</p>}
          </div>
        )
      }
    }
  }

  return (
    <>
      <div className="skill-filter">
        <div
          className="filter filter-btn"
          onClick={() => setSelectedFilter('all')}
        >
          <i
            className="fas fa-globe-americas"
            style={{
              background:
                '-webkit-linear-gradient(270deg, #194C00 20%, #5CB233)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          ></i>
          <span className="btn-text">All</span>
        </div>
        <div
          className="filter filter-btn"
          onClick={() => setSelectedFilter('browser')}
        >
          <i
            className="fab fa-chrome"
            style={{
              background:
                '-webkit-linear-gradient(270deg, #EC3F2C 20%, #2BA94E, #3E81F9, #FBBC00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          ></i>
          <span className="btn-text">Browser</span>
        </div>
        <div
          className="filter filter-btn"
          onClick={() => setSelectedFilter('server')}
        >
          <i
            className="fas fa-server"
            style={{
              color: '#2a3439',
            }}
          ></i>
          <span className="btn-text">Server</span>
        </div>
        <div
          className="filter filter-btn"
          onClick={() => setSelectedFilter('tools')}
        >
          <i
            className="fas fa-tools"
            style={{
              background: '-webkit-linear-gradient(#B0B9BF, #3B3E40)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          ></i>
          <span className="btn-text">Tooling</span>
        </div>
        <div
          className="filter filter-btn"
          onClick={() => setSelectedFilter('cloud')}
        >
          <i
            className="fas fa-cloud"
            style={{
              background: '-webkit-linear-gradient(#fff 20%, #104A6D)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          ></i>
          <span className="btn-text">Cloud</span>
        </div>
        <div
          className="filter filter-btn"
          onClick={() => setSelectedFilter('data')}
        >
          <i
            className="fas fa-database"
            style={{
              background: '-webkit-linear-gradient(#7CA6D4, #535C7D, #3F475C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          ></i>
          <span className="btn-text">Data</span>
        </div>
        <div
          className="filter filter-btn"
          onClick={() => setSelectedFilter('integration')}
        >
          <i
            className="fas fa-project-diagram"
            style={{
              background: '-webkit-linear-gradient(#49697A, #FF5000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          ></i>
          <span className="btn-text">CI/CD</span>
        </div>
      </div>
      <div className="skill">
        {withFilter('server', 'tools')(Golang, {
          size: 'xlarge',
          color: 'plain',
          className: 'click icon',
        })}
        {withFilter('browser')(Js, {
          size: 'xlarge',
          color: 'plain',
          className: 'click icon',
        })}
        {withFilter('server')(Node, {
          size: 'xlarge',
          color: 'plain',
          className: 'click icon',
        })}
        {withFilter('browser')(Reactjs, {
          size: 'xlarge',
          color: 'plain',
          className: 'click icon',
        })}
        {withFilter('browser')(Vue, {})}
        {withFilter('browser')(Sass, {})}
        {withFilter('browser')(Jest, {})}
        {withFilter('server')(Phoenix, {})}
        {withFilter('server', 'tools')(Python, {
          className: 'click icon',
        })}
        {withFilter('server', 'tools')(Rust, {
          color: 'plain',
          className: 'click icon',
        })}
        {withFilter('tools')(Clang, {
          className: 'click icon',
        })}
        {withFilter('server')(Csharp, {
          className: 'click icon',
        })}
        {withFilter('server')(Erlang, {
          className: 'click icon',
        })}
        {withFilter('server', 'tools')(Racket, {
          className: 'click icon',
        })}
        {withFilter('tools')(Emacs, {
          className: 'click icon',
        })}
        {withFilter('tools')(Vim, {
          className: 'click icon',
        })}
        {withFilter('server')(PHP, {
          className: 'click icon',
        })}
        {withFilter('tools')(Bash, {
          className: 'click icon',
        })}
        {withFilter('tools')(Git, {
          className: 'click icon',
        })}
        {withFilter('cloud')(AWS, {
          className: 'click icon',
        })}
        {withFilter('cloud')(Heroku, {
          className: 'click icon',
        })}
        {withFilter('cloud')(IBM, {
          className: 'click icon',
        })}
        {withFilter('data')(Mongo, {
          className: 'click icon',
        })}
        {withFilter('data')(Couch, {
          className: 'click icon',
        })}
        {withFilter('data')(Postgres, {
          className: 'click icon',
        })}
        {withFilter('data')(MySQL, {
          className: 'click icon',
        })}
        {withFilter('integration')(Jenkins, {
          className: 'click icon',
        })}
        {withFilter('integration')(Travis, {
          className: 'click icon',
        })}
        {withFilter('integration')(Actions, {
          className: 'click icon',
        })}
      </div>
    </>
  )
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState('history')

  // TODO: Include a "uses" section that talks about editor, keyboard, etc.
  return (
    <div className="wrapper skills">
      {'Skills'.split('').map((l, i) => (
        <span className="view-header-item" data-letter={l} key={i}>
          {l}
        </span>
      ))}
      <div className="selector">
        <div
          className={`selection left click ${
            activeTab === 'history' ? 'selector-active' : ''
          }`}
          onClick={() => setActiveTab('history')}
        >
          <i className="fas fa-history"></i>
        </div>
        <div
          className={`selection right click ${
            activeTab === 'skills' ? 'selector-active' : ''
          }`}
          onClick={() => setActiveTab('skills')}
        >
          <i className="fas fa-list"></i>
          {activeTab !== 'skills' && (
            <div className="click-here">
              <i className="fas fa-caret-up bounce" />
              skills
            </div>
          )}
        </div>
      </div>
      {activeTab === 'skills' && <SkillList />}
      {activeTab === 'history' && <History />}
    </div>
  )
}

export default Skills
