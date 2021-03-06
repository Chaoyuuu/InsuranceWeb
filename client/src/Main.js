import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home.js";
import About from "./components/About.js";
// import Contact from "./components/Contact";
import Error from "./components/Error.js";
import Connect from "./components/Connect.js";
import App from './App'
import Claim from "./components/Claim.js";
import MyContract from "./components/MyContract.js";
import Contracts from "./components/Contracts.js";
import Company from "./components/Company.js";


class Main extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
        <div>
          <Switch>

            <Route path="/" component={Home} exact />
            <Route path="/App" component={App} />
            <Route path="/MyContract" component={MyContract} />
            <Route path="/Claim/:id" component={Claim} />
            <Route path="/about" component={About}  /> 
            <Route path="/connect" component={Connect}  /> 
            <Route path="/Contracts" component={Contracts}  />
            <Route path="/Company" component={Company}  />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>


        </div>
      
    );
  }
}

export default Main;
