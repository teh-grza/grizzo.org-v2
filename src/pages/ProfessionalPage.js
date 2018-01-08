import React, { Component } from "react"
import { Link } from 'react-router-dom'
import PageHeader from "./../components/PageHeader"
import ExperienceChart from "./../components/ExperienceChart"
import IconGithub from "./../svg/IconGithub"
import IconTwitter from "./../svg/IconTwitter"
import IconLinkedin from "./../svg/IconLinkedin"
import IconTumblr from "./../svg/IconTumblr"

class ProfessionalPage extends Component {
  render() {
    return (
      <div className="page professional_page">
        <PageHeader title="Professional Interests" subtitle="Strictly Business" />
        <h4>Technical Management</h4>
        <section className="text_wrapper tech-management">

          <p>In a leadership position, I lead by example and hope to inspire others with hard work, awesome results, and decent jokes.</p>

          <p>From 2011 until 2017 I managed a team of ~10 developers (20% of the company workforce) at <a href="http://www.wearefine.com/">FINE</a> while holding the company's most senior technical position. As manager of a team of developers my goal is to act as mentor, advocate and visionary for my team while supporting other managers and ensuring strong technical communication company-wide.  I consider myself an excellent teacher and I enjoy helping others reach their goals as much as I enjoy reaching my own.</p>

          <p>When hiring, my goal is to assemble a team of extremely clever people with diverse backgrounds and experiences.  I prize communication, teamwork and other soft skills in addition to top-knotch coding ability in potential hires.  I absolutely avoid cultural toxicity, striving for inclusion, efficiency, and honesty instead.</p>

          <p>And not that anybody likes delivering bad news, but if somebody's got to do it, it should be me.  I can handle difficult conversations and defuse tense moments using charisma, logic or both.</p>

          <p><a href="https://www.linkedin.com/in/mark-f-hoffmann/">LinkedIn</a> has more details of my experience, responsibilities and skills as a technical manager.</p>

        </section>

        <h4>Full-stack web development</h4>
        <section className="text_wrapper full-stack">
          <p>I started building web pages for fun in 1995. I went pro in 2001, the same year as <a href="https://www.youtube.com/watch?v=ZS67ZPK5L2U">Gerald Wallace</a>.</p>
          <dl>
            <dt>2001</dt>
            <dd>1st dev job: building .htm pages</dd>
            <dt>2002</dt>
            <dd>Freelance: static sites and Wordpress</dd>
            <dt>2004</dt>
            <dd>Hired by <a href="https://www.gravitatedesign.com/">Gravitate</a> as a Developer focused on CSS</dd>
            <dt>2006</dt>
            <dd>Shift to back-end focus: PHP, asp.net ecommerce builds</dd>
            <dt>2007</dt>
            <dd>Hired by <a href="http://www.wearefine.com/">FINE</a> as a Developer focused on CakePHP + jQuery</dd>
            <dt>2009</dt>
            <dd>Switch from SVN to Git</dd>
            <dt>2010</dt>
            <dd>Shift focus to Ruby on Rails + SCSS + jQuery</dd>
            <dt>2011</dt>
            <dd>Promoted to Director of Interactive Technology at FINE</dd>
            <dt>2012</dt>
            <dd><a href="https://github.com/wearefine/fae">FAE</a> is born</dd>
            <dt>2015-ish</dt>
            <dd>Shift focus to vanilla JS / frameworks</dd>
            <dt>2017</dt>
            <dd>Shift focus to Vue.js and React</dd>
          </dl>

          <p>Technologies/tools I've used professionally: HTML, CSS, JS, PHP, Ruby, ASP, ASP.net, SQL, jQuery, Vue, Visual Basic, XML, JSON, WordPress, CakePHP, Ruby on Rails, Slim, Capistrano, Jenkins, Visual Studio, Dreamweaver, Sublime Text, Atom, Flash, Photoshop, Word, Excel, PowerPoint, Google Suite, Redmine, Jira, Github, Bitbucket.</p>

          <p>So I've been a web dev for a long time and have worn many hats.  These days, I'm most excited about Progressive Web Apps, VR/AR, and React.</p>


        </section>

        <figure className="experience-skills">
          <ExperienceChart />
        </figure>

        <h4>Game Development</h4>
        <section className="text_wrapper tech-management">
          <p>I released a game in 1992 (a collaboration with my dad) and another in 2014 (an RPG in response to a dis track I received). I'm hoping to be more prolific moving forward-- hopeful enough that I formed an LLC and began working full-time on my first official release in November 2017.</p>
          <p>Underground Software (the same name my dad and I used in 1992) does not yet have a solid web presence but I intend to produce one as soon as there's games to promote.  In the meantime, my defunct <a href="http://teh-grza.tumblr.com/">Tumblr</a> may have a new life someday. Also the <Link to="/notFound">404 page</Link> of this site features a small Blackjack-focused RPG I wrote over a few days.</p>

        </section>

        <section className="icon-links">
          <IconLinkedin />
          <IconGithub />
          <IconTwitter />
        </section>

      </div>
    )
  }
}

export default ProfessionalPage;
