import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';

class GridOverlay extends Component {

  constructor() {
    super();
    this.state = { show: false };
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div>
          <button href="" onClick={ () => this.handleClick() }>Grid</button>
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
