import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import './App.css';

//Components
import Header from './Header'
import Welcome from './Welcome'
import About from './About'
import Developer from './Developer'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="main-view">
            <Header />
            <Route exact path="/" component={ Welcome } />
            <Route path="/about" component={ About } />
            <Route exact path="/developer" component={ Developer } />
            <Route path="/projects" component={ Projects } />
            <Route path="/skills" component={ Skills } />
            <Route path="/contact" component={ Contact } />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
