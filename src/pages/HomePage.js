import React, { Component } from "react";
import TilesWrapper from "./../Components/TilesWrapper";
import AnimatedWrapper from "./../AnimatedWrapper";

class HomeComponent extends Component {
 render() {
  return (
   <div className="page">
    <TilesWrapper />
   </div>
  )
 }
}
const HomePage = AnimatedWrapper(HomeComponent);
export default HomePage;
