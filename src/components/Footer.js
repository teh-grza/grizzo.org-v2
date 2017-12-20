import React, { Component } from "react";
import GridOverlay from "./GridOverlay";
import ColorSwitch from "./ColorSwitch";
import { Link } from "react-router-dom";
class Footer extends Component {
 render() {
  return (
   <footer>
     <nav>
       <Link to="/">home</Link>
       <Link to="/professional">professional</Link>
       <GridOverlay />
       <ColorSwitch />
     </nav>
  </footer>
  )
 }
}
export default Footer;
