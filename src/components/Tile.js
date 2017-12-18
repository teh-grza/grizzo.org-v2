import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    // add Props for class names added in TilesWrapper; CSS will do most of the heavy lifting here
    if (props.tileClass) {
      this.classNames="tile "+props.tileClass;
    } else {
      this.classNames="tile";
    }
    this.tile_title = "";
    if (props.title) {
      if (props.link) {
        this.tile_title = <Link to={props.link}>{props.title}</Link>
      } else {
        this.tile_title = <p>{props.title}</p>
      }
    }
  }
  render() {
    return (
      <div className={this.classNames}>
        {this.tile_title}
      </div>
    );
  }
}

export default Tile;
