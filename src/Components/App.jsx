import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'

import Header from './Header.jsx'
import Welcome from './Welcome.jsx'
import About from './About.jsx'
import Developer from './Developer.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import NotFound from './NotFound.jsx'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      hasError: false
    }
  }

  componentDidCatch() {
    this.setState({ hasError: true})
  }

  render() {
    if (this.state.hasError){
      return <div className="error"><h1>Oh no! Something went wrong.</h1></div>
    } else {
      return (
      <div className="App">
        <Router>
          <div className="main-view">
            <Header location={withRouter} />
            <Switch>
              <Route exact path="/" render={ () => <Welcome /> } />
              <Route path="/about" render={ () => <About /> } />
              <Route path="/developer" render={ () => <Developer /> } />
              <Route path="/projects" render={ () => <Projects /> } />
              <Route path="/contact" render={ () => <Contact /> } />
              <Route path="*" component={ NotFound } />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    )}
  }
}
