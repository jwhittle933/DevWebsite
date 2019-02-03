import React, { Component } from 'react';


class Developer extends Component {

  scrollToSkills(){
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth'})
  }

  render() {
    return (
      <div className="wrapper developer">
        <h2>Developer</h2>

        <p><i>(Jump to <a href="#skill" onClick={ this.scrollToSkills }>skills</a>)</i></p>

        <p>My journey into development started in late 2017 with SQL at the recommendation of a friend. After exhausting the free resources I could find online, I turned to Treehouse, which is free to Louisville residents through the public library. The only catch is that you must remain active every 21 days to continue your membership.</p>

        <p>When I had finished SQL, I took a blind leap into php. The php track began with HTML and CSS, both quite extensive courses by themselves. When I had completed HTML and CSS, I decided to put a haitus on php and move to JavaScript. Spending 4-5 hours a day on JavaScript, I completed almost everything Treehouse offers in about a month, including JavaScript basics, Object-Oriented JavaScript, AJAX, jQuery, React, Vue, Node, and various "JavaScript by Example" courses.</p>

        <p>I then came back around to php, and in similar fashion, I completed Treehouse's php track in a month, including basic php, Object-Oriented php, Laravel, WordPress, and various "php by Example" courses.</p>

        <p>A developer friend, who would routinely inspect and review my code, recommended that I start building my own projects with Vue and Laravel (technologies that he was working with at the time). Because Treehouse only covered Laravel 4 and Vue 1, I turned to Laracasts to get up to speed with Laravel 5 and Vue 2, as well as O'Reily's <a href="https://www.amazon.com/Vue-js-Running-Building-Accessible-Performant-dp-1491997249/dp/1491997249/ref=mt_paperback?_encoding=UTF8&me=&qid=" rel="noopener noreferrer" target="_blank">Vue.js Up and Running</a>, by Callum Macrae.</p>

        <p>After bedding down in the Laravel and Vue docs, along with Laracasts and books, I decided to take my friend's advice and begin my first Laravel/Vue project. I had previously created <a href="https://fathomless-waters-70389.herokuapp.com/" rel="noopener noreferrer" target="_blank">TechApp</a> for my current employer, a demo web application that is meant to assist professors after-hours when a technian is not availible, built in native JavaScript and php. I decided that my first venture into Laravel and Vue would be a re-created and cleaner version of this app. Thus <a href="http://troubleshooter-env.mamnsfbpzm.us-east-2.elasticbeanstalk.com/" rel="noopener noreferrer" target="_blank">TechApp2.0</a> was born. Like its predecessor, the UI allowed a helpless professor access to some tech suggestions based on his or her input, and also gives them the option to submit a technology request. The fully-authenticated backend features a ticketing system for technology requests, personel management, and task assignment, as well as the usual CRUD capabilities. </p>

        <p>Following the <i>sort-of</i> completion of TechApp2.0, I reopned another old project. <a href="https://github.com/jwhittle933/JonathansJumpnJacks" rel="noopener noreferrer" target="_blank">Jonathan's Jump'n Jacks</a>, originally built in native JavaScript, then converted to Vue.js, now built using React, is a fitness web-app that does nutrition calculations and provides users with nutrition advice and meal-planning tailored to their needs.</p>

        <p>In October 2018, I became the site manager for <a href="http://www.philosophipotamus.com" rel="noopener noreferrer" target="_blank">Philosophipotamus</a>, a WordPress site for the philosophical musings of Dr. Mark Coppenger, a professor at The Southern Baptist Theological Seminary. My responsibilities include content management and tinkering with the more frustrating elements of WordPress and php.</p>

        <p>In December 2018, I accepted a job at <a href="https://www.eltoro.com/" target="_blank" rel="noopener noreferrer">El Toro</a> in Louisville writing React and Elixir. I've found myself in the thick of TDD (Test-Driven Development), writing and framing the testing suites that will will drive our new application forward, both for our React front-end and our Elixir back-end.</p>

        <h2>Skills Summary:</h2>
        <ul id="skills">
          <li><strong>Front-End Technologies</strong>: HTML, CSS, JavaScript. Although I write React full-time, I also greatly enjoy Vue, Lit-Element, Express, and any other web-framwork that makes creating highly performant and beautiful UI painless and efficient. I also greatly enjoy Elm and the functional paradigm.</li>
          <li><strong>Server-side, Cloud-based, and Non-Web Technologies</strong>: Currently I work on a team that uses Elixir – a functional langauge that compiles to Erlang – to built API's and micro-services. Occationally we use the Phoenix framework to facilitate Elixir on the web. In the past, I've worked extensivley with Laravel on personal projects and have found it to be the only redeeming quality of php. I manage and maintain one WordPress site, and if it weren't for the magnificent character and pleasantness of the site owner, I would have nothing to do with WordPress. For a time I was seriously considering a career in C#/.NET development. I'm thankful that such madness has passed. Ne'er has such a magnificent langauge been confined to such a terrible environment. Holding a special place in my heart is Golang for its simplicity, performance, and the space it occupies between OO and the functional paradigm. </li>
          <li><strong>Databases</strong>: I've dabbled in databases of all sorts but most of my experience is in MySQL and Postgres.</li>
          <li><strong>Dev Tools</strong>: I've used Git extensively and collaboratively, as well as Docker, Jenkins, Travis CI, and the AWS body of services.</li>
        </ul>
      </div>
    );
  }
}

export default Developer;