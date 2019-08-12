import React, { Component } from "react";
import "./css/Home.css";
import NavBar from "./NavBar.js"
import { Form, FormControl, Button, Container, Carousel} from "react-bootstrap";
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
                <NavBar/>
                
                {/* Intro */}
                <Carousel id="Intro">
                    <Carousel.Item className="carousel-content1">
                        <img
                        className="d-block w-100"
                        src="https://i.imgur.com/5P4tuC0.jpg"
                        alt="First slide11111"
                        height={870}
                        />
                        <Carousel.Caption >

                            <h3>快速交易</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            
                            
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.imgur.com/KqwmAg8.jpg"
                        alt="Second slide"
                        height={870}
                        />
                        <Carousel.Caption className="carousel-content">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.imgur.com/5MgPquE.jpg"
                        alt="Third slide"
                        // width={1600}
                        height={870}
                        />
                        <Carousel.Caption className="carousel-content">
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

          
                {/* About */}
                <Jumbotron fluid id="about" >
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
                <Container id="tool" background-color="beige">
                    <Row> 
                        <Col className="col-md-offset-12 col-md-12 tilte">
                            <h2> Tools </h2>
                            <div className="heading-line"></div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} sm={3} md={3} lg={3} className="card_1">
                            <a href="https://www.trufflesuite.com/ganache">
                            <Image
                                width={230}
                                height={230} 
                                src="https://i.imgur.com/sr1NsjK.png" roundedCircle/>
                            </a>
                            <h3>Ganache</h3>
                            <p>the text </p>
                        </Col>
                        <Col xs={12} sm={3} md={3} lg={3} className="card_2">
                            <a href="https://www.ethereum.org/">
                            <Image 
                                width={250}
                                height={230} 
                                src="https://i.imgur.com/IozD8Fx.png" roundedCircle />
                            </a>
                            <h3>Ethereum</h3>
                            <p>the text </p>
                        </Col>
                        <Col xs={12} sm={3} md={3} lg={3} className="card_3">
                            <a href="https://reactjs.org/">
                            <Image 
                                width={240}
                                height={230} 
                                src="https://i.imgur.com/VCYrVXr.png" roundedCircle/>
                            </a>
                            <h3>React</h3>
                            <p>the text </p>
                        </Col>
                        <Col xs={12} sm={3} md={3} lg={3} className="card_4">
                            <a href="https://metamask.io/">
                            <Image 
                                width={250}
                                height={230} 
                                src="https://i.imgur.com/l1xsDOH.jpg" roundedCircle/>
                            </a>
                            <h3>Metamask</h3>
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