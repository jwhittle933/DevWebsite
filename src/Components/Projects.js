import React, { Component } from 'react';


class Projects extends Component {
  render() {
    return (
      <div className="wrapper">
        <h2>Projects</h2>
          <h4>Personal Projects</h4>
          <p><a href="https://fathomless-waters-70389.herokuapp.com/" rel="noopener noreferrer" target="_blank">TechApp</a>: An after-hours digital technician for assisting professors with technology troubleshooting. Built using JavaScript and PHP. Live on Heroku.</p>
          <p><a href="https://github.com/jwhittle933/TechApp2.0" rel="noopener noreferrer" target="_blank">TechApp2.0</a>: An updated version of TechApp, built in Laravel and Vue.js. This version features an updated backend, with CRUD capabilities for technology form submissions.</p>
          <p><a href="https://github.com/jwhittle933/JonathansJumpnJacks" rel="noopener noreferrer" target="_blank">Jonathan's Jump'n Jacks</a>: A personal fitness app, originally in native JavaScript, then converted to Vue.js, currently built using React. Does nutrition calculations and provides the user with daily caloric needs to build muscle, maintain, or burn fat.</p>
          <p><a href="https://github.com/jwhittle933/DevWebsite" rel="noopener noreferrer" target="_blank">This Site</a>: View the code for this page.</p>
          <h4>Freelance</h4>
          <p><a href="http://www.philosophipotamus.com" rel="noopener noreferrer" target="_blank">Philosophipotamus</a>: A philosophical website for Dr. Mark Coppenger. A WordPress site.</p>
      </div>
    );
  }
}

export default Projects;