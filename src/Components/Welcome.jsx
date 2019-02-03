import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div className="wrapper">
        <h2>Welcome</h2>
        <p>I'm a self-taught, programming polyglot who stumbled and bumbled into a love for web development and computer science. Currently, I'm a React/Elixir developer for <a href="https://www.eltoro.com/" target="_blank" rel="noopener noreferrer">El Toro</a> and a student in the doctoral program at The Southern Baptist Theological Seminary, studying Ancient Near Easter Languages, Texts, and Textual Transmission. My desire is to blend my two loves: web development and Ancient Near Eastern Languages, an ecclectic mix of ancient and modern. </p>
        <p>During the day I write JavaScript/React on the front-end and Elixir/Phoenix on the back. Although I love these languages and couldn't imagine two better to work with professionally, I also enjoy more traditionally Object-Oriented languages, such as PHP, C#, and Python. Of particular interest to me is Golang, a language that sits almost perfectly between the OO and functional paradigms.</p>
      </div>
    );
  }
}

export default Welcome;