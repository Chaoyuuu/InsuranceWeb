import React, { Component } from "react";
import { Navbar, Nav, NavDropdown} from "react-bootstrap";

class NavBar extends Component {
    render() {
        return (
            <div>               
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="https://github.com/Chaoyuuu/InsuranceWeb">Insurance Dapp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto mt-2 mt-lg-0">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/App">SetUserInfo</Nav.Link>
                    <Nav.Link href="/MyContract">MyContract</Nav.Link>
                    <Nav.Link href="/Claim">Claim</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <Nav.Link href="/Connect DB">Connect</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
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
