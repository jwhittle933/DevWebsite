import React, { useState } from 'react'
import { Golang, Js, Reactjs, Css3, Html5 } from 'grommet-icons'
import Rust from './misc/RustLogo'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

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
      <h2>Skills</h2>

      <div className="skill">
        <Golang size="xlarge" color="plain" className="icon" />
        <p className="text">Golang</p>
      </div>
      <div className="skill">
        <div className="front-end">
          <Js size="large" color="plain" className="icon" />
          <Reactjs size="large" color="plain" classNam="icon" />
          <Css3 size="large" color="rgb(20,114,183)" classNam="icon" />
          <Html5 size="large" color="rgb(228,76,34)" classNam="icon" />
        </div>
        <p className="text">JavaScript</p>
      </div>

      <div className="skill">
        <i
          style={{ fontSize: '5em', color: 'rgb(245,112,56)' }}
          className="icon fab fa-phoenix-framework"
        />
        <p className="text">Elixir/Phoenix</p>
      </div>
      <div className="skill">
        <i
          style={{ fontSize: '5em', color: 'rgb(36,78,113)' }}
          className="icon fab fa-python"
        />
        <p className="text">Elixir/Phoenix</p>
      </div>
      <div className="skill" style={{ padding: '1rem' }}>
        <Rust height="6em" width="6em" color="plain" className="icon" />
        <p className="text">Rust</p>
      </div>
      <div className="skill">
        <i
          style={{ fontSize: '5em', color: 'rgb(248,153,29)' }}
          className="icon fab fa-aws"
        />
        <p className="text">Elixir/Phoenix</p>
      </div>
    </div>
  )
}

export default Skills
