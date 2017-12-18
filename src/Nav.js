import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import GridOverlay from "./components/GridOverlay";
import Home from "./pages/HomePage";
import Professional from "./pages/ProfessionalPage";
import TransitionGroup from "react-transition-group/TransitionGroup";

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="TopBar">
          <Link to="/">Home</Link>
          <Link to="/professional">Professional</Link>
          <GridOverlay />
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
      </div>
    );
  }
}

export default App;
