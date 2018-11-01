import React, { Component } from 'react';


class Developer extends Component {
  scrollToSkills(){
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth'})
  }
  render() {
    return (
      <div className="wrapper developer">
        <h2>Developer</h2>

        <p><i>(If you'd like a 50,000-ft overview of this content, skip to the Projects tab; to view a skills summary, skip to the list of <a href="#skill" onClick={ this.scrollToSkills }>skills</a>)</i></p>

        <p>My journey into development started in late 2017 with SQL at the recommendation of a friend. After exhausting the free resources I could find online, I turned to Treehouse, which is free to Louisville residents through the public library. The only catch is that you must remain active every 7 days to continue your membership.</p>

        <p>When I had finished SQL, I took a blind leap into php. The php track began with HTML and CSS, both quite extensive courses by themselves. When I had completed HTML and CSS, I decided to put a haitus on php and move to JavaScript. Spending 4-5 hours a day on JavaScript, I completed almost everything Treehouse offers in about a month, including JavaScript basics, Object-Oriented JavaScript, AJAX, jQuery, React, Vue, Node, and various "JavaScript by Example" courses. </p>

        <p>I then came back around to php, and in similar fashion, I completed Treehouse's php track in a month, including basic php, Object-Oriented php, Laravel, WordPress, and various "php by Example" courses.</p>

        <p>A developer friend, who would routinely inspect and criticize my code, recommended that I start building my own projects with Vue.js and Laravel. Because Treehouse only covered Laravel 4 and Vue 1, I turned to Laracasts to get up to speed with Laravel 5 and Vue 2, as well as O'Reily's <a href="https://www.amazon.com/Vue-js-Running-Building-Accessible-Performant-dp-1491997249/dp/1491997249/ref=mt_paperback?_encoding=UTF8&me=&qid=" rel="noopener noreferrer" target="_blank">Vue.js Up and Running</a>, by Callum Macrae.</p>

        <p>After bedding down in the Laravel and Vue docs, along with Laracasts and books, I decided to take my friend's advice and begin my first Laravel/Vue project. I had previously created <a href="https://fathomless-waters-70389.herokuapp.com/" rel="noopener noreferrer" target="_blank">TechApp</a> for my current employer, a demo web application that is meant to assist professors after-hours when a technian is not availible, built in native JavaScript and php. I decided that my first venture into Laravel and Vue would be a recreated and cleaner version of this app. Thus <a href="https://github.com/jwhittle933/TechApp2.0" rel="noopener noreferrer" target="_blank">TechApp2.0</a> was born. Like its predecessor, the UI allowed a helpless professor access to some tech suggestions based on his or her input, and also gives them the option to submit a technology request. The backend features a "Request Manager" that retrieves all requests from the database and gives technicians CRUD capabilities. </p>

        <p>Following the <i>sort-of</i> completion of TechApp2.0 (it still needs authentication and bug fixes), I reopned another old project. <a href="https://github.com/jwhittle933/JonathansJumpnJacks" rel="noopener noreferrer" target="_blank">Jonathan's Jump'n Jacks</a>, originally built in native JavaScript, then converted to Vue.js, now built using React, is a fitness web-app that does nutrition calculations and provides users with nutrition advice and meal-planning tailored to their needs.</p>

        <p>In October 2018, I became the site manager for <a href="http://www.philosophipotamus.com" rel="noopener noreferrer" target="_blank">Philosophipotamus</a>, a WordPress site for the philosophical musings of Dr. Mark Coppenger, a professor at The Southern Baptist Theological Seminary. I mainly upload new posts, but also play with the back-end php to optimize the UI.</p>

        <h2 id="skills">Skills Summary</h2>
        <ul>
          <li>
            <strong>HTML</strong>: Basic HTML, HTML canvas, HTML media playback, Pug templating
          </li>
          <li>
            <strong>CSS</strong>: Vanilla CSS, Bootstrap, less, Sass
          </li>
          <li>
            <strong>JavaScript</strong>: Capable in traditional, imperative programming with a familiarity of functional, recursive approaches. Proficiency with AJAX (xhr, fetch API, axios). High level proficiency with Vue.js and React, plus a familiarity with AngularJS, Node.js, Express, and jQuery.
          </li>
          <li>
            <strong>PHP</strong>: Proficiency in vanilla php with a preference (and strong love) for Laravel. Familiarity with WordPress CMS.
          </li>
          <li>
            <strong>MySQL/SQLite</strong>: selects, joins, aggregate
            functions; integration with php
          </li>
          <li>
            <strong>Git</strong>
          </li>
        </ul>

        <h3>Minor Skills</h3>
        <ul>
          <li>
            <strong>C#</strong>: Basic introduction to C# programming, including Object-Oriented C#
          </li>
          <li>
            <strong>Swift</strong>: Basic introduction to Swift programming
          </li>
        </ul>

      </div>
    );
  }
}

export default Developer;