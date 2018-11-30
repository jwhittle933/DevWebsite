import React, { Component } from 'react'

import Facebook from './SvgComponents/facebook'
import Gmail from './SvgComponents/gmail'
import Twitter from './SvgComponents/twitter'
import Instagram from './SvgComponents/instagram'
import Linkedin from './SvgComponents/linkedin'

class Contact extends Component {

  render() {
    return (
      <div className="wrapper contact">
        <h2>Contact</h2>
          <p>Feel free to contact me through any of the following means.</p>
        <div className="logo-flex">
          <a href="https://www.facebook.com/jonathan.whittle.39" target="_blank" rel="noopener noreferrer">
            <Facebook />
          </a>
          <a href="https://twitter.com/JonathanWhittle" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
          <a href="http://www.linkedin.com/in/jonathan-whittle-161590169" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
          <a href="https://www.instagram.com/jwhittl/" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
          <a href="mailto:jonathan.m.whittle@gmail.com" rel="noopener noreferrer">
            <Gmail />
          </a>
        </div>
        <p><strong>Resume:</strong>
          <a href="./files/JonathanWhittleResume.docx" download> .doc |</a>
          <a href="./files/JonathanWhittleResume.pdf" download> .pdf</a></p>
      </div>
    );
  }
}

export default Contact;