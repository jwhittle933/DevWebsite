import React from 'react'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const Heading = ({ title, href = '' }) => {
  return (
    <div>
      <h2 style={{ display: 'inline-block', marginRight: '.25em' }}>{title}</h2>
      {href !== '' && (
        <a
          className="link"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github" style={{ fontSize: '1.5em' }} />
        </a>
      )}
    </div>
  )
}

const Projects = () => (
  <div className="wrapper projects">
    {'Work'.split('').map(l => (
      <span className="view-header-item" data-letter={l}>
        {l}
      </span>
    ))}
    <p className="projects-title">
      <a
        className="link"
        href="https://github.com/jwhittle933?tab=repositories"
        rel="noopener noreferrer"
        target="_blank"
      >
        GitHub
      </a>{' '}
      is the source of truth for all my projects. The following are those that I
      consider noteworthy. As is the norm for any busy developer, all of these
      are a work in progress.
    </p>
    <Heading title="funked" href="https://github.com/jwhittle933/funked" />
    <p>
      My commitment to and enjoyment of the functional paradigm led me to start
      a full-featured functional{' '}
      <a
        className="link"
        href="https://github.com/jwhittle933/funked"
        rel="noopener noreferrer"
        target="_blank"
      >
        library
      </a>{' '}
      for Go. Strong typing and lack of generics in Go make it almost a
      necessity for each project to include its own functional helper methods;
      funked aims to encapsulate these things in a single repo, accounting for
      Go's type system (without using interfaces and type assertions).
    </p>
    <Heading
      title="Bible Texts Seeder"
      href="https://github.com/jwhittle933/bible_texts"
    />
    <p>
      As an academic in the field of Ancient Near Eastern Languages, it can be
      difficult to carry around 5 or 6 books that contain the texts you're
      studying (they're also quite expensive). The software solutions that seek
      to alleviate this problem, such as Accordance or Logos, are wonderful
      tools, but require you to run an entire application and interact with it
      in the way they've designed. This repo facilitates the local or remote
      storage of the Hebrew Bible and Septuagint in Postgres (more db support
      coming in the future.) This will allow anyone with the data to build a
      convenient application around it for their own needs.
    </p>
    <Heading
      title="Elixirbot"
      href="https://github.com/jwhittle933/Elixirbot"
    />
    <p>
      Elixirbot is a simple server that accepts request bodies with valid Elixir
      code, compiles it, and returns a formatted response with the evaluation of
      the code. It was designed to meet Slack's requirements for a slackbot, and
      it has been connected to my personal Slack channel,{' '}
      <span className="_D">_D</span>. The server uses Cowboy to handle requests,
      rather than a full Phoenix server.
    </p>
    <Heading
      title="Metallurgy"
      href="https://github.com/jwhittle933/metallurgy"
    />
    <p>
      Metallurgy is both a library and a compiled binary that converts jpg to
      png and vise versa. It was created to assist converting png images of
      Hebrew manuscripts to jpg images for TensorFlow. This repo is still
      heavily under development.
    </p>
    <Heading title="httpizza" href="https://github.com/jwhittle933/httpizza" />
    <p>
      httpizza is a wrapper api around the Golang net/http package. The
      functionality is heavily abbreviated (on purpose) to expose a much smaller
      api for quicker and more elegant requests, espcially when you don't need
      access to the full net or net/http package. There are large changes in the
      works to make this much more elegant, consistent, and easy to use.
    </p>
    <Heading
      title="tf-ibrith"
      href="https://github.com/jwhittle933/tf-ibrith"
    />
    <p>
      tf-ibrith is as Hebrew language image classifier, using TensorFlow. The
      image classifier is written in Go, but the training scripts are my own
      adaptation of TF's internal <code className="code">retrain.py</code>.
      Right now, the model is trained on a subset of the Hebrew characters from
      manuscripts from Qumran, and has the capability to classify with a small
      percentage of error. The model will eventually be extended to include
      Hellenistic Greek manuscripts, and will identify, transcribe, and parse
      all grammatical forms found within a manuscript. This will allow for a
      concordance of manuscripts to be created and better analysis of
      questionable or uncertain forms.
    </p>
  </div>
)

export default Projects
