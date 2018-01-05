import React from 'react'

class PageHeader extends React.Component {
  render() {
    if (this.props.subtitle) {
      return (
        <section className="page-header">
          <h2>{this.props.title}</h2>
          <h3>{this.props.subtitle}</h3>
        </section>
      );
    } else {
      return (
        <section className="page-header">
          <h2>{this.props.title}</h2>
        </section>
      );
    }
  }
}

export default PageHeader
