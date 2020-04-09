import React, { useState } from 'react'
import { Golang, Node, Js, Reactjs } from 'grommet-icons'
import { ReactComponent as Vue } from './misc/Vuejs.svg'
import { ReactComponent as Rust } from './misc/rust-lang-icon.svg'
import { ReactComponent as Clang } from './misc/C-01.svg'
import { ReactComponent as Sass } from './misc/sass-1.svg'
import { ReactComponent as Csharp } from './misc/C-Sharp-01.svg'
import { ReactComponent as Erlang } from './misc/Erlang-01.svg'
import { ReactComponent as Python } from './misc/Python.svg'
import { ReactComponent as Racket } from './misc/Racket.svg'
import { ReactComponent as Bash } from './misc/Gnu-bash-logo.svg'
import { ReactComponent as IBM } from './misc/IBM-01.svg'
import { ReactComponent as Heroku } from './misc/heroku-logo-stroke-purple.svg'
import { ReactComponent as Jenkins } from './misc/Jenkins-01.svg'
import { ReactComponent as Docker } from './misc/docker.svg'
import { ReactComponent as Travis } from './misc/Travis-CI-01.svg'
import { ReactComponent as Actions } from './misc/GHActions.svg'
import { ReactComponent as Jest } from './misc/Jest-01.svg'
import { ReactComponent as Mongo } from './misc/MongoDB-01.svg'
import { ReactComponent as Postgres } from './misc/PostgreSQL-01.svg'
import { ReactComponent as MySQL } from './misc/MySQL_1012821.svg'
import { ReactComponent as Couch } from './misc/apache_couchdb-icon.svg'
import { ReactComponent as Emacs } from './misc/Emacs.svg'
import { ReactComponent as Spacemacs } from './misc/Spacemacs.svg'
import { ReactComponent as Vim } from './misc/Vim.svg'
import LinkList from './components/LinkList'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const Phoenix = () => {
  return (
    <i
      style={{
        width: '1em',
        height: '1em',
        fontSize: '10em',
        color: 'rgb(245,112,56)',
      }}
      className="icon fab fa-phoenix-framework click"
    />
  )
}

const PHP = () => {
  return (
    <i
      style={{
        width: '1em',
        height: '1em',
        fontSize: '10em',
        color: 'rgb(77,88,143)',
      }}
      className="icon fab fa-php click"
    />
  )
}

const Git = () => {
  return (
    <i
      style={{
        width: '1em',
        height: '1em',
        fontSize: '10em',
        color: 'rgb(240,81,51)',
      }}
      className="icon fab fa-git-square click"
    />
  )
}

const AWS = () => {
  return (
    <i
      style={{
        width: '1em',
        height: '1em',
        fontSize: '10em',
        color: 'rgb(248,153,29)',
      }}
      className="icon fab fa-aws"
    />
  )
}

