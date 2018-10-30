import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import './App.css';

//Components
import Header from './Header'
import Welcome from './Welcome'
import About from './About'
import Developer from './Developer'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import NotFound from './NotFound'

class App extends Component {
  state = {
    hasError: false
  }
  componentDidCatch() {
    this.setState({ hasError: true})
  }
  render() {
    if (this.state.hasError){
      return <h1>Oh no! Something went wrong.</h1>
    } else {
      return (
      <div className="App">
        <Router>
          <div className="main-view">
            <Header />
            <Switch>
              <Route exact path="/" render={ () => <Welcome /> } />
              <Route exact path="/about" render={ () => <About /> } />
              <Route exact path="/developer" render={ () => <Developer /> } />
              <Route exact path="/projects" render={ () => <Projects /> } />
              <Route exact path="/contact" render={ () => <Contact /> } />
              <Route component={ NotFound } />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    )}
  }
}

export default App;
