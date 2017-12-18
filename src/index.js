import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import registerServiceWorker from "./registerServiceWorker";
import "./stylesheets/main.scss";

ReactDOM.render(
 <BrowserRouter>
   <Nav />
 </BrowserRouter>,
 document.getElementById("app")
);

registerServiceWorker();
