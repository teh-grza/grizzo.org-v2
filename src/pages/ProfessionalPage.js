import React, { Component } from "react";
import PageHeader from "./../components/PageHeader";
import ExperienceChart from "./../components/ExperienceChart";
import IconGithub from "./../svg/IconGithub";
import IconInstagram from "./../svg/IconInstagram";
import IconLinkedin from "./../svg/IconLinkedin";


class ProfessionalPage extends Component {
  render() {
    return (
      <div className="page professional_page">
        <PageHeader title="Professional Interests" subtitle="Strictly Business" />
        <h4>Full-stack web development</h4>
        <section className="text_wrapper full-stack">
          <p>I started building web pages for fun in 1995. I went pro in 2001, the same year as <a href="https://www.youtube.com/watch?v=ZS67ZPK5L2U">Gerald Wallace</a>.</p>
          <dl>
            <dt>2001</dt>
            <dd>1st dev job: building .htm pages</dd>
            <dt>2002</dt>
            <dd>Freelance: static sites and Wordpress</dd>
            <dt>2004</dt>
            <dd>Hired by <a href="https://www.gravitatedesign.com/">Gravitate</a> as a Developer</dd>
            <dt>2006</dt>
            <dd>Shift to back-end focus: PHP, asp.net ecommerce builds</dd>
            <dt>Late 2007</dt>
            <dd>Hired by <a href="http://www.wearefine.com/">FINE</a> as a Developer focused on CakePHP + jQuery</dd>
            <dt>2010</dt>
            <dd>Shift focus to Ruby on Rails + SCSS + jQuery</dd>
            <dt>2011</dt>
            <dd>Promoted to Director of Interactive Technology at FINE</dd>
            <dt>2012</dt>
            <dd><a href="https://github.com/wearefine/fae">FAE</a> is born!</dd>
            <dt>2015-ish</dt>
            <dd>Shift focus to vanilla JS / frameworks</dd>
            <dt>Early 2017</dt>
            <dd>Shift focus to Vue.js</dd>
            <dt>Late 2017</dt>
            <dd>Shift focus to React DOM</dd>
          </dl>

          <section className="icon-links">
            <IconGithub />
            <IconInstagram />
            <IconLinkedin />
          </section>

        </section>

        <figure className="experience-skills">
          <ExperienceChart />
        </figure>

      </div>
    )
  }
}

export default ProfessionalPage;
