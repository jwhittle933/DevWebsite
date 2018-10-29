import React, { Component } from 'react';
import Jon from '../img/front-wedding.jpg'


class About extends Component {
  render() {
    return (
      <div className="wrapper about">
        <div id="figure-div">
          <figure id="about-figure">
            <img id="background-img" src={Jon} alt="Jonathan"/>
          </figure>
        </div>
        <div id="about-content">
            <h2>About Me</h2>

            <p>I grew up in a small South Carolina town (Sumter), in a home that held to traditional Christian values. In high school, I excelled at STEM subjects and participated in an collegiate Engineering program. </p>

            <p>After high school, I followed two of my closest friends to Clemson University, the rival school to the school I was raised to support, The University of South Carolina. I began in Civil Engineering, but soon discovered that I wasn't that interested in designing parking lots and watersheds. I also had a desire to go into full-time ministry, so I switched to Philosophy. </p>

            <p>After college I spent two years in ministry internship, where my main repsonsibilities were music and sound. It was there that I met my wife, Emily. We eventually got married and moved to Louisville, KY for Seminary. I graduate with my M.Div this December and will begin a Th.M in Old Testament/Septuagint in January under Dr. Peter Gentry.</p>

            <p>I currently work in IT as a technician for classroom related technology. My main responsibilities include servicing A/V technologies, Apple/Windows troubleshooting, servicing hardware (internal drives, GPU, etc), Extron/Crestron room controllers, audio recording and editing with Logiv and ProTools, some network tinkering, occasionally moving heavy tables, and reconnecting built-in power supplies that should have never been disconnected.</p>

            <p>Of special interest to me are language and linguistics, particularly as they are applied to textual trasmission, textual criticism, and exegesis. I have been studying Hebrew and Greek for 4 years now, and over that period have also acquired Aramaic, Syriac, Ugaritic, a little Akkadian, Latin, French, and German. In fact, it is my love for language that prompted my interest and early success with programming languages. My hope is to one day integrate the two by becoming a professor of Ancient Near Eastern literature and building websites that support and disseminate information and material concerning the field (e.g. <a href="http://ccat.sas.upenn.edu/ioscs//" target="_blank" rel="noopener noreferrer">IOSCS</a>, created by Septuagint scholar Jay Treat, and <a href="http://hexapla.org/" target="_blank" rel="noopener noreferrer">The Hexapla Institute</a>, made by doctoral candidate in Septuagint, Russ Hawkins).</p>
        </div>
      </div>
    );
  }
}

export default About;