import React, { useState } from 'react'
import ITWThings from '../img/ItsTheWhittleThingsUI.gif'
import JJJ from '../img/JJJUI.gif'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const Heading = ({ title, href = '', previewImg = '', link = '' }) => {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <div className="projects-heading">
      <h2 style={{ display: 'inline-block', marginRight: '.25em' }}>{title}</h2>
      {href !== '' && (
        <a
          className="projects-link-href"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github" style={{ fontSize: '1.5em' }} />
        </a>
      )}
      {link !== '' && (
        <a
          className="projects-link"
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <i
            className="fas fa-link"
            style={{
              fontSize: '1.5em',
            }}
          />
        </a>
      )}
      {previewImg !== '' && (
        <div style={{ display: 'inline-block', position: 'relative' }}>
          <i
            className="fas fa-search projects-link-preview"
            style={{
              fontSize: '1.4em',
              marginLeft: '6px',
              color: '#52718C',
              cursor: 'crosshair',
            }}
            onMouseEnter={() => setShowPreview(true)}
            onMouseLeave={() => setShowPreview(false)}
          />
          {showPreview && (
            <img
              src={previewImg}
              alt="Preview of Work"
              style={{
                position: 'absolute',
                height: '15em',
                width: '30em',
                top: '-15em',
                right: '-30em',
                borderRadius: '8px',
              }}
            />
          )}
        </div>
      )}
    </div>
  )
}

const Projects = () => (
  <div className="wrapper projects">
    {'Work'.split('').map((l, i) => (
      <span className="view-header-item" data-letter={l} key={i}>
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
      is the source of truth for all my personal projects. The following are
      those that still receive varying degrees of attention. As is the norm for
      any busy developer, all of these are a work in progress.
    </p>
    <Heading
      title="The Hexapla Institute"
      link="https://hexapla-web.herokuapp.com/#/"
    />
    <p>
      We are in heavy development cycle at The Hexapla Institute and will be for
      some time. The link above will take you to the deployed demo version. The
      current web app is built with Vue, served from Heroku (free dynos, expect
      load times). The web application is divided into two parts: the public
      site for information and the contributor portal. In the portal,
      contributors will study manuscripts, collaborate, and record their data.
      The goal is to replace Field's 19th century critical edition of the
      Hexaplaric fragments, and one{' '}
      <a
        className="link"
        href="https://www.peeters-leuven.be/detail.php?search_key=9789042937314&series_number_str=0"
        rel="noopener noreferrer"
        target="_blank"
      >
        volume
      </a>{' '}
      in the new series has already been published. The software will imitate
      the layout and formatting of the published work as the contributor adds
      their data, and on completion will generate a docx/pdf for futher edits
      and to send to the publisher. Our backend is build in Go and services all
      the web app's data needs. It's entirely protected, but in the future we
      may open the API up to subscribed consumers to use our language detection
      models, manuscript data, etc.
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
      Go's type system.
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
      Metallurgy is both an Elixir library and a compiled binary that converts
      jpg to png and vise versa. It was created to assist converting png images
      of Hebrew manuscripts to jpg images for TensorFlow. This repo is still
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
    <Heading
      title="docxology"
      href="https://github.com/jwhittle933/docxology"
    />
    <p>
      docxology is a Microsoft Word .docx file parser package for Go. I created
      the package when creating a language transliterator api to enable .docx
      file uploads that would transliterate Hebrew or Greek text, write it to
      the file submitted, and return a link for download.
    </p>
    <Heading
      title="ItsTheWhittleThings"
      href="https://github.com/jwhittle933/itsthewhittlethings"
      previewImg={ITWThings}
    />
    <p>
      ItsTheWhittleThings is a blog and e-commerce site designed for my wife,
      Emily, to share her thoughts about life and sell her creations. The
      application is built with Laravel and React.
    </p>
    <Heading
      title="JonathansJumpnJacks"
      href="https://github.com/jwhittle933/JonathansJumpnJacks"
      previewImg={JJJ}
    />
    <p>
      JonathansJumpnJacks is a BMR (Basal Metabolic Rate) calculator built with
      React. I started lifting weights in highschool and have been lifting now
      for almost 20 years. When I really in the zone, I count every calorie I
      consume to ensure I'm gaining the most muscle mass or shedding the most
      body fat possible. Knowing your BMR is integral to making the most of your
      calories. This app provides a reliable calulation based on personal
      metrics.
    </p>
  </div>
)

export default Projects
