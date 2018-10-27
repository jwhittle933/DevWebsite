import React, { Component } from 'react';
import Jon from '../img/front-wedding.jpg'


class About extends Component {
  render() {
    return (
      <div className="wrapper about">
        <figure>
          <img src={Jon} alt="Jonathan"/>
        </figure>
        <h2>About Me</h2>

        <p>I grew up in a small South Carolina town (Sumter), in a home that held to traditional Christian values. In high school, I excelled at STEM subjects and participated in an collegiate Engineering program. </p>

        <p>After high school, I followed two of my closest friends to Clemson University, the rival school to the school I was raised to support, The University of South Carolina. I began in Civil Engineering, but soon discovered that I wasn't that interested in designing parking lots and watersheds. I also had a desire to go into full-time ministry, so I switched to Philosophy. </p>

        <p>After college I spent two years in ministry internship, where my main repsonsibilities were music and sound. It was there that I met my wife, Emily. We eventually got married and moved to Louisville, KY for Seminary. I graduate with my M.Div this December and will begin a Th.M in Old Testament/Septuagint in January under Dr. Peter Gentry.</p>

        <p>Of special interest to me is language and linguistics, particularly as they are applied to Biblical Exegesis. I have been studying Hebrew and Greek for 4 years now, and over that period have also learned Aramaic, Syriac, Ugaritic, a little Akkadian, Latin, French, and German. </p>
      </div>
    );
  }
}

export default About;