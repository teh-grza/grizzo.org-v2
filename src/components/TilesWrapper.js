import React from 'react';
import { Link } from 'react-router-dom';
import Tile from "./../Components/Tile";

class TilesWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image_loaded: 0
    };
    this.class_names = "tiles_wrapper";
  }

  componentDidMount() {
    console.log("Tiles Mounted");
    const img = new Image();
    img.onload = () => {
      console.log("Image Loaded");
      this.class_names = "tiles_wrapper bg_loaded";
      this.setState({image_loaded: 1});
    };
    if (window.innerWidth < 1200) {
      img.src = 'images/hubble_620.png';
    } else {
      img.src = 'images/hubble_1400.png'
    }
  }

  render() {
    return (
        <section className={this.class_names} image_load={this.state.image_loaded}>
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
