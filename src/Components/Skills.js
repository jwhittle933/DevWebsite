import React, { useState } from 'react'
import { Golang, Node, Js, Reactjs } from 'grommet-icons'
import { ReactComponent as Vue } from './misc/Vuejs.svg'
import { ReactComponent as Rust } from './misc/rust-lang-icon.svg'
import { ReactComponent as Clang } from './misc/C-01.svg'
import { ReactComponent as Sass } from './misc/sass-1.svg'
import { ReactComponent as Csharp } from './misc/C-Sharp-01.svg'
import { ReactComponent as Erlang } from './misc/Erlang-01.svg'
import { ReactComponent as Bash } from './misc/Gnu-bash-logo.svg'
import { ReactComponent as IBM } from './misc/IBM-01.svg'
import { ReactComponent as Heroku } from './misc/heroku-logo-stroke-purple.svg'
import { ReactComponent as Jenkins } from './misc/Jenkins-01.svg'
import { ReactComponent as Travis } from './misc/Travis-CI-01.svg'
import { ReactComponent as Jest } from './misc/Jest-01.svg'
import { ReactComponent as Mongo } from './misc/MongoDB-01.svg'
import { ReactComponent as Postgres } from './misc/PostgreSQL-01.svg'
import { ReactComponent as MySQL } from './misc/MySQL_1012821.svg'
import { ReactComponent as Couch } from './misc/apache_couchdb-icon.svg'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const Grid = ({ classname, children }) => {
  return <div className={classname}>{children}</div>
}

const Center = props => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {props.children}
    </div>
  )
}

const History = () => {
  return (
    <div className="skills-history">
      <p></p>
    </div>
  )
}

const List = () => {
  return (
    <div className="skills-list">
      <p></p>
    </div>
  )
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState('skills')

  // TODO: Include a "uses" section that talks about editor, keyboard, etc.
  return (
    <div className="wrapper skills">
      {'Skills'.split('').map((l, i) => (
        <span className="view-header" data-letter={l} key={i}>
          {l}
        </span>
      ))}
      <div className="skill">
        <Golang size="xlarge" color="plain" className="icon" />
        <Js size="large" color="plain" className="icon" key="js" />
        <Node size="large" color="plain" className="icon" key="node" />
        <Reactjs size="large" color="plain" className="icon" key="react" />
        <div
          style={{
            display: 'flex',
            overflow: 'hidden',
            maxWidth: '10em',
            justifyContent: 'center',
          }}
        >
          <Vue />
        </div>
        <div
          style={{
            display: 'flex',
            overflow: 'hidden',
            maxWidth: '10em',
            justifyContent: 'center',
          }}
        >
          <Sass />
        </div>
        <div
          style={{
            display: 'flex',
            overflow: 'hidden',
            maxWidth: '10em',
            justifyContent: 'center',
          }}
        >
          <Jest />
        </div>
        <i
          style={{
            width: '1em',
            height: '1em',
            fontSize: '10em',
            color: 'rgb(245,112,56)',
          }}
          className="icon fab fa-phoenix-framework"
        />
        <Erlang className="icon" />
        <i
          style={{
            width: '1em',
            height: '1em',
            fontSize: '10em',
            color: 'rgb(36,78,113)',
          }}
          className="icon fab fa-python"
        />
        <Rust height="6em" width="6em" color="plain" className="icon" />
        <Clang className="icon" />
        <Csharp className="icon" />
        <i
          style={{
            width: '1em',
            height: '1em',
            fontSize: '10em',
            color: 'rgb(77,88,143)',
          }}
          className="icon fab fa-php"
        />
        <Bash className="icon" />
        <i
          style={{
            width: '1em',
            height: '1em',
            fontSize: '10em',
            color: 'rgb(240,81,51)',
          }}
          className="icon fab fa-git-square"
        />
        <i
          style={{
            width: '1em',
            height: '1em',
            fontSize: '10em',
            color: 'rgb(248,153,29)',
          }}
          className="icon fab fa-aws"
        />
        <div
          style={{
            overflow: 'hidden',
            maxWidth: '10em',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Heroku />
        </div>
        <div
          style={{
            overflow: 'hidden',
            maxWidth: '10em',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <IBM />
        </div>
        <div
          style={{
            display: 'flex',
            overflow: 'hidden',
            maxWidth: '10em',
            justifyContent: 'center',
          }}
        >
          <Mongo className="icon" />
        </div>
        <div
          style={{
            display: 'flex',
            overflow: 'hidden',
            maxWidth: '10em',
            justifyContent: 'center',
          }}
        >
          <Couch className="icon" />
        </div>
        <div
          style={{
            display: 'flex',
            overflow: 'hidden',
            maxWidth: '10em',
            justifyContent: 'center',
          }}
        >
          <Postgres className="icon" />
        </div>
        <div
          style={{
            display: 'flex',
            overflow: 'hidden',
            maxWidth: '10em',
            justifyContent: 'center',
          }}
        >
          <MySQL className="icon" />
        </div>
        <div
          style={{
            display: 'flex',
            overflow: 'hidden',
            maxWidth: '10em',
            justifyContent: 'center',
          }}
        >
          <Jenkins className="icon" />
        </div>
        <div
          style={{
            display: 'flex',
            overflow: 'hidden',
            maxWidth: '10em',
            justifyContent: 'center',
          }}
        >
          <Travis className="icon" />
        </div>
      </div>
    </div>
  )
}

export default Skills
