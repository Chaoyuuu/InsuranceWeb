import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home.js";
import About from "./components/About.js";
import Contact from "./components/Contact";
import Error from "./components/Error.js";
import Navigation from "./components/Navigation.js"
import App from './App'

class Main extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>

            <Route path="/" component={Home} exact />
            <Route path="/App" component={App} />
            <Route path="/about" component={About}  /> 
            <Route path="/contact" Component={Contact}  />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default Main;
