import React, { Component } from "react"
import Iframe from "./../Components/Iframe"
import PageHeader from "./../components/PageHeader"

class NotFoundPage extends Component {
  render() {
    return (
      <div className="page">
        <PageHeader title="404" />
        <h4>If you were looking for the 404 page with a ridiculous Blackjack RPG on it, you're in the right place.  Otherwise, sorry, you're in the wrong place.</h4>
        <section style={{background: "rgba(255,255,255,.3)", padding: "1em 0"}} className="text_wrapper not-found">
          <Iframe src="Blackjack/www/index.html" width="100%" height="540" />
          <p className="rmmv-message">Unfortunately, <a href="http://www.rpgmakerweb.com/products/programs/rpg-maker-mv">RMMV</a>'s canvas-based rendering loses touch / click support when sized responsively within a fluid iFrame.</p>
        </section>
      </div>
    )
  }
}
export default NotFoundPage;
