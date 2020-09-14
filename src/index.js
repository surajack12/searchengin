import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Contact from './components/contact'
import Users from './components/users'
import Projects from './components/project'
import Comingsoon from './components/comingsoon'
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


const router =(
<Router>
      <div className="body">
      <Route exact path="/" component={App} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
   
      </div>

</Router>

);
ReactDOM.render( 
  router
  , document.getElementById("root"));
