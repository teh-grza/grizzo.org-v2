import React, { Component } from "react";
import PageHeader from "./../components/PageHeader";
import IconGithub from "./../svg/IconGithub";
import IconTwitter from "./../svg/IconTwitter";
import IconLinkedin from "./../svg/IconLinkedin";
import IconBandcamp from "./../svg/IconBandcamp";
import IconYoutube from "./../svg/IconYoutube";
import IconTumblr from "./../svg/IconTumblr";

class ContactPage extends Component {
  render() {
    return (
      <div className="page contact_page">
        <PageHeader title="Contact Me" />
        <h4>There are many ways of making me talk</h4>
        <section className="text_wrapper music-production">
          <p></p>
          <div className="contact-icons">
            <dl>
              <dt><IconGithub /></dt>
              <dd>Github's where I'm putting my code these days. Unfortunately most of my work pre-2018 is in private client repos.</dd>
              <dt><IconTwitter /></dt>
              <dd>I tweet occasionally about code and frequently about heart-warming animal stories.</dd>
              <dt><IconLinkedin /></dt>
              <dd>Through it all, LinkedIn was there.</dd>
              <dt><IconBandcamp /></dt>
              <dd>Bandcamp is where I put unpleasant music.</dd>
              <dt><IconYoutube /></dt>
              <dd>Youtube is where I put Blazers highlights videos.</dd>
              <dt><IconTumblr /></dt>
              <dd>And my Tumblr blog is a real snoozer.</dd>
            </dl>
          </div>
        </section>
      </div>
    )
  }
}

export default ContactPage;
