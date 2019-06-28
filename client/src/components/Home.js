import React, { Component } from "react";
import "./css/Home.css";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Carousel} from "react-bootstrap";
import { Card, Row, Col, Media, Jumbotron, Image} from "react-bootstrap";

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

                {/* Intro */}
                <Carousel id="Intro">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.imgur.com/WBtrdgk.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption className="carousel-content">
                            <Row><h3>First slide label</h3></Row>
                            <Row><p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></Row>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.imgur.com/WBtrdgk.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption className="carousel-content">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.imgur.com/WBtrdgk.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption className="carousel-content">
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

          
                {/* About */}
                <Jumbotron fluid id="about">
                    <Container className="about-container">
                        <Row> 
                            <Col className="col-md-offset-12 col-md-12 titlee">
                                <h2> What is Insurance Dapp </h2>
                                <div className="heading-line"></div>
                                <p> a website with blockchain </p>
                            </Col>
                        </Row>

                        <Media as="li">
                            <img
                            width={512}
                            height={300}
                            className="mr-4 img"
                            src="https://i.imgur.com/yFd5QDg.jpg"
                            alt="Generic placeholder"
                            />
                            <Media.Body className="body">
                            <h5>List-based media object</h5>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                            </Media.Body>
                        </Media>
                    </Container>
                </Jumbotron>

                <Image id="pall-img" src="https://i.imgur.com/HQQFUTX.jpg" fluid />             

                {/* tool */}
                <Container id="tool">
                    <Row> 
                        <Col className="col-md-offset-12 col-md-12 tilte">
                            <h2> Tools </h2>
                            <div className="heading-line"></div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} sm={3} md={3} lg={3} className="card_1">
                            <a href="https://github.com/Chaoyuuu/InsuranceWeb">
                            <Image
                                width={250}
                                height={250} 
                                src="https://i.imgur.com/wzIfRRo.jpg/" roundedCircle/>
                            </a>
                            <h3>ethereum</h3>
                            <p>the text </p>
                        </Col>
                        <Col xs={12} sm={3} md={3} lg={3} className="card_2">
                            <a href="https://github.com/Chaoyuuu/InsuranceWeb">
                            <Image 
                                width={250}
                                height={250} 
                                src="https://i.imgur.com/wzIfRRo.jpg/" roundedCircle />
                            </a>
                            <h3>ethereum</h3>
                            <p>the text </p>
                        </Col>
                        <Col xs={12} sm={3} md={3} lg={3} className="card_3">
                            <a href="https://github.com/Chaoyuuu/InsuranceWeb">
                            <Image 
                                width={250}
                                height={250} 
                                src="https://i.imgur.com/wzIfRRo.jpg/" roundedCircle/>
                            </a>
                            <h3>ethereum</h3>
                            <p>the text </p>
                        </Col>
                        <Col xs={12} sm={3} md={3} lg={3} className="card_4">
                            <a href="https://github.com/Chaoyuuu/InsuranceWeb">
                            <Image 
                                width={250}
                                height={250} 
                                src="https://i.imgur.com/wzIfRRo.jpg/" roundedCircle/>
                            </a>
                            <h3>ethereum</h3>
                            <p>the text </p>
                        </Col>
                    </Row>
                </Container>

                {/* about_me */}
                <Jumbotron fluid id="about_me">
                    <Container className="about-container">
                        <Row> 
                            <Col className="col-md-offset-12 col-md-12 titlee">
                                <h2> What is Insurance Dapp </h2>
                                <div className="heading-line"></div>
                                <p> a website with blockchain </p>
                            </Col>
                        </Row>

                        <Media as="li">
                            <img
                            width={512}
                            height={300}
                            className="mr-4 img"
                            src="https://i.imgur.com/yFd5QDg.jpg"
                            alt="Generic placeholder"
                            />
                            <Media.Body className="body">
                            <h5>List-based media object</h5>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                            </Media.Body>
                        </Media>
                    </Container>
                </Jumbotron>


             
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