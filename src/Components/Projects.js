import React, { Component } from 'react';


class Projects extends Component {
  render() {
    return (
      <div className="wrapper">
        <h2>Projects</h2>
        <ul>
          <h4>Personal Projects</h4>
          <li><a href="https://fathomless-waters-70389.herokuapp.com/" rel="noopener noreferrer" target="_blank">TechApp</a>: An after-hours digital technician for assisting professors with technology troubleshooting. Built using JavaScript and PHP. Live on Heroku.</li>
          <li><a href="https://github.com/jwhittle933/TechApp2.0" rel="noopener noreferrer" target="_blank">TechApp2.0</a>: An updated version of TechApp, built in Laravel and Vue.js. This version features an updated backend, with CRUD capabilities for technology form submissions.</li>
          <li><a href="https://github.com/jwhittle933/JonathansJumpnJacks" rel="noopener noreferrer" target="_blank">Jonathan's Jump'n Jacks</a>: A personal fitness app, origianally in native JavaScript, then converted to Vue.js, currently built using React. Does nutrition calculations provides the user with daily caloric needs to build muscle, maintain, or burn fat.</li>
          <li><a href="https://github.com/jwhittle933/DevWebsite" rel="noopener noreferrer" target="_blank">This Website</a>: View the code for this page.</li>
          <h4>Freelance</h4>
          <li><a href="http://www.philosophipotamus.com" rel="noopener noreferrer" target="_blank">Philosophipotamus</a>: A philosophical website for Dr. Mark Coppenger. A WordPress site.</li>
        </ul>
      </div>
    );
  }
}

export default Projects;