const History = () => {
  return (
    <div className="skills-history">
      <h2>My Journey Into Software</h2>
      <p>
        After gradutating from Clemson with a degree in Philosophy, I went to
        work as a musician for a church in the area. The goal at the time was to
        move to Louisville to start work on my M.Div at The Southern Baptist
        Theological Seminary. In 2015 I did just that, only several weeks after
        getting married. The purpose was to go into the pastorate or complete a
        Ph.D (or both). To make ends meet during school, I worked 30 hours a
        week in the tech office of the seminary, servicing computers and
        classroom related technology.
      </p>
      <p>
        After spending several years in technology, I decided to learn SQL in
        mid-2018 at the recommendation of a friend, Giancarlo Cusano. I started
        out using any free resource I could find on the web. I learned later
        that residents of Louisville could get a free Treehouse account through
        the public library. I completed the SQL track in a short amount of time
        and began looking for jobs, but didn't have any success. So, rather than
        wasting the free membership that I had acquired, I decided to jump into
        PHP. Another friend, Joshua Cottrell, was an enormous help at the time.
        He writes JavaScript and PHP fulltime for the seminary, and gave me
        helpful direction as I waded into the deep end. I began teetering back
        and forth between JavaScript and PHP, and started building web
        applications with Vue and Laravel. They were nothing special, but they
        solved problems that I encountered on a daily basis.
      </p>
      <p>
        After completing these tracks I started others, like C#, Python, Swift,
        and Go. As well, I spent time reading programming books and using other
        resources like Laracasts, freeCodeCamp, Code Academy, and HackerRank. I
        also started blending my academic interests (Ancient Near Eastern
        Language and Linguistics) with my programming interests by creating an
        ancient language{' '}
        <a
          className="link"
          href="https://github.com/jwhittle933/Transliterator"
          target="_blank"
          rel="noopener noreferrer"
        >
          transliterator
        </a>
        . I've completed numerous courses on Udemy, including the full spectrum
        of Go, Rust, Elixir, Erlang, as well as machine learning and language
        processing with Python. I've also picked up C by participating in
        Harvard's cs50 through edx.{' '}
      </p>
      <h2>What I Do Now</h2>
      <p>
        In 2019, I started working at{' '}
        <a
          className="link"
          href="https://eltoro.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          eltoro.com
        </a>{' '}
        located in downtown Louisville. I'm a member of the UI team and the task
        lead over a small subset of our UI team called UI-services. At a
        high-level, the UI-services team oversees the integration and deployment
        of our web applications. On most days, I work on authenticated
        deployment and data solutions with Go, but occasionally write
        JavaScript, Elixir, and Python as well. I've spent a lot of time
        geocoding in Go. As well, I'm comfortable in databases and regularly use
        Postgres and Mongo. I'm also a dedicated Spacemacs user (and you should
        be too), which has me writing Emacs Lisp on a regular basis. You can
        check my config{' '}
        <a
          className="link"
          href="https://github.com/jwhittle933/spacemacs-config"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        . When it's more convientient, I use Vim. You can find that config{' '}
        <a
          className="link"
          href="https://github.com/jwhittle933/vim-config"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        . I also enjoy the Racket flavor of Lisp and have been{' '}
        <a
          className="link"
          href="https://github.com/jwhittle933/racket"
          target="_blank"
          rel="noopener noreferrer"
        >
          experimenting
        </a>{' '}
        with various practical applications for the language. I've breifly
        interacted with Scheme as well by reading Structure and Interpretation
        of Computer Programs.
      </p>
      <p>
        A year after starting at eltoro, I became the principal software
        engineer for{' '}
        <a
          className="link"
          href="https://hexapla.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Hexapla Institute
        </a>
        , an international collaboration between The Southern Baptist
        Theological Seminary (Dr. Peter Gentry), Oxford Univeristy (Dr. Alison
        Salvesen), and Vrije Univeristeit Amsterdam (Dr. Bas ter Haar Romeny).
        The purpose of the institute is to update Frederick Field's 19th century
        critical edition of Origen's{' '}
        <a
          className="link"
          href="https://en.wikipedia.org/wiki/Hexapla"
          target="_blank"
          rel="noreferrer noopener"
        >
          Hexaplaric Fragements
        </a>{' '}
        based on new manuscript evidence and techniques. My primary
        responsibility is to build and maintain the Contributor portal, where
        scholars from around the world will study Greek, Syriac, and Latin
        manuscripts that contain Hexaplaric material and record their data. The
        software was originally written in ASP.NET, but the newest iteration
        will have a Vue web application and a Golang API. The second iteration
        will feature a manuscript portal that leverages language detection and
        processing to quicky transliterate and parse manuscripts for the
        researcher's use. A prototype can be found{' '}
        <a
          className="link"
          href="https://hexapla-web.herokuapp.com/#/"
          target="_blank"
          rel="noreferrer noopener"
        >
          here
        </a>
        . Our database is CouchDB hosted on IBM's Cloudant.
      </p>
      <p>
        In my freetime I've built front- and back-end{' '}
        <LinkList
          links={[
            {
              text: 'This Site',
              href: 'https://github.com/jwhittle933/jonathanwhittledev.com',
            },
            {
              text: 'Adapter API',
              href: 'https://github.com/jwhittle933/adapter-app-api',
            },
            {
              text: '_D API',
              href: 'https://github.com/jwhittle933/UnderDevelopmentAPI',
            },
            {
              text: '_D Web App',
              href: 'https://github.com/jwhittle933/UnderDevelopmentUI',
            },
            {
              text: 'ItsTheWhittleThings',
              href: 'https://github.com/jwhittle933/itsthewhittlethings',
            },
            {
              text: 'Transliterator API',
              href: 'https://github.com/jwhittle933/transliteratorAPI',
            },
            {
              text: 'Transliterator UI',
              href: 'https://github.com/jwhittle933/transliteratorUI',
            },
          ]}
          text="web applications"
        />
        ,{' '}
        <LinkList
          text="packages"
          links={[
            { text: 'funked', href: 'https://github.com/jwhittle933/funked' },
            {
              text: 'gomemory',
              href: 'https://github.com/jwhittle933/gomemory',
            },
            {
              text: 'httpizza',
              href: 'https://github.com/jwhittle933/httpizza',
            },
            {
              text: 'docxology',
              href: 'https://github.com/jwhittle933/docxology',
            },
            {
              text: 'metallurgy',
              href: 'https://github.com/jwhittle933/metallurgy',
            },
          ]}
        />
        ,{' '}
        <LinkList
          text="various tools"
          links={[
            { text: 'gonew', href: 'https://github.com/jwhittle933/gonew' },
            {
              text: 'metallurgygo',
              href: 'https://github.com/jwhittle933/metallurgy',
            },
            {
              text: 'burrow',
              href: 'https://github.com/jwhittle933/burrow',
            },
            {
              text: 'Bible Texts',
              href: 'https://github.com/jwhittle933/bible_texts',
            },
            {
              text: 'Elixirbot',
              href: 'https://github.com/jwhittle933/Elixirbot',
            },
          ]}
        />{' '}
        as well as a{' '}
        <a
          className="link"
          href="https://github.com/jwhittle933/tf-ibrith"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hebrew image classifier
        </a>{' '}
        with TensorFlow, Python, and Go. My newest interest is Rust, and I'm
        currently working on a{' '}
        <a
          className="link"
          href="https://github.com/jwhittle933/session-server"
          target="_blank"
          rel="noopener noreferrer"
        >
          session-server
        </a>{' '}
        to handle user sessions for The Hexapla Institute. As both an academic
        and a software engineer, I'm particularly interested in how software can
        advance our ability to study ancient texts.
      </p>
      <p>
        I've been a mentor on{' '}
        <a
          className="link"
          href="https://exercism.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          exercism.io
        </a>{' '}
        for over a year now on the JavaScript track, though I've thought about
        expanding that to include Go and Elixir as well. I also maintian a slack
        channel called Under Development (<span className="_D">_D </span>
        for short), where I mentor a handful of up-and-coming developers, as
        well as maintain contact with developers, including one who mentored me.
      </p>
    </div>
  )
}

