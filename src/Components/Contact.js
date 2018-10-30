import React, { Component } from 'react';
import facebook from '../img/flogo_RGB_HEX-144.svg'
import twitter from '../img/Twitter_Logo_Blue.svg'
import instagram from '../img/glyph-logo_May2016.png'
import linkedin from '../img/In-2CRev-81px-TM.png'


class Contact extends Component {
  render() {
    return (
      <div className="wrapper">
        <h2>Contact</h2>
          <p>Feel free to contact me through any of the following means.</p>
          <p><strong>Email:</strong> jonathan.m.whittle@gmail.com</p>
        <div className="logo-flex">
          <a href="https://www.facebook.com/jonathan.whittle.39" target="_blank" rel="noopener noreferrer">
            <img src={ facebook } className="facebook logo-link" alt="logo"/>
          </a>
          <a href="https://twitter.com/JonathanWhittle" target="_blank" rel="noopener noreferrer">
            <img src={ twitter } className="twitter logo-link" alt="logo"/>
          </a>
          <a href="http://www.linkedin.com/in/jonathan-whittle-161590169" target="_blank" rel="noopener noreferrer">
            <img src={ linkedin } className="linkedin logo-link" alt="logo"/>
          </a>
          <a href="https://www.instagram.com/jwhittl/" target="_blank" rel="noopener noreferrer">
            <img src={ instagram } className="instagram logo-link" alt="logo"/>
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;