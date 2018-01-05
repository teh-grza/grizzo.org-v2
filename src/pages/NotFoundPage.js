import React, { Component } from "react";
import Iframe from "./../Components/Iframe";


class NotFoundPage extends Component {
  render() {
    return (
      <div className="page">
        <h1>404</h1>
        <Iframe src="Blackjack/www/index.html" width="970" height="550" />
      </div>
    )
  }
}
export default NotFoundPage;
