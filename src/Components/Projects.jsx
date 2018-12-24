import React, { Component } from 'react';


class Projects extends Component {
  render() {
    return (
      <div className="wrapper projects">
        <h2>Projects</h2>
          <h4>Personal Projects</h4>
          <p><a href="https://fathomless-waters-70389.herokuapp.com/" rel="noopener noreferrer" target="_blank">TechApp</a>: An after-hours digital technician (<i>demo version</i>) for assisting professors with technology troubleshooting. Built using JavaScript and PHP. Live on Heroku.</p>
          <p><a href="https://github.com/jwhittle933/TechApp2.0" rel="noopener noreferrer" target="_blank">TechApp2.0</a>: An updated version of TechApp, built in Laravel and Vue.js. This version features an updated backend, with CRUD capabilities for technology form submissions.</p>
          <p><a href="https://github.com/jwhittle933/JonathansJumpnJacks" rel="noopener noreferrer" target="_blank">Jonathan's Jump'n Jacks</a>: A personal fitness app, originally in native JavaScript, then converted to Vue.js, currently built using React. Does nutrition calculations and provides the user with daily caloric needs to build muscle, maintain, or burn fat.</p>
          <p><a href="https://bitbucket.org/jwhittle933/itsthewhittlethings/" rel="noopener noreferrer" target="_blank" >ItsTheWhittleThings</a>: An e-commerce/blog site built with Laravel and React.</p>
          <p><a href="https://github.com/jwhittle933/Transliterator" rel="noopener noreferrer" target="_blank">Greek and Hebrew Transliterator</a>: A webapp that accepts Greek or Hebrew text, passes it to a backend Golang server, and responds with tranliterated text. React front-end.</p>
          <p><a href="https://github.com/jwhittle933/bmrCalculator" rel="noopener noreferrer" target="_blank">BMR Caluculator</a>: A console application build in Go that asks for personal metrics and outputs daily caloric needs.</p>
          <p><a href="https://github.com/jwhittle933/DevWebsite" rel="noopener noreferrer" target="_blank">This Site</a>: View the code for this page.</p>

          <h4>Freelance</h4>
          <p><a href="http://www.philosophipotamus.com" rel="noopener noreferrer" target="_blank">Philosophipotamus</a>: A philosophical website for Dr. Mark Coppenger. A WordPress site.</p>
      </div>
    );
  }
}

export default Projects;