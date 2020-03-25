import React from 'react'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const About = () => {
  return (
    <div className="wrapper about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm currently employed as a software engineer at{' '}
          <a
            className="link"
            href="https://eltoro.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            eltoro.com
          </a>{' '}
          in Louisville, KY. I'm the task lead for what has recently come to be
          called ui-services, a small subset of the UI team that handles
          application deploy and serving, backend integrations, CI/CD, and
          generally all data flow in and out of our web applications. On most
          days, I work on deployment and data solutions with Go, but
          occasionally write JavaScript, Elixir, and Python as well. Outside of
          work Ive written in Rust, C, Lisp (Racket, Scheme, Emacs), C#, and
          PHP.
        </p>
        <p>
          In December 2018 I graduated from The Southern Baptist Theological
          Seminary with a Master of Divinity, focusing on Ancient Near Eastern
          Languages and Linguistics. In the course of my study, I learned
          Classical Hebrew, both Classical and Hellenistic Greek, Aramaic,
          Syriac, Ugaritic, a bit of Akkadian, Latin, and French. I also revived
          my German. In January of 2019 I started the doctoral process by
          entering the Th.M (Master of Theology) under Dr. Peter Gentry. My Th.M
          thesis is a translation study of Old Greek Proverbs. During my studies
          I was employed by the seminary as a help desk technician, servicing
          computers and handling classroom-related tech needs.
        </p>
        <p>
          In December 2020, I took over as the principal engineer at{' '}
          <a
            className="link"
            href="https://hexapla.org"
            target="_blank"
            rel="noreferrer noopener"
          >
            The Hexapla Institute
          </a>
          , an international collaboration between The Southern Baptist
          Theological Seminary (Dr. Peter Gentry), Oxford Univeristy (Dr. Alison
          Salvesen), and Vrije Univeristeit Amsterdam (Dr. Bas ter Haar Romeny).
          The purpose of the institute is to update Frederick Field's 19th
          century critical edition of Origen's{' '}
          <a
            className="link"
            href="https://en.wikipedia.org/wiki/Hexapla"
            target="_blank"
            rel="noreferrer noopener"
          >
            Hexaplaric Fragements
          </a>{' '}
          based on new manuscript evidence and techniques. Along with Jeremy
          Osborn, we are giving a face-lift to the public site and creating a
          new portal for the contributors to study manuscripts, record data, and
          ultimately produce a critical edition in print of their assigned book.
        </p>
        <p>
          My wife (Emily) and I are originally from South Carolina, and one day
          we hope to move back. Our son, Judson, was born in January 2019.
        </p>
      </div>
    </div>
  )
}

export default About
