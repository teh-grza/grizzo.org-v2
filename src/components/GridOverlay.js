import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';

class GridOverlay extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
      title: "grid"
    };
  }

  handleClick(e) {
    e.preventDefault();
    // adjusts to "No grid" when the grid is showing
    let new_title = this.state.show ? "grid" : "no grid";
    this.setState({
      show: !this.state.show,
      title: new_title
    });
  }

  render() {
    return (
      <div>
          <a href="" onClick={ (e) =>  this.handleClick(e) }>{this.state.title}</a>
          <ToggleDisplay show={this.state.show} tag="section" className="grid-overlay">
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
          </ToggleDisplay>
      </div>
    );
  }
}

export default GridOverlay;
