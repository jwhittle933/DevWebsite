import React, { useState, useEffect, useRef } from 'react'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const featureTexts = [
  {
    title: 'Engineer',
    text: [
      <p key="eng-1">
        I'm a multi-domain software engineer who enjoys cutting-edge,
        hyper-experimental, who-knows-if-it'll-work technology building. I'd
        rather be shaping the future than fixing the past.{' '}
      </p>,
      <p key="eng-2">
        I have expertise in both functional and object-oriented paradigms,
        though, given the choice, I'd never choose OOP.
      </p>,
      <p key="eng-3">
        My language of choice is Go, but I also have a deep interest in Elixir
        and Rust. I write JavaScript and Python when the occasion calls for it.
      </p>,
      <p key="eng-4">
        Happily employed by{' '}
        <a
          className="link"
          href="https://eltoro.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          eltoro.com
        </a>
        . Mentor at{' '}
        <a
          className="link"
          href="https://exercism.io/tracks/javascript/mentors"
          target="_blank"
          rel="noopener noreferrer"
        >
          exercism.io
        </a>
        .
      </p>,
    ],
  },
  {
    title: 'Academic',
    text: [
      <p key="ac-1">
        Since mid-2019, I've been working toward a doctorate (M.Div 2018, Th.M
        December 2020, Ph.D est. 2023)
      </p>,
      <p key="ac-2">
        My expertise is in Ancient Near Eastern Languages and Linguistics, with
        a special interest in Hebrew Bible, Septuagint (Greek), Peshitta
        (Syriac), Ugaritic literature, and the many ways that these things
        intersect.
      </p>,
      <p key="ac-3">
        In early 2020, I took over as the principle software engineer at{' '}
        <a
          className="link"
          href="https://hexapla.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Hexapla Institute
        </a>
        , an international collaboration of scholars committed to producing a
        new, critical edition of Origen's Hexaplaric Fragments. I build the
        software that makes this happen.
      </p>,
    ],
  },
  {
    title: 'Athlete',
    text: [
      <p key="ath-1">
        At 14 years old I began weight training for high-school football. Now,
        I'm a 30 year old with back problems who loves to lift heavy weight.
      </p>,
      <p key="ath-2">
        In May of 2019, weighing about 210 lbs, my deadlift was around 500 lbs.
        My squat numbers are seasonal (depending on the temperament of my
        spine), but I normally work with 315 lbs for reps, around 400 lbs for 1.
        Bench has never gotten above 300 and power clean stays steady at around
        240.
      </p>,
      <p key="ath-3">
        And, the pinnacle of my athletic endeavors: table tennis. And I take it
        very seriously.
      </p>,
    ],
  },
  {
    title: 'Musician',
    text: [
      <p key="mus-1">
        I started playing the guitar around 14 and bounced around the band scene
        for several years.
      </p>,
      <p key="mus-2">
        When I was a student at Clemson Univeristy, I minored in guitar
        performance with a focus on fingerstyle. I was also the lead/rhythm
        guitarist for Clemson FCA, one of the largest FCA chapters in the
        country at the time.
      </p>,
      <p key="mus-3">
        Besides guitar, I'm also an able bassist, drummer, and pianist.
      </p>,
      <p key="mus-4">Guitar of choice: Gibson Les Paul.</p>,
    ],
  },
  {
    title: 'Philosopher',
    text: [
      <p key="phil-1">
        The combination of my philosophical background with my current work in
        linguistics makes me a professional nit-picker.
      </p>,
      <p>
        Of particular philosophical interest is the philosophy of science and
        the underlying assumptions of empiricism. Related to this is
        epistemology, or the study of knowledge, i.e., how do we know what we
        know? And how do you know that?
      </p>,
      <p>
        During college I studied metaphysics, existentialism, both classical and
        contemporary philosophy, as well as philosopy of film.
      </p>,
    ],
  },
]

function useInterval(callback, delay) {
  const savedCallback = useRef()

  function tick() {
    savedCallback.current()
  }

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const TextRotation = ({ featureIndex, play }) => {
  return (
    <div>
      <h2 className={`feature-text-header ${play && 'feature-rotate'}`}>
        {featureTexts[featureIndex].title}
      </h2>
      {featureTexts[featureIndex].text.map((t) => t)}
    </div>
  )
}

const Welcome = () => {
  const [currentText, setCurrentText] = useState(featureTexts[0])
  const [play, setPlay] = useState(true)

  const getIndex = (ct) => featureTexts.findIndex((i) => i.title === ct.title)

  useInterval(() => {
    if (!play) return

    let ind = getIndex(currentText)

    if (ind === featureTexts.length - 1) {
      setCurrentText(featureTexts[0])
      return
    }

    setCurrentText(featureTexts[ind + 1])
  }, 15000)

  return (
    <div className="wrapper">
      <div className="welcome-image">
        <div className="welcome-content">
          <div className="welcome-item focus">
            <div className="welcome-active-text">
              {featureTexts.map((c, i) => (
                <span
                  key={i}
                  className={
                    c.title === currentText.title ? 'welcome-active' : ''
                  }
                  onClick={() => setCurrentText(featureTexts[i])}
                />
              ))}
            </div>
            {/* <div className="welcome-play-pause"> */}
            {/*   <i */}
            {/*     className="fas fa-play fa-sm click" */}
            {/*     style={{ color: play ? '#17E64E' : '' }} */}
            {/*     onClick={() => setPlay(true)} */}
            {/*   ></i> */}
            {/*   <i */}
            {/*     className="fas fa-pause fa-sm click" */}
            {/*     style={{ color: play ? '' : '#F28907' }} */}
            {/*     onClick={() => setPlay(false)} */}
            {/*   ></i> */}
            {/*   <div className="loader"></div> */}
            {/* </div> */}
            <TextRotation featureIndex={getIndex(currentText)} play={play} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
