import React, { Component } from 'react';
import Jon from '../img/front-wedding.jpg'


class About extends Component {
  render() {
    return (
      <div className="wrapper about">
        <div className="figure-div">
          <figure className="about-figure">
            <img className="background-img" src={Jon} alt="Jonathan"/>
          </figure>
        </div>
        <div className="about-content">
            <h2>About Me</h2>

            <p>I grew up in a small South Carolina town (Sumter), in a home that held to traditional Christian values. In high school, I excelled at STEM subjects and participated in a collegiate Engineering program. </p>

            <p>After high school, I followed two of my closest friends to Clemson University, the rival school to the school I was raised to support, The University of South Carolina. I began studying Civil Engineering but soon discovered that I wasn't that interested in designing parking lots and watersheds, so I switched to Philosophy. </p>

            <p>After college I spent two years as a guitarist and sound engineer for a church in Clemson. It was there that I met my wife, Emily. We eventually married and moved to Louisville, KY for Seminary at The Southern Baptist Theological Seminary. I graduated with my M.Div in December 2018 and began a Th.M in Old Testament/Septuagint in January under Dr. Peter Gentry, one of the foremost Septuatint scholars in North America.</p>

            <p>I previously worked in IT as support staff for classroom related technology at SBTS. My main responsibilities included servicing A/V technologies, Apple/Windows troubleshooting, servicing hardware (internal drives, GPU, etc), Extron/Crestron room controllers, audio recording and editing with Logic and ProTools, some network tinkering, occasionally moving heavy tables, and reconnecting built-in power supplies that should have never been disconnected. Through this job I was exposed to programming, specifically but not limited to web-based technologies.</p>

            <p>After 7 months of <i>very</i> focused study (and few months of informal Google searching and tinkering), I landed a job at <a href="https://www.eltoro.com/" target="_blank" rel="noopener noreferrer">El Toro</a> as a React/Elixir developer.</p>

            <p>Of special interest to me are language and linguistics, particularly as they are applied to textual trasmission, textual criticism, and exegesis. I have been studying Hebrew and Greek for many years now, and over that period have also acquired Aramaic, Syriac, Ugaritic, a little Akkadian, Latin, French, and German. In fact, it is my love for language that prompted my interest and early success with programming languages. My hope is to one day integrate the two by teaching Ancient Near Eastern literature and building websites that support and disseminate information and material concerning the field (e.g. <a href="http://ccat.sas.upenn.edu/ioscs//" target="_blank" rel="noopener noreferrer">IOSCS</a>, created by Septuagint scholar Jay Treat, and <a href="http://hexapla.org/" target="_blank" rel="noopener noreferrer">The Hexapla Institute</a>, made by doctoral candidate in Septuagint, Russ Hawkins).</p>
        </div>
      </div>
    );
  }
}

export default About;