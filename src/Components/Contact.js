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
            <Facebook />
            <Twitter />
            <Linkedin />
            <Instagram />
            <Gmail />
        </div>
        <p><strong>Resume:</strong>
          <a href="./files/JonathanWhittleResume.docx" download> .doc |</a>
          <a href="./files/JonathanWhittleResume.pdf" download> .pdf</a></p>
      </div>
    );
  }
}

export default Contact;