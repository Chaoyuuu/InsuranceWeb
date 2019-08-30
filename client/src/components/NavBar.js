import React, { Component } from "react";
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import { ParallaxProvider, Parallax } from 'react-skrollr'


class NavBar extends Component {

    style = {
        backgroundColor: "#1D5A82",
        'fontSize': '18px',
        'color':'white',
    };

    render() {
        return (
            <div>      

                <ParallaxProvider
                    init={{
                    smoothScrollingDuration: 500,
                    smoothScrolling: true,
                    forceHeight: false
                    }}
                >

                    <Parallax
                        data={{
                        'data--100-start': 'opacity: 0.5; ',
                        'data-100-start': 'opacity: 1; ',
                        // 'data-bottom-top': 'opacity: 0; transform:translateX(-200px)',
                        }}
                    >
                
         
                <Navbar expand="lg" id="menu" className="fixed-top" style={this.style} variant="dark">
                    <img src="https://i.imgur.com/1ipiz7L.png" width="50px" height="50px" alt="logo"/>
                <Navbar.Brand href="https://github.com/Chaoyuuu/InsuranceWeb" variant="dark">INSURANCE DAPP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto mt-2 mt-lg-0">
                    <Nav.Link className="navlink" href="/">Home</Nav.Link>
                    {/* <Nav.Link href="/App">SetUserInfo</Nav.Link> */}
                    <Nav.Link href="/MyContract">MyContract</Nav.Link>
                    {/* <Nav.Link href="/Claim">Claim</Nav.Link> */}
                    {/* <Nav.Link href="/About">About</Nav.Link> */}
                    {/* <Nav.Link href="/Connect">HospitalDB</Nav.Link> */}
                    <Nav.Link href="/Contracts">Select Inurance</Nav.Link>
                    <NavDropdown title="About Dapp" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Smart Contract</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Data Query</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>

                </Parallax> 
                </ParallaxProvider>
            </div>        
        );
    }
};

export default NavBar;
