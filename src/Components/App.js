import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Menu from './Menu'
import Welcome from './Welcome'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import NotFound from './NotFound'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error">
          <h1>Oh no! Something went wrong.</h1>
        </div>
      )
    } else {
      return (
        <div className="App">
          <Router>
            <div className="main-view">
              <Menu />
              <Switch>
                <Route exact path="/" render={() => <Welcome />} />
                <Route path="/about" render={() => <About />} />
                <Route path="/skills" render={() => <Skills />} />
                <Route path="/work" render={() => <Projects />} />
                <Route path="/contact" render={() => <Contact />} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </Router>
        </div>
      )
    }
  }
}
