import React from 'react';
import { Link } from 'react-router-dom';
import Tile from "./../Components/Tile";

class TilesWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.class_names = "tiles_wrapper";
  }

  componentDidMount() {
    const img = new Image();
    img.onload = () => {
      this.class_names = "tiles_wrapper bg_loaded";
      this.setState();
    };
    if (window.innerWidth < 1200) {
      img.src = 'images/hubble_620.png';
    } else {
      img.src = 'images/hubble_1400.png'
    }
  }

  render() {
    return (
        <section className={this.class_names}>
          <Tile title="professional interests" link="/professional" />
          <Tile tileClass="show_bg" />
          <Tile tileClass="show_bg" />
          <Tile tileClass="show_bg" />
          <Tile title="personal interests" link="/professional"  />
          <Tile tileClass="show_bg" />
          <Tile tileClass="show_bg" />
          <Tile tileClass="show_bg" />
          <Tile title="contact me" link="/contact" />
        </section>
    );
  }
}

export default TilesWrapper;
