import React, { useState, useEffect, useRef } from 'react'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const featureTexts = [
  {
    title: 'Engineer',
    text: [
      <p>
        I'm a multi-domain software engineer who enjoys cutting-edge,
        hyper-experimental, who-knows-if-it'll-work technology building. I'd
        rather be shaping the future than fixing the past.{' '}
      </p>,
      <p>
        I have expertise in both functional and object-oriented paradigms,
        though, given the choice, I'd never choose OOP.
      </p>,
      <p>
        My language of choice is Go, but I also have a deep interest in Elixer
        and Rust. I write JavaScript and Python when the occasion calls for it.
      </p>,
      <p>
        Happily employed by{' '}
        <a
          className="link"
          href="https://eltoro.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          eltoro.com
        </a>{' '}
        in Louisville, KY.
      </p>,
    ],
  },
  {
    title: 'Academic',
    text: [
      <p>
        Since mid-2019, I've been working toward a doctorate (M.Div 2018, Th.M
        December 2020, Ph.D est. 2023)
      </p>,
      <p>
        My expertise is in Ancient Near Eastern Languages and Linguistics, with
        a special interest in Hebrew Bible, Septuagint (Greek), Peshitta
        (Syriac), Ugaritic literature, and the many ways that these things
        intersect.
      </p>,
      <p>
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
      <p>
        At 14 years old I began weight training for high-school football. Now,
        I'm a 30 year old with back problems who loves to lift heavy weight.
      </p>,
      <p>
        In May of 2019, weighing about 210 lbs, my deadlift was around 500 lbs.
        My squat numbers are seasonal (depending on the temperament of my
        spine), but I normally work with 315 lbs for reps, around 400 lbs for 1.
        Bench has never gotten above 300 and power clean stays steady at around
        240.
      </p>,
      <p>
        And, the pinnacle of my athletic endeavors: table tennis. And I take it
        very seriously.
      </p>,
    ],
  },
  {
    title: 'Musician',
    text: [
      <p>
        I started playing the guitar around 14 and bounced around the band scene
        for several years.
      </p>,
      <p>
        When I was a student at Clemson Univeristy, I minored in guitar
        performance with a focus on fingerstyle. I was also the lead/rhythm
        guitarist for Clemson FCA, one of the largest FCA chapters in the
        country at the time.
      </p>,
      <p>Besides guitar, I'm also an able bassist, drummer, and pianist.</p>,
      <p>Guitar of choice: Gibson Les Paul.</p>,
    ],
  },
  {
    title: 'Philosopher',
    text: [
      <p>
        The combination of my philosophical background with my current work in
        linguistics makes me a professional nit-picker.
      </p>,
    ],
  },
]

function useInterval(callback, delay) {
  const savedCallback = useRef()
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const TextRotation = ({ featureIndex }) => {
  const previous =
    featureIndex === 0 ? featureTexts.length - 1 : featureIndex - 1
  const next = featureIndex === featureTexts.length - 1 ? 0 : featureIndex + 1

  return (
    <div>
      <div className="feature-rotation">
        <h2 className="feature-text previous click">
          {featureTexts[previous].title}
        </h2>
        <h2 className="feature-text current click">
          {featureTexts[featureIndex].title}
        </h2>
        <h2 className="feature-text next click">{featureTexts[next].title}</h2>
      </div>
      {featureTexts[featureIndex].text.map(t => t)}
    </div>
  )
}

const Welcome = () => {
  const [currentText, setCurrrentText] = useState(featureTexts[0])
  const [play, setPlay] = useState(true)

  const getIndex = ct => featureTexts.findIndex(i => i.title === ct.title)

  useInterval(() => {
    if (!play) return

    let ind = getIndex(currentText)

    if (ind === featureTexts.length - 1) {
      setCurrrentText(featureTexts[0])
      return
    }

    setCurrrentText(featureTexts[ind + 1])
  }, 10000)

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
                  onClick={() => setCurrrentText(featureTexts[i])}
                />
              ))}
            </div>
            <div className="welcome-play-pause">
              <i
                className="fas fa-play fa-sm click"
                style={{ color: play ? '#17E64E' : '' }}
                onClick={() => setPlay(true)}
              ></i>
              <i
                className="fas fa-pause fa-sm click"
                style={{ color: play ? '' : '#F28907' }}
                onClick={() => setPlay(false)}
              ></i>
              <div className="loader"></div>
            </div>
            <TextRotation featureIndex={getIndex(currentText)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
