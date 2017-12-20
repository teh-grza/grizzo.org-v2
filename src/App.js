import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Home from "./pages/HomePage";
import Footer from "./components/Footer";
import Professional from "./pages/ProfessionalPage";
import TransitionGroup from "react-transition-group/TransitionGroup";

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

class App extends Component {
  render() {
    return (
      <div className="pageWrapper">
        <header>
          <h1>grizzo industries</h1>
          <nav>
            <Link to="/">home</Link>
            <Link to="/professional">professional</Link>
          </nav>
        </header>
        <Route
          exact
          path="/"
          children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <Home {...rest} />}
            </TransitionGroup>
        )}/>
        <Route
           path="/professional"
           children={({ match, ...rest }) => (
             <TransitionGroup component={firstChild}>
               {match && <Professional {...rest} />}
             </TransitionGroup>
          )}/>
        <Footer />
      </div>
    );
  }
}

export default App;
