import React, { Component } from "react";
import { Navbar, Nav, NavDropdown} from "react-bootstrap";

class NavBar extends Component {

    style = {
        backgroundColor: "#F4D03F",
        color: "red"
    };

    render() {
        return (
            <div>      
                <style >
                    {`
                    nav-flat{
                        color: red;
                      }

        
                    `}
                </style>
         
                <Navbar expand="lg" id="menu" className="fixed-top" style={this.style}>
                <Navbar.Brand href="https://github.com/Chaoyuuu/InsuranceWeb" variant="flat">INSURANCE DAPP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto mt-2 mt-lg-0">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/App">SetUserInfo</Nav.Link>
                    <Nav.Link href="/MyContract">MyContract</Nav.Link>
                    {/* <Nav.Link href="/Claim">Claim</Nav.Link> */}
                    {/* <Nav.Link href="/About">About</Nav.Link> */}
                    <Nav.Link href="/Connect">HospitalDB</Nav.Link>
                    <Nav.Link href="/Contracts">Contract</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>        
        );
    }
};

export default NavBar;
