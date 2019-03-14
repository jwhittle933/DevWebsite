import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'grommet-icons';

const Contact = () => (
  <div className="wrapper contact">
    <h2>Contact</h2>
    <p>
      I'm currently open to remote, contract work in any of the languages and
      environments specified (so long as you are not in competition with El
      Toro). Feel free to contact me through any of the following means.
    </p>
    <div className="logo-flex">
      <a
        href="https://www.facebook.com/jonathan.whittle.39"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook
          color="#4267b2"
          size="xlarge"
          className="facebook logo-link"
        />
      </a>
      <a
        href="https://twitter.com/JonathanWhittle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter color="#1da1f2" size="xlarge" className="twitter logo-link" />
      </a>
      <a
        href="http://www.linkedin.com/in/jonathan-whittle-161590169"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin
          size="xlarge"
          color="rgb(0, 119, 181)"
          className="linkedin logo-link"
        />
      </a>
      <a
        href="https://www.instagram.com/jwhittl/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram
          size="xlarge"
          color="rgb(255, 147, 58)"
          className="instagram logo-link"
        />
      </a>
    </div>
    <p>
      <strong>Resume:</strong>
      <a href="./files/JonathanWhittleResume.docx" download>
        {' '}
        .doc |
      </a>
      <a href="./files/JonathanWhittleResume.pdf" download>
        {' '}
        .pdf
      </a>
    </p>
  </div>
);

export default Contact;
