import React, { Component } from "react";
import PageHeader from "./../components/PageHeader";
import IconBandcamp from "./../svg/IconBandcamp";
import IconYoutube from "./../svg/IconYoutube";

class PersonalPage extends Component {
  render() {
    return (
      <div className="page personal_page">
        <PageHeader title="Personal Interests" subtitle="Quality Not Guaranteed" />
        <h4>Music Production</h4>
        <section className="text_wrapper music-production">
          <p>If I had to pick a genre for my music, I'd choose "bonkers" and "not very good".  Currently I'm working on reeling in my experimental stuff in order to create an RPG game soundtrack.</p>

          <section className="icon-links">
            <IconBandcamp />
          </section>

          <div className="bandcamp-iframe">
            <iframe src="https://bandcamp.com/EmbeddedPlayer/album=408297271/size=large/bgcol=333333/linkcol=ffffff/artwork=small/transparent=true/" seamless><a href="http://grizzo.bandcamp.com/album/relentless">relentless by grizzo</a></iframe>
          </div>

        </section>


        <h4>Video Production</h4>
        <section className="text_wrapper video-production">
          <p>One of my hobbies is cutting together highlight reels of Blazer games.  Some years I do season recaps.</p>

          <section className="icon-links">
            <IconYoutube />
          </section>

          <div className="youtube-iframe">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/I9DIKh2Tm9s?rel=0&amp;showinfo=0" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
            <p>2010/2011 was an awesome and dramatic year for the Blazers, and one where I happened to record a lot of footage.</p>
          </div>
          <br />
        </section>


      </div>
    )
  }
}

export default PersonalPage;