const SkillList = ({ setSelectedText }) => {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const withFilter = (...filters) => {
    return (Component, props = {}, text = '') => {
      if ([...filters, 'all'].includes(selectedFilter)) {
        return (
          <div onClick={() => setSelectedText(text)} className="icon-wrapper">
            <Component {...props} />
          </div>
        )
      }
    }
  }

  return (
    <>
      <div className="skill-filter">
        <div
          className="filter filter-btn"
          onClick={() => setSelectedFilter('all')}
        >
          <i
            className="fas fa-globe-americas"
            style={{
              background:
                '-webkit-linear-gradient(270deg, #194C00 20%, #5CB233)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          ></i>
          <span className="btn-text">All</span>
        </div>
        <div
          className="filter filter-btn"
          onClick={() => setSelectedFilter('browser')}
        >
          <i
            className="fab fa-chrome"
            style={{
              background:
                '-webkit-linear-gradient(270deg, #EC3F2C 20%, #2BA94E, #3E81F9, #FBBC00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          ></i>
          <span className="btn-text">Browser</span>
        </div>
        <div
          className="filter filter-btn"
          onClick={() => setSelectedFilter('server')}
        >
          <i
            className="fas fa-server"
            style={{
              color: '#2a3439',
            }}
          ></i>
          <span className="btn-text">Server</span>
        </div>
        <div
          className="filter filter-btn"
          onClick={() => setSelectedFilter('tools')}
        >
          <i
            className="fas fa-tools"
            style={{
              background: '-webkit-linear-gradient(#B0B9BF, #3B3E40)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          ></i>
          <span className="btn-text">Tooling</span>
        </div>
        <div
          className="filter filter-btn"
          onClick={() => setSelectedFilter('cloud')}
        >
          <i
            className="fas fa-cloud"
            style={{
              background: '-webkit-linear-gradient(#fff 20%, #104A6D)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          ></i>
          <span className="btn-text">Cloud</span>
        </div>
        <div
          className="filter filter-btn"
          onClick={() => setSelectedFilter('data')}
        >
          <i
            className="fas fa-database"
            style={{
              background: '-webkit-linear-gradient(#7CA6D4, #535C7D, #3F475C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          ></i>
          <span className="btn-text">Data</span>
        </div>
        <div
          className="filter filter-btn"
          onClick={() => setSelectedFilter('integration')}
        >
          <i
            className="fas fa-project-diagram"
            style={{
              background: '-webkit-linear-gradient(#49697A, #FF5000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          ></i>
          <span className="btn-text">CI/CD</span>
        </div>
      </div>
      <div className="skill">
        {withFilter('server', 'tools')(
          Golang,
          {
            size: 'xlarge',
            color: 'plain',
            className: 'click icon',
          },
          `Go is my language of choice for almost any task. I've built web servers, cli tools, database scripts, AWS Lambda functions, https and docx packages, and more. I first stumbled into Go two years ago and haven't found any other language that encapsulates bare-metal programming with abstraction in the way Go does. Speed, safety, C-like syntax, cross-compililation, and an outstanding standard library (plus a very active community) commends this language time and time again. At The Hexapla Institute, Go is our primary back-end language. I also have extensive experience geocoding in Go with the assistance of Elasticsearch and Uber's H3 Golang port.`,
        )}
        {withFilter('browser')(
          Js,
          {
            size: 'xlarge',
            color: 'plain',
            className: 'click icon',
          },
          `JavaScript was the first language that I felt comfortable in. I'm proficient in both vanilla JS and the popular libraries/frameworks. I'm also very comfortable in Node/Express.`,
        )}
        {withFilter('server')(
          Node,
          {
            size: 'xlarge',
            color: 'plain',
            className: 'click icon',
          },
          `I've done a fair amount of server-side programming in Node, including Express. As a philosophical approach, however, I don't prefer to use JavaScript on the server.`,
        )}
        {withFilter('browser')(
          Reactjs,
          {
            size: 'xlarge',
            color: 'plain',
            className: 'click icon',
          },
          `I've written more React than any other popular library. I'm very proficient with the class-based paradigm as well the new functional approach with hooks (and 100% prefer the latter). This site is a React SPA hosted from an S3 bucket.`,
        )}
        {withFilter('browser')(
          Vue,
          {},
          `I enjoy Vue more than any other front-end library. Native scss support (with vue cli), templating, and lifecycle hooks make it a joy to work with. The component system makes for a beautiful form of encapsulation that just not well defined in other libraries (like React). At The Hexapla Institute, our current site is build using vuepress, but the new version will feature Vue web application.`,
        )}
        {withFilter('browser')(
          Sass,
          {},
          `I've written SASS (SCSS) in both for both React and Vue applications. Though this site is built with pure css, I do enjoy the additional functionality that SCSS enables. My favorite SCSS library is Bulma.`,
        )}
        {withFilter('browser')(
          Jest,
          {},
          `Because Jest ships with every create-react-app, I've used Jest extensively. In general I approach every software application (especially back-end) with a TDD approach.`,
        )}
        {withFilter('server')(
          Phoenix,
          {},
          `I'm sure some of you saw this icon and had no idea what it was. I've used Elixir and the Phoenix framework both professionally and personally and find the language to be one of the most enjoyable and reliable back-end languages in existence. Though Go is my preferred multi-purpose, multi-paradigm language of choice, for scalability and maintainability Elixir is without a doubt my favorite web-server/api language. The only drawback is its obscurity. I've build web-servers, apis, as well as command line tooling and packages. My most recent project was Elixirbot, an integrated Elixir slackbot that lets you execute and share code snippets in Slack.`,
        )}
        {withFilter('server', 'tools')(
          Python,
          {
            className: 'click icon',
          },
          `Python is a language that I stumble into when I need to do something quickly, convientiently, and only once. As such, I've written a many database and file processing scripts. I've spent a fair amount of time with TensorFlow and machine learning, which will play an enormous role in the future for The Hexapla Institute.`,
        )}
        {withFilter('server', 'tools')(
          Rust,
          {
            color: 'plain',
            className: 'click icon',
          },
          `Rust is my newest facination. Safety, speed, and a functional paradigm commend Rust as the most impressive modern language. The only drawback is the startup cost for developers who've never had to think bare-metal before. I'm currently building a session-server for The Hexapla Institute.`,
        )}
        {withFilter('tools')(
          Clang,
          {
            className: 'click icon',
          },
          `C is a recent interest of mine. I participated in Harvard's cs50 (without certificate), and have written a dozen or so scripts associtated with the class. My experience geocoding led me to Uber's H3 library, written entirely in C. Though the language has its obvious flaws, I find it compelling that some of the most impressive modern software (like H3 and TensorFlow) are written in C.`,
        )}
        {withFilter('server')(
          Csharp,
          {
            className: 'click icon',
          },
          `For a brief period I was fascinated with C# and have worked with ASP, .NET, and LINQ. In Louisville (primarily because of the University), C# is king. On the whole I find the language a nuisance to work with.`,
        )}
        {withFilter('server')(
          Erlang,
          {
            className: 'click icon',
          },
          `I've spent a breif amount of time with Erlang. Elixir compiles to Erlang and enables the full Erlang standard library as a part of its core api, which is where most of my familiarity comes from.`,
        )}
        {withFilter('server', 'tools')(
          Racket,
          {
            className: 'click icon',
          },
          `I'm always looking for new projects that can be implemented in Racket. Though Lisp is usually considered an academic language, it's making its way into the mainstream and has greatly influenced how I think about code. I've recently spent some time building a web server with Racket.`,
        )}
        {withFilter('tools')(
          Emacs,
          {
            className: 'click icon',
          },
          `Though I don't use bare Emacs, Spacemacs has helped me to gain proficiency in Emacs Lisp.`,
        )}
        {withFilter('tools')(
          Spacemacs,
          {
            className: 'click icon',
          },
          `I've been a dedicated Spacemacs user for over a year now, large due to the reliability of Emacs and integration with Vim. I enjoy writing Lisp, and Spacemacs presents a great opportunity to interact with the language in a practical way that increases my productivity every day.`,
        )}
        {withFilter('tools')(
          Vim,
          {
            className: 'click icon',
          },
          `I lean heavily on Vim integration with Spacemacs. When I'm working outside a project, in a single file or two, I typically opt for standard Vim.`,
        )}
        {withFilter('server')(
          PHP,
          {
            className: 'click icon',
          },
          `PHP was the first server-side language that I learned. Though I'd never intentionally choose PHP for any of my projects, I do enjoy many aspects of Symphony/Laravel. I also maintain philosophipotamus.com, a WordPress site for the philosophical musings of Dr. Mark Coppenger.`,
        )}
        {withFilter('tools')(
          Bash,
          {
            className: 'click icon',
          },
          `Every major project at some point requires a Bash script, and I've written a fair amount of them. Typically all my build and deploy scripts are written Bash. I've also recently been using bash for GitHub Actions CI with Docker.`,
        )}
        {withFilter('tools')(
          Git,
          {
            className: 'click icon',
          },
          `I use git for every project, both professional and personal.`,
        )}
        {withFilter('tools', 'server')(
          Docker,
          {
            className: 'click icon',
          },
          `I've used Docker extensively for a variety of tasks: web servers and databases in Docker on ECS/EC2/Fargate, run CI, cross-compiled Go binaries, and more.`,
        )}
        {withFilter('cloud')(
          AWS,
          {
            className: 'click icon',
          },
          `I have extensive experience with AWS services, including ECS, EC2, ECR, Fargate, Lambda, S3, Cloudwatch, CloudFront, ElasticBeanstalk, and AWS Elasticsearch. I'm also well versed in the aws cli.`,
        )}
        {withFilter('cloud')(
          Heroku,
          {
            className: 'click icon',
          },
          `Heroku is my preferred cloud host for beta deployment of personal apps. It's a very simple api that detects and build repos for you, and, best of all, its entirely free up to 5 apps. At The Hexapla Institute, we stage all our dev environments on Heroku (with the exception of CouchDB).`,
        )}
        {withFilter('cloud')(
          IBM,
          {
            className: 'click icon',
          },
          `My experience with IBM cloud is still novel. At The Hexapla Institute, we host our CouchDB instance through IBM's Cloudant. We also have an instance of our Go api running on CloudFoundry.`,
        )}
        {withFilter('data')(
          Mongo,
          {
            className: 'click icon',
          },
          `My interaction with MongoDB has typically been through Python and pymongo, but occasionally I get right in with the cli or through RoboMongo.`,
        )}
        {withFilter('data')(
          Couch,
          {
            className: 'click icon',
          },
          `CouchDB is, in my opinion, the most impressive and simple NoSQL data option availible. Its simplicity commends it over both Elasicsearch and MongoDB. As a bonus, it's written in Erlang.`,
        )}
        {withFilter('data')(
          Postgres,
          {
            className: 'click icon',
          },
          `Postgres is the default choice for any Elixir (with Ecto) application. I've also used Postgres with PostGIS and CartoDB for geocoding.`,
        )}
        {withFilter('data')(
          MySQL,
          {
            className: 'click icon',
          },
          `MySQL was the first database that I became comfortable with, mainly through PHP (Laravel). I don't use it much anymore, but am still confortable with its nuances.`,
        )}
        {withFilter('integration')(
          Jenkins,
          {
            className: 'click icon',
          },
          `I have a familiarity with Jenkins, but have opted for other CI/CD options in recent days.`,
        )}
        {withFilter('integration')(
          Travis,
          {
            className: 'click icon',
          },
          `TravisCI is a cool technology and it's used on the repo for this site, and by default on most of my repos.`,
        )}
        {withFilter('integration')(
          Actions,
          {
            className: 'click icon',
          },
          `GitHub Actions is probably the coolest new CI solution. Rather than hosting a Jenkins slave or enabling Travis, Actions enables basic CI with nothing more than a repo. As well, it leverages Docker and Bash to create a stunningly smooth experience.`,
        )}
      </div>
    </>
  )
}

const SkillText = ({ text }) => {
  return (
    <div className="skill-text-wrapper">
      <p className="skill-text">{text}</p>
    </div>
  )
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState('history')
  const [selectedSkillText, setSelectedSkillText] = useState('')

  const selectText = (text) => {
    if (text !== '' && text === selectedSkillText) {
      return setSelectedSkillText('')
    }
    setSelectedSkillText(text)
  }

  // TODO: Include a "uses" section that talks about editor, keyboard, etc.
  return (
    <div className="wrapper skills">
      {'Skills'.split('').map((l, i) => (
        <span className="view-header-item" data-letter={l} key={i}>
          {l}
        </span>
      ))}
      <div className="selector">
        <div
          className={`selection left click ${
            activeTab === 'history' ? 'selector-active' : ''
          }`}
          onClick={() => setActiveTab('history')}
        >
          <i className="fas fa-history"></i>
        </div>
        <div
          className={`selection right click ${
            activeTab === 'skills' ? 'selector-active' : ''
          }`}
          onClick={() => setActiveTab('skills')}
        >
          <i className="fas fa-list"></i>
          {activeTab !== 'skills' && (
            <div className="click-here">
              <i className="fas fa-caret-up bounce" />
              skills
            </div>
          )}
        </div>
      </div>
      {activeTab === 'skills' && <SkillList setSelectedText={selectText} />}
      {activeTab === 'history' && <History />}
      {selectedSkillText !== '' && activeTab === 'skills' && (
        <SkillText text={selectedSkillText} />
      )}
    </div>
  )
}

export default Skills
