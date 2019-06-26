import React, { Component } from "react";
// import { Button } from 'reactstrap';

import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Carousel} from "react-bootstrap";

class Home extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        
    }

    render() {
        return (
            
            <div>               
               
                {/* <Container> */}
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="https://github.com/Chaoyuuu/InsuranceWeb">Insurance Dapp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto mt-2 mt-lg-0">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/App">SetUserInfo</Nav.Link>
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
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
                {/* </Container>  */}
                <h3>Home page :-)</h3>


                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.imgur.com/eAOeogN.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.imgur.com/bDxQpOD.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.imgur.com/Y0ytK8r.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



             
    </div>

        
        );
    }
};
// const Home = () =>{
//     return (
//         <div>
//             Home
//         </div>
//     );
// };

export default Home;