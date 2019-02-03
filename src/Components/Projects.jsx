import React, { Component } from 'react';


class Projects extends Component {
  render() {
    return (
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
              <img src="https://picsum.photos/500/351/?random"></img>
            </div>
            <div className="tile-bottom">
              <p>Test Text</p>
            </div>
          </div>
          <div className="tile">
            <div className="tile-splash">
              <img src="https://picsum.photos/500/349/?random"></img>
            </div>
            <div className="tile-bottom">
              <p>Test Text</p>
            </div>
          </div>
          <div className="tile">
            <div className="tile-splash">
              <img src="https://picsum.photos/500/348/?random"></img>
            </div>
            <div className="tile-bottom">
              <p>Test Text</p>
            </div>
          </div>
        </div>
        <h4>Freelance</h4>
        <p><a href="http://www.philosophipotamus.com" rel="noopener noreferrer" target="_blank">Philosophipotamus.com</a>: A philosophical website for Dr. Mark Coppenger. A WordPress site.</p>
      </div>
    );
  }
}

export default Projects;