import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    // add Props for class names added in tiles_wrapper
    if (props.tileClass) {
      this.classNames="tile "+props.tileClass;
    } else {
      this.classNames="tile";
    }
  }
  render() {
    if (this.props.link) {
      return (
        <Link className={this.classNames} to={this.props.link}><span>{this.props.title}</span></Link>
      );
    } else {
      return (
        <div className={this.classNames}><p>{this.props.title}</p></div>
      );
    }
  }
}

export default Tile;
