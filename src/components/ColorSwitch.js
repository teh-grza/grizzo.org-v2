import React, { Component } from 'react';

class ColorSwitch extends Component {

  constructor() {
    super();
    const color_ways = ["cw-blazers","cw-main","cw-light"];
    let cycle = 0;
    let cw_class = color_ways[cycle];
    document.body.classList.add(cw_class);
    this.state = { cycle: 0, cw_class: cw_class, colorway_count: color_ways.length , color_ways: color_ways};
  }

  handleClick(e) {
    e.preventDefault();

    let cycler = this.state.cycle;
    cycler++;
    if (cycler >= this.state.colorway_count) {
      cycler = 0;
    }
    let new_class = this.state.color_ways[cycler];

    document.body.classList.remove(this.state.cw_class);
    document.body.classList.add(new_class);

    this.setState({
      cycle: cycler,
      cw_class: new_class
    });
  }

  render() {
    return (
      <div>
          <a href="" onClick={ (e) => this.handleClick(e) }>Color Swap</a>
      </div>
    );
  }
}

export default ColorSwitch;
