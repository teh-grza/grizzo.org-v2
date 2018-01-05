import React from 'react';
import { Link } from 'react-router-dom';
import Tile from "./../Components/Tile";

class TilesWrapper extends React.Component {
  render() {
    return (
        <section className="tiles_wrapper">
          <Tile tileClass="spinner" title="professional interests" link="/professional" />
          <Tile tileClass="space" />
          <Tile tileClass="space boxed" />
          <Tile tileClass="space" />
          <Tile tileClass="boxed corner_color"  title="personal interests" link="/professional"  />
          <Tile tileClass="space" />
          <Tile tileClass="space boxed" />
          <Tile tileClass="space" />
          <Tile tileClass="coffee" title="contact me" link="/contact" />
        </section>
    );
  }
}

export default TilesWrapper;
