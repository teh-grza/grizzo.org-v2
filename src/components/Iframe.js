import React, { Component } from "react";

class Iframe extends Component {
 render() {
  return (
    <section className="iFrame">
      <iframe frameBorder={0} src={this.props.src} height={this.props.height} width={this.props.width} />
    </section>
  )
 }
}
export default Iframe;
