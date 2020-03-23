import React, { useState, useEffect, useRef } from 'react'
import Jon from '../img/front-wedding.jpg'

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

const Welcome = () => {
  const [featureTexts] = useState([
    {
      title: 'Engineer',
      text: [
        `I'm a multi-domain software engineer who enjoys cutting-edge, hyper-experimental, who-knows-if-it'll-work technologies. I'd rather be shaping the future than fixing the past.`,
        `I have expertise in both functional and object-oriented paradigms, though, given the choice, I'd never choose OOP.`,
        `My preferred language is Go, but I also have a deep love for Elixer and Rust. I also write JavaScript and Python in when the occasion calls for it..`,
      ],
    },
    { title: 'Academic', text: [`I'm an academic`] },
    { title: 'Athlete', text: [`I've been lifing for a long time`] },
  ])

  const [currentText, setCurrrentText] = useState(featureTexts[0])

  const getIndex = ct => featureTexts.findIndex(i => i.title === ct.title)

  useInterval(() => {
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
              {featureTexts.map(c => (
                <span
                  className={
                    c.title === currentText.title ? 'welcome-active' : ''
                  }
                />
              ))}
            </div>
            <h2>{currentText.title}</h2>
            {currentText.text.map(t => (
              <p>{t}</p>
            ))}
          </div>
        </div>
      </div>
      {/* <p> */}
      {/*   I'm a self-taught, programming polyglot who stumbled and bumbled into */}
      {/*   a love for web development and computer science. Currently, I'm a */}
      {/*   React/Elixir developer for{' '} */}
      {/*   <a */}
      {/*     href="https://www.eltoro.com/" */}
      {/*     target="_blank" */}
      {/*     rel="noopener noreferrer" */}
      {/*   > */}
      {/*     El Toro */}
      {/*   </a>{' '} */}
      {/*   and a student in the doctoral program at The Southern Baptist */}
      {/*   Theological Seminary, studying Ancient Near Eastern Languages, Texts, */}
      {/*   and Textual Transmission. My desire is to blend my two loves: web */}
      {/*   development and Ancient Near Eastern Languages, an ecclectic mix of */}
      {/*   ancient and modern.{' '} */}
      {/* </p> */}
      {/* <p> */}
      {/*   During the day I write JavaScript/React on the front-end and */}
      {/*   Elixir/Phoenix on the back. Although I love these languages and */}
      {/*   couldn't imagine two better to work with professionally, I also enjoy */}
      {/*   more traditionally Object-Oriented languages, such as PHP, C#, and */}
      {/*   Python. Of particular interest to me is Golang, a language that sits */}
      {/*   almost perfectly between the OO and functional paradigms. */}
      {/* </p> */}
    </div>
  )
}

export default Welcome
