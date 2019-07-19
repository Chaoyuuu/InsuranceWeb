import React, { Component } from "react";
import NavBar from "./NavBar.js"
import {  Container, Button, Tab, Nav, Row, Col } from "react-bootstrap";

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
                
                <Container>
                    <h2> welcome to Insurance DAPP </h2>
                    <p> check the Button on the left, and choose ypu favorate contract</p>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Contract 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Contract 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Contract 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={9}>
                            <Tab.Content align="central">
                                <Tab.Pane eventKey="first">
                                    <h2> this is Contract 1 ... </h2>
                                    <Button  href="\App" variant="outline-danger">Choose me</Button>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">                            
                                    <h2> this is Contract 2 ... </h2>
                                    <Button variant="outline-danger" disabled>Choose me</Button>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">                           
                                    <h2> this is Contract 3 ... </h2>
                                    <Button variant="outline-danger" disabled>Choose me</Button>
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div>
        );
    }
};

export default MyContract;