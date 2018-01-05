import React, { Component } from "react";
import GridOverlay from "./GridOverlay";
import ColorSwitch from "./ColorSwitch";
import { Link } from "react-router-dom";
class Footer extends Component {
 render() {
  return (
   <footer>
     <nav>
       <Link to="/">Home</Link>
       <Link to="/professional">Professional</Link>
       <Link to="/personal">Personal</Link>

       <GridOverlay />
       <ColorSwitch />
     </nav>
  </footer>
  )
 }
}
export default Footer;
