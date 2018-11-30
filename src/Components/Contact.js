import React, { Component } from 'react'
// import facebook from '../img/facebook.svg'
// import twitter from '../img/twitter.svg'
import instagram from '../img/instagram.png'
import linkedin from '../img/linkedin.png'
// import gmail from  '../img/gmail.svg'

import Facebook from './SvgComponents/facebook'
import Gmail from './SvgComponents/gmail'
import Twitter from './SvgComponents/twitter'

class Contact extends Component {

  render() {
    return (
      <div className="wrapper contact">
        <h2>Contact</h2>
          <p>Feel free to contact me through any of the following means.</p>
        <div className="logo-flex">
          <a className="social-background" href="https://www.facebook.com/jonathan.whittle.39" target="_blank" rel="noopener noreferrer">
            <Facebook />
          </a>
          <a className="social-background" href="https://twitter.com/JonathanWhittle" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
          <a className="social-background" href="http://www.linkedin.com/in/jonathan-whittle-161590169" target="_blank" rel="noopener noreferrer">
            <img src={ linkedin } className="linkedin logo-link" alt="logo"/>
          </a>
          <a className="social-background" href="https://www.instagram.com/jwhittl/" target="_blank" rel="noopener noreferrer">
            <img src={ instagram } className="instagram logo-link" alt="logo"/>
          </a>
          <a className="social-background" href="mailto:jonathan.m.whittle@gmail.com" rel="noopener noreferrer">
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