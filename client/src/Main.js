import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home.js";
import About from "./components/About.js";
import Contact from "./components/Contact";
import Error from "./components/Error.js";
import Connect from "./components/Connect.js";

// import Navigation from "./components/Navigation.js"
import App from './App'

class Main extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
        <div>
          {/* <Navigation /> */}
          <Switch>

            <Route path="/" component={Home} exact />
            <Route path="/App" component={App} />
            <Route path="/about" component={About}  /> 
            <Route path="/connect" component={Connect}  /> 
            <Route path="/contact" component={Contact}  />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>

      {/* <div className="container">
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="https://github.com/Chaoyuuu/InsuranceWeb" target="_blank">BlockChain Dapp | Insurance Web</a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small><a className="nav-link" href="#"></a></small>
            </li>
          </ul>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex justify-content-center">
            <h2>hiii</h2>
            </main>
          </div>
        </div>
        </div> */}

        </div>
      
    );
  }
}

export default Main;
