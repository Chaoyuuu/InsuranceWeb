import React from "react";
import NavBar from "./NavBar.js"
import { Container } from "react-bootstrap";

const About = () =>{
   
    return (
        <div>
            <NavBar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container>

            <h3>Smart Contract - Contract 1</h3>
            <img src="https://i.imgur.com/Pk7OCag.jpg" width="85%" alt="code "></img>
            </Container>
        </div>
    );
};

export default About;