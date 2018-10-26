import React, { Component } from 'react';


class Developer extends Component {
  render() {
    return (
      <div className="wrapper">
        <h2>Developer</h2>

        <p><i>(If you'd like a 50,000-ft overview of this content, skip to the "Projects" tab)</i></p>

        <p>My journey into development started in early 2018 with SQL at the recommendation of a friend. After exhausting the free resources I could find online, I turned to Treehouse, which is free to Louisville residents through the public library. The only catch is that you must remain active every 7 days to continue your membership.</p>

        <p>When I had finished SQL, I took a blind leap into PHP. The PHP track began with HTML and CSS, both quite extensive courses by themselves. When I had completed HTML and CSS, I decided to put a haitus on PHP and move to JavaScript. Spending 4-5 hours a day on JavaScript, I completed almost everything Treehouse offers in about a month, including JavaScript basics, Object-Oriented JavaScript, AJAX, jQuery, React, Vue, Node, and various "JavaScript by Example" courses. </p>

        <p>I then came back around to PHP, and in similar fashion, I completed Treehouse's php track in a month, including basic PHP, Object-Oriented PHP, Laravel, WordPress, and various "PHP by example" courses.</p>

        <p>A developer friend, who would routinely inspect and criticize my code, recommended that I start building my own projects with Vue.js and Laravel. Because Treehouse's Laravel course only covered version 4 and their Vue course only covered version 1, I turned to Laracasts to get up to speed with Laravel 5 and Vue 2.</p>

        <p>I decided to take his advice and begin my first Laravel/Vue project. I had previously created <a href="https://fathomless-waters-70389.herokuapp.com/" rel="noopener noreferrer" target="_blank">TechApp</a> for my current employer, a demo web application that is meant to assist professors after-hours when a technian is not availible, built in native JavaScript and PHP. I decided that my first venture into Laravel and Vue would be a recreated and cleaned-up version of this app. Thus <a href="https://github.com/jwhittle933/TechApp2.0" rel="noopener noreferrer" target="_blank">TechApp2.0</a> was born. Like its predecessor, the UI allowed a helpless professor access to some tech suggestions based on his or her input, and also gives them the option to submit a technology request. The backend features a "Request Manager" that retrieves all requests from the database and gives the user CRUD capabilities. </p>

        <p>Following the <i>sort-of</i> completion of TechApp2.0 (it still needs authentication and bug fixes), I reopned another old project. <a href="https://github.com/jwhittle933/JonathansJumpnJacks" rel="noopener noreferrer" target="_blank">Jonathan's Jump'n Jacks</a>, originally built in native JavaScript, then converted to Vue, now built using React, is a fitness web-app that does nutrition calculations and provides users with nutrition advice and meal-planning tailored to them.</p>

        <p>In October 2018, I became the site manager for <a href="http://www.philosophipotamus.com" rel="noopener noreferrer" target="_blank">Philosophipotamus</a>, a WordPress site for the philosophical musings of Dr. Mark Coppenger, a professor at The Southern Baptist Theological Seminary.</p>
      </div>
    );
  }
}

export default Developer;