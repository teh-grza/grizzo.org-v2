import React from 'react';
import { Link } from 'react-router-dom';
import Tile from "./../Components/Tile";
import { CSSTransitionGroup } from 'react-transition-group';

class TilesWrapper extends React.Component {
  render() {
    return (
      <CSSTransitionGroup
            transitionName="tileTransition"
            transitionAppear={true}
            transitionAppearTimeout={900}
            transitionEnter={true}
            transitionEnterTimeout={100}
            transitionLeave={false}>
        <section className="tilesWrapper">
          <Tile title="professional interests" link="/professional" />
          <Tile tileClass="space" />
          <Tile tileClass="space boxed" />
          <Tile tileClass="corner_color" title="personal interests" link="/professional" />
          <Tile tileClass="boxed" />
          <Tile tileClass="space" />
          <Tile tileClass="space"  />
          <Tile title="about me" link="/professional" />
          <Tile title="contact / sitemap" link="/professional" />
        </section>
      </CSSTransitionGroup>
    );
  }
}

export default TilesWrapper;
