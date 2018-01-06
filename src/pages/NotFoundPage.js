import React, { Component } from "react";
import Iframe from "./../Components/Iframe";
import PageHeader from "./../components/PageHeader";

class NotFoundPage extends Component {
  render() {
    return (
      <div className="page">
        <PageHeader title="404" />
        <h4>There's no content at this url, but here's a ridiculous Blackjack RPG as a consolation prize.</h4>
        <Iframe src="Blackjack/www/index.html" width="970" height="550" />
      </div>
    )
  }
}
export default NotFoundPage;
