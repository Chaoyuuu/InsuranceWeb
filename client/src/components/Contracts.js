import React, { Component } from "react";
import NavBar from "./NavBar.js"
import {  Container, Button } from "react-bootstrap";

class MyContract extends Component{

    constructor(props) {
        super(props)
        this.state = {
          
        }
    }

    render(){
        return (
            <div>
                <NavBar/>
                <h2> healthy contract </h2>

                <Container>
                
                </Container>

            </div>
        );
    }
};

export default MyContract;