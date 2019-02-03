import React, { Component } from 'react';


const projects = [
  {
    title: "Transliterator",
    url: "",
    gif: ""
  },
  {
    title: "TechApp",
    url: "",
    gif: ""
  },
  {
    title: "Its The Whittle Things",
    url: "",
    gif: ""
  }
]

const Projects = () => 
  <div className="wrapper projects">
    <h2>Notable Projects</h2>
    <p>All of my projects can be viewed on <a href="https://github.com/jwhittle933?tab=repositories" rel="noopener noreferrer" target="_blank">GitHub</a></p>
    <div className="projects-flex">
      <div className="tile">
        <div className="tile-splash">
          <img src="https://picsum.photos/500/350/?random"></img>
        </div>
        <div className="tile-bottom">
          <p>Test Text</p>
        </div>
      </div>
      <div className="tile">
        <div className="tile-splash">
          <img src="https://picsum.photos/501/350/?random"></img>
        </div>
        <div className="tile-bottom">
          <p>Test Text</p>
        </div>
      </div>
      <div className="tile">
        <div className="tile-splash">
          <img src="https://picsum.photos/502/350/?random"></img>
        </div>
        <div className="tile-bottom">
          <p>Test Text</p>
        </div>
      </div>
      <div className="tile">
        <div className="tile-splash">
          <img src="https://picsum.photos/503/350/?random"></img>
        </div>
        <div className="tile-bottom">
          <p>Test Text</p>
        </div>
      </div>
    </div>
    <h2>Freelance</h2>
    <p><a href="http://www.philosophipotamus.com" rel="noopener noreferrer" target="_blank">Philosophipotamus.com</a>: A philosophical website for Dr. Mark Coppenger. A WordPress site.</p>
  </div>

export default Projects;